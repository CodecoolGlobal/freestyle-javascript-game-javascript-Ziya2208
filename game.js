import {collisionDetection} from "/utils/utils.js";

let hole = document.getElementById("hole");
let pipe = document.getElementById("pipe");
let bird = document.getElementById("bird");
let score = 0;

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
    const collisionHole = collisionDetection(birdCoordinates, holeCoordinates);
    const collisionPipe = collisionDetection(birdCoordinates, pipeCoordinates);
    if (collisionPipe && !collisionHole) {
        gameOver()
    } else if (collisionHole && !collisionPipe) {
        score++;
    }
}

function gameOver() {
    alert("Game Over!");
}

function initGame() {
    positionHoleRandomly();
    handleCollisions();
}

initGame();