let aboutMe = document.getElementById("aboutMe");
let contactInfo = document.getElementById("contactInfo");
let projects = document.getElementById("projects");
let osmp = document.getElementById("osmp");
let ttt = document.getElementById("ticTacTUI");
let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");
let projectArchive = document.getElementById("projectArchive")

github.addEventListener("click", () => {
    open("https://github.com/Ahickling04")
})

linkedin.addEventListener("click", () => {
    open("https://www.linkedin.com/in/ahickling04/")
})

aboutMe.addEventListener("click", () => {
    window.location.href = "about.html";
})

contactInfo.addEventListener("click", () => {
    window.location.href = "contact.html";
})

projects.addEventListener("click", () => {
    window.location.href = "projects.html";
})

osmp.addEventListener("click", () => {
    open("https://github.com/Ahickling04/osmp")
})

ttt.addEventListener("click", () => {
    open("https://github.com/Ahickling04/tic-tac-tui")
})

projectArchive.addEventListener("click", () => {
    window.location.href = "https://dev.ahickling.co.uk"
})