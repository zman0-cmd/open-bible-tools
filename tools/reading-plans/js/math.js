function dateMath(duration, endDateInput, startDate) {
    if (duration === "custom" && endDateInput) {
        let endDate = new Date(endDateInput);
        totalDays = Math.ceil((endDate.getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) + 1;    
    } else {
        totalDays = (duration === "90_days") ? 90 : (duration === "6_months") ? 180 : 365;
    }
    console.log("Total Days Calculated:", totalDays);
    return totalDays;
}

function chapterMath(books, totalDays) {
    
    let totalChapters = books.reduce((sum, book) => sum + book.chapters, 0); // Count all chapters
    let chaptersPerDay = Math.floor(totalChapters / totalDays);
    let extraDays = totalChapters % totalDays;

    let currentBookIndex = 0;
    let currentChapter = 1;
    let remainingChapters = totalChapters;

    console.log("Total Chapters:", totalChapters);
    console.log("Chapters Per Day:", chaptersPerDay);
    console.log("Extra Days:", extraDays);

    return {
            currentBookIndex,
            currentChapter,
            extraDays,
            chaptersPerDay,
            remainingChapters
    };
}

function readingExtension(plan, totalDays, start) {
    if (plan.length < totalDays) {
        let lastDate = new Date(start);
        lastDate.setDate(start.getDate() + plan.length);

        while (plan.length < totalDays) {
            plan.push({
                date: formatDate(lastDate),
                readings: ["(Catch-up or Reflection)"]
            });
            lastDate.setDate(lastDate.getDate() + 1);
        }
    }
}