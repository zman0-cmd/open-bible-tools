window.addEventListener("DOMContentLoaded", () => {
    if (!window.jspdf || !window.jspdf.jsPDF || !window.jspdf.autoTable) {
        alert("PDF or autoTable library not loaded.");
        return;
    }

    const { jsPDF } = window.jspdf;
    jsPDF.API.autoTable = window.jspdf.autoTable;

    // Attach to `window` to make it globally accessible
    window.generateBasicPDF = function () {
        const doc = new jsPDF();

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("Bible Reading Plan", doc.internal.pageSize.getWidth() / 2, 15, { align: "center" });

        doc.autoTable({
            head: [['Day', 'Reading', 'Completed']],
            body: [
                ['Day 1', 'Genesis 1–3', '☐'],
                ['Day 2', 'Genesis 4–6', '☐'],
            ],
            startY: 25,
            styles: { fontSize: 10, cellPadding: 2 },
            theme: 'grid',
        });

        doc.save("Bible_Reading_Plan.pdf");
    };
});
