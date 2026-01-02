let homeButton = document.getElementById('homeButton');
let github = document.getElementById('github');
let linkedin = document.getElementById('linkedin');
let email = document.getElementById('email');

email.addEventListener("click", () => {
    open("https://outlook.live.com/owa/?to=ahickling2004@outlook.com&path=/mail/action/compose")
})

github.addEventListener("click", () => {
    open("https://github.com/Ahickling04")
})

linkedin.addEventListener("click", () => {
    open("https://www.linkedin.com/in/ahickling04/")
})

homeButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});