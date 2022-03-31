import {collisionDetection} from "/utils/utils.js";

let hole = document.getElementById("hole");
let pipe = document.getElementById("pipe");
let bird = document.getElementById("bird");
let score = document.getElementById("score");
let scoreValue = 0;
let jumping = 0
let round = 0
let roundController = 0


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
        const holeCoordinates = hole.getBoundingClientRect();
        const pipeCoordinates = pipe.getBoundingClientRect();
        const birdCoordinates = bird.getBoundingClientRect();
        const collisionHole = collisionDetection(birdCoordinates, holeCoordinates);
        const collisionPipe = collisionDetection(birdCoordinates, pipeCoordinates);

        if (collisionPipe && !collisionHole) {
            return gameOver();
        } else if (collisionHole) {
            if (round > roundController) {
                scoreValue++;
                roundController++
            }
            score.innerText = `Score: ${scoreValue}`;
        }
    }, 10)
}

function gameOver() {
    alert("Game Over!");
}

function gravity() {
   setInterval (function() {
    let birdTop = parseInt(getComputedStyle(bird).getPropertyValue('top'));
    if (jumping === 0) {
        bird.style.top = (birdTop + 3) + 'px';
        bird.style.animation = 'rotateDown 2.2s infinite ease';
    }
    }, 15)
}

function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function() {
        let birdTop = parseInt(getComputedStyle(bird).getPropertyValue('top'));
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

function keyboardJump() {
    document.addEventListener("keydown", jump)
}

function resetCounter() {
    round = 1
}

function roundCounter() {
    hole.addEventListener( 'animationiteration', _ => {
        round++
    })
}

function initGame() {
    positionHoleRandomly();
    resetCounter()
    roundCounter()
    handleCollisions();
    gravity();
    jump();
    keyboardJump();
}

initGame();
