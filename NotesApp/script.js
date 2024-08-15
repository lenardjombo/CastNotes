function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

function saveDocument() {
    const editorContent = document.getElementById('editor').innerHTML;

    // Create a new instance of jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add HTML content to the PDF
    doc.html(editorContent, {
        callback: function (doc) {
            // Save the PDF with the specified filename
            doc.save('document.pdf');
        },
        x: 10,
        y: 10
    });
}
