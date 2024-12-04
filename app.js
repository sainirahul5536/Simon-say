let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector('h2');
let buttons = document.querySelectorAll('.btn');

let color = ["yellow" , "green" , "red" , "purple"];
let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add('gameFlash');
    setTimeout(function(){
        btn.classList.remove('gameFlash')
    } , 250);
    
}
function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash')
    } , 250);
    
}
function levelUp(){
    level++;
    h3.innerText = `Level ${level}`;
    let idx = Math.floor(Math.random()*4);
    let random = `.`+ color[idx];

    let btn = document.querySelector(random);
    gameSeq.push(color[idx]);
    console.log(gameSeq);
    gameFlash(btn);
    userSeq = [];
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    } else{
        h3.innerText = `Game is over your score is ${level}`;
        resetGame();
        let body = document.querySelector('body');
        body.style.backgroundColor = 'red';
        setTimeout(function(){
            body.style.backgroundColor = 'rgb(208,208,208)';
        } , 500);
    }
}

function btnPress(){
    console.log(this);
    userFlash(this);
    let userColor = this.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

for(btn of buttons){
    btn.addEventListener("click", btnPress);
}


function resetGame(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    h3.innerText = "Press any key to start the game";
}