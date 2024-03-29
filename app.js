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

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

window.onload = function () {
  board = document.querySelector("#board");
  board.height = rows * boxSize;
  board.width = cols * boxSize;
  context = board.getContext("2d");

  placeFood();
  document.addEventListener("keyup", changeDirection);
  //update();
  setInterval(update, 1000 / 10);
};

function update() {
  if (gameOver) {
    return;
  }
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, boxSize, boxSize);

  //snake eat food
  if (snakeX === foodX && snakeY === foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "lime";
  snakeX += velocityX * boxSize;
  snakeY += velocityY * boxSize;
  context.fillRect(snakeX, snakeY, boxSize, boxSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], boxSize, boxSize);
  }

  //game over conditions
  if (
    snakeX < 0 ||
    snakeX > cols * boxSize ||
    snakeY < 0 ||
    snakeX > rows * boxSize
  ) {
    gameOver = true;
    alert("Game Over");
  }
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      alert("Game Over");
    }
  }
}

function changeDirection(e) {
  if (e.code === "ArrowUp" && velocityY !== 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code === "ArrowDown" && velocityY !== -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code === "ArrowLeft" && velocityX !== 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code === "ArrowRight" && velocityX !== -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  //Math.random devuelve un numero de entre 0 y 1
  //lo multiplicamos por cols o rows (20) y nos dara un numero entero entre 0 y 20, estrictamente es 0 y 19
  //lo multiplicamos por el tamano del bloque (25)
  foodX = Math.floor(Math.random() * cols) * boxSize;
  foodY = Math.floor(Math.random() * rows) * boxSize;
}
