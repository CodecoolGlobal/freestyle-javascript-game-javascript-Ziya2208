import {collisionDetection} from "/utils/utils.js";

let hole = document.getElementById("hole");
let pipe = document.getElementById("pipe");
let bird = document.getElementById("bird");
let score = document.getElementById("score");
let scoreValue = 0;
let detectionPaused = false;
let pauseLength = 300;
let pauseBegin = 0;

function positionHoleRandomly() {
    hole.addEventListener("animationiteration", () => {
        const max = 57 * window.innerHeight / 100;
        const min = 97 * window.innerHeight / 100;
        const randomTop = Math.floor(Math.random() * (max-min) + min);
        hole.style.top = `-${randomTop}px`;
    })
}

function handleCollisions() {
    setInterval(() => {
        if (pauseBegin != 0 && detectionPaused && Date.now() - (pauseBegin + pauseLength) > 0) {
            detectionPaused = false;
        }
        if (!detectionPaused) {
            const holeCoordinates = hole.getBoundingClientRect();
            const pipeCoordinates = pipe.getBoundingClientRect();
            const birdCoordinates = bird.getBoundingClientRect();
            const collisionHole = collisionDetection(birdCoordinates, holeCoordinates);
            const collisionPipe = collisionDetection(birdCoordinates, pipeCoordinates);

            if (collisionPipe && !collisionHole) {
                return gameOver();
            } else if (collisionHole) {
                let holeDetections = 1;
                scoreValue = scoreValue + holeDetections;
                score.innerText = `Score: ${scoreValue}`;
                detectionPaused = true;
                pauseBegin = Date.now();
            }
        }
        }, 10);
}

function gameOver() {
    alert("Game Over!");
}

function initGame() {
    positionHoleRandomly();
    handleCollisions();
}



initGame();




let bird = document.getElementById('bird')

var jumping = 0

setInterval (function() {
    var birdTop = parseInt(getComputedStyle(bird).getPropertyValue('top'));
    if (jumping === 0) {
        bird.style.top = (birdTop + 3) + 'px';
        bird.style.animation = 'rotateDown 2.2s infinite ease';
    }
    }, 15)

function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function() {
        var birdTop = parseInt(getComputedStyle(bird).getPropertyValue('top'));
        bird.style.top = (birdTop-5)+'px';
        bird.style.animation = 'rotateUp 0.5s'
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }
    , 15);
}



