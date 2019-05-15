var ball = document.querySelector('.ball');
var gameField = document.querySelector('.game-field');
var newBall = document.querySelector('.newBall');
//батОны
var startBlock = document.querySelector('.start-block');
var btnStart = document.querySelector('#btnStart');
var btnStartMulty = document.querySelector('#multi');

var switcher = true;

//function variables;
var scoreBlock;
var sizeBall = 100;

btnStart.onclick = function () {
    startBlock.style.display = 'none';

    createTimerBlock();

    createLives();
    createScoreBlock();
    createBsll();
    //createBsll();

}

function createTimerBlock() {
    var timerBlock = document.createElement('div');
    timerBlock.id = "timer";
    timerBlock.innerHTML = "<h2> Timer : <span>5</span></h2>";
    //console.dir(timerBlock);
    gameField.appendChild(timerBlock);
}

function createScoreBlock() {
    var block = document.createElement('div');
    block.id = "score";
    block.innerHTML = "<h2> score : </h2>";

    gameField.appendChild(block);

    scoreBlock = document.createElement("span");
    scoreBlock.innerText = "0";
    var h2 = block.querySelector('h2');
    h2.appendChild(scoreBlock);
}

function createLives() {
    var block = document.createElement('div');
    block.className = 'lifes';

    var lifeSpan = document.createElement('span');
    lifeSpan.className='sLife';

    var lifeSpan1 = document.createElement('span');
    lifeSpan1.className='sLife';
    //lifeSpan1.innerHTML='<span></span>'

    var lifeSpan2 = document.createElement('span');
    lifeSpan2.className='sLife';
    //lifeSpan2.innerHTML='<span></span>'

    block.appendChild(lifeSpan);
    block.appendChild(lifeSpan1);
    block.appendChild(lifeSpan2);

    gameField.appendChild(block);


}
function dropBall(ball) {
ball.remove();
createBsll();

}
function createBsll() {
    var ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.left=randomInteger(0,300)+'px';
    ball.style.top=randomInteger(0,300)+'px';

    ball.style.background="rgb("+randomInteger(0,255)+","+randomInteger(0,255)+","+randomInteger(0,255)+")";

    ball.style.width = sizeBall + 'px'
    ball.style.height = sizeBall + 'px'

    sizeBall -= 10;

    gameField.appendChild(ball)
    ball.onclick=function () {
        ball.style.width-=1+'px';
        ball.style.height-=1+'px';
        dropBall(ball)
    }

}
function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}