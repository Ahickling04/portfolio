let aboutMe = document.getElementById("aboutMe");
let contactInfo = document.getElementById("contactInfo");
let projects = document.getElementById("projects");
let osmp = document.getElementById("osmp");
let ttt = document.getElementById("ticTacTUI");

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
    window.location.href = "https://github.com/Ahickling04/osmp";
})

ttt.addEventListener("click", () => {
    window.location.href = "https://github.com/Ahickling04/tic-tac-tui";
})