let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector('h2');
let buttons = document.querySelectorAll('.btn');
let restartBtn = document.getElementById('restart-btn');

let color = ["yellow", "green", "red", "purple"];
let started = false;
let level = 0;

// Start the game on keypress or touch/click
document.addEventListener("keypress", startGame);
restartBtn.addEventListener("click", startGame);

function startGame() {
  if (!started) {
    console.log("Game is started");
    started = true;
    levelUp();
    h3.innerText = "Game Started!";
  }
}

function gameFlash(btn) {
  btn.classList.add('gameFlash');
  setTimeout(() => btn.classList.remove('gameFlash'), 250);
}

function userFlash(btn) {
  btn.classList.add('userFlash');
  setTimeout(() => btn.classList.remove('userFlash'), 250);
}

function levelUp() {
  level++;
  h3.innerText = `Level ${level}`;
  let idx = Math.floor(Math.random() * 4);
  let random = `.${color[idx]}`;

  let btn = document.querySelector(random);
  gameSeq.push(color[idx]);
  console.log(gameSeq);
  gameFlash(btn);
  userSeq = [];
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerText = `Game Over! Your score is ${level}`;
    resetGame();
    let body = document.querySelector('body');
    body.style.backgroundColor = 'red';
    setTimeout(() => body.style.backgroundColor = 'rgb(208,208,208)', 500);
  }
}

function btnPress() {
  console.log(this);
  userFlash(this);
  let userColor = this.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

buttons.forEach(btn => btn.addEventListener("click", btnPress));

function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  h3.innerText = "Press Start to play again!";
}
