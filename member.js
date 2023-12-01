function skillsMember() {
    // 1. Get the skills from the form
    var skills = document.getElementById("skills").value;
    // 2. Split the skills into an array
    var skillsArray = skills.split(",");
    // 3. Sort the skills alphabetically
    skillsArray.sort();
    // 4. Display the skills in alphabetical order
    document.getElementById("skills").value = skillsArray.join(",");
}