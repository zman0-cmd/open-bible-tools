async function generateWholeBiblePlan() {
    let startDate = document.getElementById("startDate").value;
    let duration = document.querySelector('input[name="duration"]:checked').value;
    let order = document.querySelector('input[name="order"]:checked').value;
    let endDateInput = document.getElementById("endDate").value;

    console.log("Start Date:", startDate);
    console.log("Selected Duration:", duration);
    console.log("Custom End Date Input:", endDateInput);

    errorCheckBasic(startDate, order, endDate);

    let response = await fetch("plans/whole-bible.json");
    let data = await response.json();

    let selectedPlan = data.plans.wholeBible;

    let start = new Date(startDate);
    let books = selectedPlan.books;
    let plan = [];

    start.setDate(start.getDate() + 1);

    let totalDays = dateMath(duration, endDateInput, startDate); // Calculate total days

    let { currentBookIndex, currentChapter, extraDays, chaptersPerDay, remainingChapters } = chapterMath(books, totalDays); // Count all chapters

    generatePlanTextNorm(totalDays, start, plan, books, currentBookIndex, currentChapter, extraDays, chaptersPerDay, remainingChapters);

    // Ensure readings extend all the way to the last day
    readingExtension(plan, totalDays, start);

    displayPlan(plan);
}