function displayPlan(plan) {
    let outputTable = document.getElementById("output");
    outputTable.innerHTML = ""; // Clear previous content

    plan.forEach(entry => {
        let row = document.createElement("tr");

        let dateCell = document.createElement("td");
        dateCell.textContent = entry.date;

        let readingCell = document.createElement("td");
        readingCell.textContent = entry.readings.join(", "); // Format multiple readings

        row.appendChild(dateCell);
        row.appendChild(readingCell);
        outputTable.appendChild(row);
    });
}

function formatDate(date) {
    let dateFormat = document.querySelector('input[name="dateFormat"]:checked').value;
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (zero-based index, so add 1)
    let day = String(date.getDate()).padStart(2, '0'); // Get day
    let year = date.getFullYear(); // Get year
    
    if (dateFormat === "ISO"){
        return `${year}-${month}-${day}`; // YYYY-MM-DD
    }
        else if (dateFormat === "MDY"){
            return `${month}/${day}/${year}`; // MM/DD/YYYY
        }
        else if (dateFormat ==="DMY"){
            return `${day}/${month}/${year}`; // DD/MM/YYY
        }    
        else {
                return `none selected`;
            }

}

function errorCheckBasic(startDate, order, endDate) {
    if (!startDate) {
        alert("Please select a start date.");
        return;
    }

    if (!order) {
        alert("No Order selected");
        return;
    } 

    if (!endDate) {
        alert("Please select an end date.");
        return
    }
}

function generatePlanTextNorm(totalDays, start, plan, books, currentBookIndex, currentChapter, extraDays, chaptersPerDay, remainingChapters){
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
}

window.addEventListener("DOMContentLoaded", () => {
    const startDateInput = document.getElementById("startDate");
    
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');

    startDateInput.value = `${yyyy}-${mm}-${dd}`; // Format: yyyy-mm-dd
});