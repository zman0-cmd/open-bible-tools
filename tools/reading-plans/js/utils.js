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


function generatePDF() {
    if (!window.jspdf) {
        alert("PDF library (jsPDF) not loaded.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    let y = 10;
    doc.text("Bible Reading Plan", 105, y, { align: "center" });
    y += 10;

    let table = document.getElementById("outputTable");
    if (!table || table.rows.length === 0) {
        alert("No reading plan to export.");
        return;
    }

    for (let row of table.rows) {
        let rowText = Array.from(row.cells).map(cell => cell.innerText).join(" | ");
        doc.text(rowText, 10, y);
        y += 8;

        if (y > 280) { // Create a new page if needed
            doc.addPage();
            y = 10;
        }
    }

    doc.save("Bible_Reading_Plan.pdf");
}

function dateMathBasic(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}