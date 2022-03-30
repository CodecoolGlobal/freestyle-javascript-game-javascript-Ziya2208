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




let bird = document.getElementById("bird");

function gravity_start( dircetion ) {
    setInterval(_ => {
        if ( direction === 'down' ) return
        bird_animation({ direction: 'down' })
    })
}

function bird_animation( direction ) {
    if ( direction === 'down' ) {
        bird.classList.remove('go-up')
        bird.classList.add('go-down')
    }
    else if ( direction === 'up' ) {
        bird.classList.remove('go-down')
        bird.classList.add('go-up')
    }
}

gravity_start();

