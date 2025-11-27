let aboutMe = document.getElementById("aboutMe");
let contactInfo = document.getElementById("contactInfo");
let projects = document.getElementById("projects");

aboutMe.addEventListener("click", () => {
    window.location.href = "about.html";
})

contactInfo.addEventListener("click", () => {
    window.location.href = "contact.html";
})

projects.addEventListener("click", () => {
    window.location.href = "projects.html";
})