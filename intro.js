const content = document.getElementById("intro");
const play = document.getElementById("play");

play.addEventListener("click", () => {
    intro.classList.add("slideup");

    setTimeout(() => {
        window.location.href = "game.html";
    }, 500);
});
