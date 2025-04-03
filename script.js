function recommendProgram() {
    const mathGrade = parseFloat(document.getElementById("mathGrade").value);
    const businessGrade = parseFloat(document.getElementById("businessGrade").value);
    const englishGrade = parseFloat(document.getElementById("englishGrade").value);
    
    let programName = "";
    let programImage = "";
    let programDetails = "";

    if (mathGrade >= 'A') {
        programName = "Information Technology";
        programImage = "information-technology.jpg";
        programDetails = "Information Technology program details...";
    } else if (businessGrade >= 'B' && englishGrade >= 'B') {
        programName = "Business Management";
        programImage = "Business.jpg";
        programDetails = "Business Management program details...";
    } else if (englishGrade >= 'B') {
        programName = "Communication Studies";
        programImage = "com-card-2020.jpg";
        programDetails = "Communication Studies program details...";
    } else {
        programName = "No program available based on your grades.";
    }

    const recommendationDiv = document.getElementById("recommendation");
    recommendationDiv.innerHTML = `
        <h2>Recommended Program: ${programName}</h2>
        <img src="${programImage}" alt="${programName}">
        <p>${programDetails}</p>
        
    
}