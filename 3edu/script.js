var ball = document.querySelector('.ball');
var gameField = document.querySelector('.game-field');

//батОны //,,,????
var startBlock = document.querySelector('.start-block');
var btnStart = document.querySelector('#btnStart');


//function variables;
var scoreBlock;
var sizeBall = 50;
var scoreCounter = 1;//так вышло((
var secundsRemaining=60;
var switcher = true;

//game logic


btnStart.onclick = function () {
    startBlock.style.display = 'none';
    //запуск таймера
    var intervarHandle=setInterval(tick,1000);
    createTimerBlock();
    createScoreBlock();

    createLives();
    for (var i = 0; i < 5; i++) {
        createBall();
    }

    gameField.addEventListener('click', function (e) {
        if (e.target.valueOf().className == 'game-field') {
            document.querySelector('.sLife').remove();
            if (!document.querySelector('.sLife')) {
                endGame();
            }
        }
    })
}


function createTimerBlock() {
    var timerBlock = document.createElement('div');
    timerBlock.id = "timer";
    timerBlock.innerHTML = "<h2> Timer : <span>5</span></h2>";

    gameField.appendChild(timerBlock);
}

function createScoreBlock() {
    var block = document.createElement('div');
    block.id = "score";
    block.innerHTML = "<h2 class='score'> score : </h2>";

    gameField.appendChild(block);

    scoreBlock = document.createElement("span");
    scoreBlock.innerText = "0";
    var h2 = block.querySelector('h2');
    h2.appendChild(scoreBlock);
}

function createLives() {
    var block = document.createElement('div');
    block.className = 'lifes';

    for (var i = 0; i < 3; i++) {//органичение по ширине можно сделать цифрой
        block.className = 'lifes';
        var lifeSpan = document.createElement('span');
        lifeSpan.className = 'sLife';
        block.appendChild(lifeSpan);
    }


    gameField.appendChild(block);

}


function createBall() {

    var ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.left = randomInteger(0, 300) + 'px';
    ball.style.top = randomInteger(0, 300) + 'px';

    ball.style.background = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")";

    ball.style.width = sizeBall + 'px';
    ball.style.height = sizeBall + 'px';


    ball.onclick = function () {
        //приращиваем очки
        document.querySelector('.score').innerHTML = 'score ' + scoreCounter;
        //управляем шариком
        destroyBall(ball);
    }

    gameField.appendChild(ball);
}

//уничтожить шарик
function destroyBall(ball) {
    //уничтожить шарик
    ball.remove();
    if (document.querySelector('.ball')) {
        scoreCounter++;
    }
    else {//if (!document.querySelector('.sLife')){
        endGame();
    }

}



function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
function tick() {
    var timeDisplay=document.querySelector('#timer');

    var min = Math.floor(secundsRemaining/60);
    var sec = secundsRemaining-(min*60);

    if (sec<10){
        sec="0"+sec;//красота
    }
    var message ="<h2> T: <span>"+ min + ":" +sec+"</span></h2>";//приведение не нужно %)
    timeDisplay.innerHTML=message;
//<h2> Timer : <span>5</span></h2>
    if (secundsRemaining==0){
        endGame();
        clearInterval(intervarHandle);
        //endgame
    }
    secundsRemaining--;
}
function endGame() {
    location.reload();
}
