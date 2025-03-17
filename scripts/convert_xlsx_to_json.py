import pandas as pd
import os
import json

# Load the Excel file (update filename if needed)
file_path = "bsb.xlsx"

# Read Excel into a pandas DataFrame
df = pd.read_excel(file_path, usecols=[0, 1, 2], names=["VerseID", "Reference", "Text"])

# Dictionary to hold structured Bible data
bible_data = {}

for _, row in df.iterrows():
    verse_id = str(row["VerseID"])  # Store as string for consistency
    reference = row["Reference"]  # Example: "1 Samuel 1:1"
    verse_text = row["Text"]

    # Extract book name by splitting at the last space
    last_space_index = reference.rfind(" ")  # Find last space in the reference
    book = reference[:last_space_index]  # Everything before the last space is the book name
    chapter_verse = reference[last_space_index + 1:]  # Everything after the last space

    # Handle missing verse numbers
    if ":" in chapter_verse:
        chapter, verse = chapter_verse.split(":")
    else:
        chapter = chapter_verse
        verse = "1"  # Default to verse 1 if missing

    # Ensure book structure exists
    if book not in bible_data:
        bible_data[book] = {"book": book, "chapters": {}}

    # Ensure chapter structure exists
    if chapter not in bible_data[book]["chapters"]:
        bible_data[book]["chapters"][chapter] = {}

    # Store the verse text with VerseID
    bible_data[book]["chapters"][chapter][verse] = {
        "verse_id": verse_id,
        "text": verse_text
    }

# Create an output directory for JSON files
output_dir = "bible-json"
os.makedirs(output_dir, exist_ok=True)

# Save each book as a separate JSON file
for book, content in bible_data.items():
    book_filename = book.replace(" ", "_").lower() + ".json"
    with open(os.path.join(output_dir, book_filename), "w", encoding="utf-8") as json_file:
        json.dump(content, json_file, indent=4, ensure_ascii=False)

print("Conversion complete! JSON files saved in 'bible-json' directory.")
