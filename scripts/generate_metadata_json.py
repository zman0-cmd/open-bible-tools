import os
import json

# Path to the folder containing the JSON books
bible_folder = "bible-json"
output_file = "books.json"

# List of books in order (Adjust if needed)
book_list = [
    ("Genesis", "Gen", 50),
    ("Exodus", "Ex", 40),
    ("Leviticus", "Lev", 27),
    ("Numbers", "Num", 36),
    ("Deuteronomy", "Deut", 34),
    ("Joshua", "Josh", 24),
    ("Judges", "Judg", 21),
    ("Ruth", "Ruth", 4),
    ("1 Samuel", "1Sam", 31),
    ("2 Samuel", "2Sam", 24),
    ("1 Kings", "1Kgs", 22),
    ("2 Kings", "2Kgs", 25),
    ("1 Chronicles", "1Chr", 29),
    ("2 Chronicles", "2Chr", 36),
    ("Ezra", "Ezra", 10),
    ("Nehemiah", "Neh", 13),
    ("Esther", "Est", 10),
    ("Job", "Job", 42),
    ("Psalms", "Ps", 150),
    ("Proverbs", "Prov", 31),
    ("Ecclesiastes", "Eccl", 12),
    ("Song of Solomon", "Song", 8),
    ("Isaiah", "Isa", 66),
    ("Jeremiah", "Jer", 52),
    ("Lamentations", "Lam", 5),
    ("Ezekiel", "Ezek", 48),
    ("Daniel", "Dan", 12),
    ("Hosea", "Hos", 14),
    ("Joel", "Joel", 3),
    ("Amos", "Amos", 9),
    ("Obadiah", "Obad", 1),
    ("Jonah", "Jonah", 4),
    ("Micah", "Mic", 7),
    ("Nahum", "Nah", 3),
    ("Habakkuk", "Hab", 3),
    ("Zephaniah", "Zeph", 3),
    ("Haggai", "Hag", 2),
    ("Zechariah", "Zech", 14),
    ("Malachi", "Mal", 4),
    ("Matthew", "Matt", 28),
    ("Mark", "Mark", 16),
    ("Luke", "Luke", 24),
    ("John", "John", 21),
    ("Acts", "Acts", 28),
    ("Romans", "Rom", 16),
    ("1 Corinthians", "1Cor", 16),
    ("2 Corinthians", "2Cor", 13),
    ("Galatians", "Gal", 6),
    ("Ephesians", "Eph", 6),
    ("Philippians", "Phil", 4),
    ("Colossians", "Col", 4),
    ("1 Thessalonians", "1Thess", 5),
    ("2 Thessalonians", "2Thess", 3),
    ("1 Timothy", "1Tim", 6),
    ("2 Timothy", "2Tim", 4),
    ("Titus", "Titus", 3),
    ("Philemon", "Philem", 1),
    ("Hebrews", "Heb", 13),
    ("James", "Jas", 5),
    ("1 Peter", "1Pet", 5),
    ("2 Peter", "2Pet", 3),
    ("1 John", "1John", 5),
    ("2 John", "2John", 1),
    ("3 John", "3John", 1),
    ("Jude", "Jude", 1),
    ("Revelation", "Rev", 22)
]

# Generate metadata
books_metadata = {"books": []}

for index, (name, abbreviation, chapters) in enumerate(book_list, start=1):
    filename = name.replace(" ", "_").lower() + ".json"
    books_metadata["books"].append({
        "name": name,
        "abbreviation": abbreviation,
        "order": index,
        "chapters": chapters,
        "filename": filename
    })

# Save metadata JSON
with open(output_file, "w", encoding="utf-8") as json_file:
    json.dump(books_metadata, json_file, indent=4, ensure_ascii=False)

print(f"📂 books.json has been created successfully!")
