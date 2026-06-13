document
.getElementById("downloadBtn")
.addEventListener("click",()=>{

    const { jsPDF } =
    window.jspdf;

    const doc =
    new jsPDF();

    doc.setFontSize(22);

    doc.text(
        "Certificate of Achievement",
        40,
        50
    );

    doc.setFontSize(14);

    doc.text(
        "Awarded for completing language lessons",
        25,
        80
    );

    doc.save(
        "LingoSphere-Certificate.pdf"
    );

});