function generatePlan() {
    let days = document.getElementById("days").value;
    let output = document.getElementById("output");

    let plan = "";
    for (let i = 1; i <= days; i++) {
        plan += `Day ${i}: Read Chapter ${i}\n`;
    }

    output.textContent = plan;
}
