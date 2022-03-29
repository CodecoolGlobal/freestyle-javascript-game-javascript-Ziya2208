function positionHoleRandomly() {
    let hole = document.getElementById("hole");
    hole.addEventListener("animationiteration", () => {
        const max = 950;
        const min = 550;
        const randomTop = Math.floor(Math.random() * (max-min) + min);
        hole.style.top = `-${randomTop}px`;
    })
}

function initGame() {
    positionHoleRandomly()
    // Your game can start here, but define separate functions, don't write everything in here :)

}

initGame();