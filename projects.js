let homeButton = document.getElementById('homeButton');
let osmp = document.getElementById("osmp");
let ttt = document.getElementById("ticTacTUI");

homeButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});

osmp.addEventListener("click", () => {
    open("https://github.com/Ahickling04/osmp")
})

ttt.addEventListener("click", () => {
    open("https://github.com/Ahickling04/tic-tac-tui")
})