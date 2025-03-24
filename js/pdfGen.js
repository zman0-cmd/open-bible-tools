window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    if (!window.jspdf) {
        console.error("jspdf library not loaded.");
        alert("PDF library not loaded.");
        return;
    }

    if (!window.jspdf.jsPDF) {
        console.error("jsPDF class not found in jspdf library.");
        alert("PDF library not loaded.");
        return;
    }
/* Path Wrong...
    if (!window.jspdf.autoTable) {
        console.error("autoTable plugin not found in jspdf library.");
        alert("autoTable library not loaded.");
        return;
    }

    console.log("jspdf and autoTable libraries loaded successfully");

    const { jsPDF } = window.jspdf;
//    jsPDF.API.autoTable = window.jspdf.autoTable;
*/

function generateBasicPDF () {
        console.log("generateBasicPDF function called");

        const doc = new jsPDF();
        const htmlTable = document.getElementById('outputTable');

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Bible Reading Plan", doc.internal.pageSize.getWidth() / 2, 15, { align: "center" });

        doc.autoTable({
            html: htmlTable,
            startY: 25,
            styles: { fontSize: 10, cellPadding: 2 },
            theme: 'grid',
        });

        doc.save("Bible_Reading_Plan.pdf");
    };

    // Add event listener to the button
    document.getElementById('downloadPDF').addEventListener('click', generateBasicPDF);
});
