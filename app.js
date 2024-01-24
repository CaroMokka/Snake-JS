//board
let boxSize = 25;
let rows = 20;
let cols = 20;

let board;
let context;

let snakeX = boxSize * 5;
let snakeY = boxSize * 5;

let velocityX = 0;
let velocityY = 0;

let foodX;
let foodY;


window.onload = function(){
    board = document.querySelector('#board');
    board.height = rows * boxSize;
    board.width = cols * boxSize;
    context = board.getContext('2d');

    placeFood();
    document.addEventListener('keyup', changeDirection);
    //update();
    setInterval(update, 1000/10);
}

function update(){
    context.fillStyle = 'black';
    context.fillRect( 0, 0, board.width, board.height);

    context.fillStyle = 'lime';
    snakeX += velocityX;
    snakeY += velocityY;
    context.fillRect(snakeX, snakeY, boxSize, boxSize);

    context.fillStyle = 'red';
    context.fillRect( foodX, foodY, boxSize, boxSize)
}

function changeDirection(e){
    if (e.code === 'ArrowUp'){
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code === 'ArrowDown'){
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code === 'ArrowLeft'){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code === 'ArrowRight'){
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood(){
    //Math.random devuelve un numero de entre 0 y 1
    //lo multiplicamos por cols o rows (20) y nos dara un numero entero entre 0 y 20, estrictamente es 0 y 19
    //lo multiplicamos por el tamano del bloque (25)
    foodX = Math.floor(Math.random() * cols) * boxSize;
    foodY = Math.floor(Math.random() * rows) * boxSize;
}