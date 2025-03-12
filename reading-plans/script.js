async function generateReadingPlan(duration, startDate) {
    let response = await fetch("plans/whole-bible.json");
    let data = await response.json();

    let totalDays;
    switch (duration) {
        case "90_days": totalDays = 90; break;
        case "6_months": totalDays = 180; break;
        case "1_year": totalDays = 365; break;
        default: totalDays = 365; 
    }

    let start = new Date(startDate);
    let books = data.books;
    let plan = [];
    let chaptersPerDay = Math.ceil(1189 / totalDays); // 1189 total chapters in the protestant Bible

    let currentBookIndex = 0;
    let currentChapter = 1;

    for (let day = 1; day <= totalDays; day++) {
        let reading = [];
        let chaptersLeft = chaptersPerDay;

        while (chaptersLeft > 0 && currentBookIndex < books.length) {
            let book = books[currentBookIndex];
            let chaptersInBook = book.chapters;

            let endChapter = Math.min(currentChapter + chaptersLeft - 1, chaptersInBook);
            reading.push({
                book: book.name,
                startChapter: currentChapter,
                endChapter: endChapter
            });

            chaptersLeft -= (endChapter - currentChapter + 1);
            currentChapter = endChapter + 1;

            if (currentChapter > chaptersInBook) {
                currentBookIndex++;
                currentChapter = 1;
            }
        }

        let readingDate = new Date(start);
        readingDate.setDate(start.getDate() + (day - 1));

        plan.push({
            date: readingDate.toISOString().split("T")[0],
            readings: reading
        });
    }

    console.log(plan);
}

// Example usage:
// generateReadingPlan("1_year", "2025-01-01");
