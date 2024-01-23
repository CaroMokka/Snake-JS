//board
let boxSize = 25;
let rows = 20;
let cols = 20;

let board;
let context;

let snakeX = boxSize * 5;
let snakeY = boxSize * 5;

let foodX;
let foodY;


window.onload = function(){
    board = document.querySelector('#board');
    board.height = rows * boxSize;
    board.width = cols * boxSize;
    context = board.getContext('2d');

    placeFood();
    update();
}

function update(){
    context.fillStyle = 'black';
    context.fillRect( 0, 0, board.width, board.height);

    context.fillStyle = 'lime';
    context.fillRect(snakeX, snakeY, boxSize, boxSize);

    context.fillStyle = 'red';
    context.fillRect( foodX, foodY, boxSize, boxSize)
}

function placeFood(){
    foodX = Math.floor(Math.random() * cols) * boxSize;
    foodY = Math.floor(Math.random() * rows) * boxSize;
}