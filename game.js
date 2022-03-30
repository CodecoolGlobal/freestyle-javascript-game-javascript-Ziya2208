import {collisionDetection} from "/utils/utils.js";

let hole = document.getElementById("hole");
let pipe = document.getElementById("pipe");
let bird = document.getElementById("bird");
let scoreValue = 0;

function positionHoleRandomly() {
    hole.addEventListener("animationiteration", () => {
        const max = 57 * window.innerHeight / 100;
        const min = 97 * window.innerHeight / 100;
        const randomTop = Math.floor(Math.random() * (max-min) + min);
        hole.style.top = `-${randomTop}px`;
    })
}

function handleCollisions() {
    let gameStopped = false;
    setInterval(() => {
        let holeCoordinates = hole.getBoundingClientRect();
        let pipeCoordinates = pipe.getBoundingClientRect();
        const birdCoordinates = bird.getBoundingClientRect();
        let collisionHole = collisionDetection(birdCoordinates, holeCoordinates);
        let collisionPipe = collisionDetection(birdCoordinates, pipeCoordinates);
        if (collisionPipe && !collisionHole) {
            gameStopped = true;
            return gameOver();
        } else if (collisionHole) {
            scoreValue++;
            let score = document.getElementById("score");
            score.innerText = `Score: ${scoreValue}`;
            clearInterval();
        }
    }, 10)
}

function gameOver() {
    alert("Game Over!");
}

function initGame() {
    positionHoleRandomly();
    handleCollisions();
}

initGame();