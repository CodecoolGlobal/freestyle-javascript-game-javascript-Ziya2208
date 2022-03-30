
let score;

//function getObjects() {
let hole = document.getElementById("hole");
let pipe = document.getElementById("pipe");
let bird = document.getElementById("bird");
//}

function positionHoleRandomly() {
    hole.addEventListener("animationiteration", () => {
        const max = 57 * window.innerHeight / 100;
        const min = 97 * window.innerHeight / 100;
        const randomTop = Math.floor(Math.random() * (max-min) + min);
        hole.style.top = `-${randomTop}px`;
    })
}

function handleCollisions() {
    const holeCoordinates = hole.getBoundingClientRect();
    const pipeCoordinates = pipe.getBoundingClientRect();
    const birdCoordinates = bird.getBoundingClientRect();
}



function initGame() {
    positionHoleRandomly()
    // Your game can start here, but define separate functions, don't write everything in here :)

}

initGame();