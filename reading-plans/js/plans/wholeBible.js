async function generateWholeBiblePlan() {
    let startDate = document.getElementById("startDate").value;
    let duration = document.querySelector('input[name="duration"]:checked').value;
    let includeApocrypha = document.getElementById("includeApocrypha").checked; // Get user choice
    let order = document.querySelector('input[name="order"]:checked').value;


    if (!startDate) {
        alert("Please select a start date.");
        return;
    }

    if (!order) {
        alert("No Order selected");
        return;
    } 

    let response = await fetch("plans/whole-bible.json");
    let data = await response.json();

    let selectedPlan = includeApocrypha ? data.plans.wholeBibleWithApocrypha : data.plans.wholeBible;

    let totalDays = (duration === "90_days") ? 90 : (duration === "6_months") ? 180 : 365;
    let start = new Date(startDate);
    let books = selectedPlan.books;
    let plan = [];

    let totalChapters = books.reduce((sum, book) => sum + book.chapters, 0); // Count all chapters
    let remainingChapters = totalChapters;
    let chaptersPerDay = Math.floor(totalChapters / totalDays); // Base amount
    let extraDays = totalChapters % totalDays; // Remainder to distribute
    let currentBookIndex = 0;
    let currentChapter = 1;


    for (let day = 1; day <= totalDays; day++) {
        let readings = [];
        let chaptersToday = chaptersPerDay + (extraDays > 0 ? 1 : 0); // Add extra chapter to some days
        extraDays--; // Reduce extra days as we use them

        while (chaptersToday > 0 && currentBookIndex < books.length) {
            let book = books[currentBookIndex];
            let chaptersInBook = book.chapters;

            let endChapter = Math.min(currentChapter + chaptersToday - 1, chaptersInBook);
            
            // Check the start and end Chapters, if same only output one chapter number. If only one chapter only output book name.
            if (book.chapters === 1){
                readings.push (`${book.name}`);
            }
                else if (currentChapter === endChapter){ 
                    readings.push(`${book.name} ${currentChapter}`);
                }
                else{
                    readings.push(`${book.name} ${currentChapter} - ${endChapter}`);
                }

            chaptersToday -= (endChapter - currentChapter + 1);
            currentChapter = endChapter + 1;

            if (currentChapter > chaptersInBook) {
                currentBookIndex++;
                currentChapter = 1;
            }
        }

        let readingDate = new Date(start);
        readingDate.setDate(start.getDate() + (day - 1));

        plan.push({
            date: formatDate(readingDate),
            readings: readings
        });

        remainingChapters -= readings.length;
    }

    // Ensure readings extend all the way to the last day
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

    displayPlan(plan);
}
