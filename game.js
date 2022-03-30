function positionHoleRandomly() {
    let hole = document.getElementById("hole");
    hole.addEventListener("animationiteration", () => {
        const max = 57 * window.innerHeight / 100;
        const min = 97 * window.innerHeight / 100;
        const randomTop = Math.floor(Math.random() * (max-min) + min);
        hole.style.top = `-${randomTop}px`;
    })
}

function initGame() {
    positionHoleRandomly()
    // Your game can start here, but define separate functions, don't write everything in here :)

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



