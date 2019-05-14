var gamer = document.querySelector('.gamer');
var ball = document.querySelector('.ball');
var gameField = document.querySelector('.game-field');
var scoreField = document.querySelector('.score');
var btnStart = document.querySelector('#btnStart');
var startBlock = document.querySelector('.start-block');
var timerBlock=document.querySelector('.timer');

var timer=30;
var sound = document.createElement('audio');
sound.src = 'eat.wav';

var moveNow = 'right';//храним направление головы
var coin = 0;
console.dir(gamer);
console.dir(gameField);
btnStart.onclick = function () {
    timerOfGame();
    btnStart.style.display = 'none';
    startBlock.style.display = 'none';
    gamer.style.display = 'block';
    ball.style.display = 'block';
    setInterval(function () {
        move()
    }, 500);
}


// gamer.style.left = (ball.offsetLeft - 1) + 'px';
// transform: scale(-1, 1) — отражение по горизонтали;
// transform: scale(1, -1) — отражение по вертикали;
// transform: scale(-1, -1) — одновременное отражение по горизонтали и вертикали.
function move() {
    if(gamer.style.display=='block'){
    omnom();
    }
    //пусть колобок побегает

    if (gamer.offsetLeft < gameField.clientWidth - gamer.clientWidth && moveNow == 'right') {
        gamer.style.left = gamer.offsetLeft + 50 + 'px';

        if (gamer.offsetLeft == gameField.clientWidth - gamer.clientWidth) {
            moveNow = 'left';
            gamer.style.transform = 'scale(-1, 1)';
        }
    } else if (gamer.offsetLeft > 0 && moveNow == 'left') {


        gamer.style.left = gamer.offsetLeft - 50 + 'px';
        if (gamer.offsetLeft == 0) {
            moveNow = 'right';
            gamer.style.transform = 'scale(1, 1)';
        }
    }
    else if (gamer.offsetTop < gameField.clientHeight - gamer.clientHeight && moveNow == 'down') {
        gamer.style.top = gamer.offsetTop + 50 + 'px';
        gamer.style.transform = 'rotate(90deg)';
        if (gamer.offsetTop >= gameField.clientHeight - gamer.clientHeight) {

            moveNow = 'up'
        }
    }

    else {
        gamer.style.top = gamer.offsetTop - 50 + 'px';
        gamer.style.transform = 'rotate(270deg)';
        if (gamer.offsetTop == 0) {
            moveNow = 'down'
        }
    }
}

//подключаем клавиши
document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            moveNow = 'left';
            gamer.style.transform = 'scale(-1, 1)';
            break;
        case 'ArrowRight':
            moveNow = 'right';//нужно как то крутить головой
            gamer.style.transform = 'scale(1, 1)';
            break;
        case 'ArrowDown':
            moveNow = 'down';
            break;
        case 'ArrowUp':
            moveNow = 'up';//нужно как то крутить головой
            gamer.style.transform = 'scale(1, 1)';
            break;
    }
}

function omnom() {//получаем координаты пакмана (4)

    //если верхняя и лева граница пакмана меньше гранци шарика
    if (gamer.offsetTop <= ball.offsetTop && gamer.offsetLeft <= ball.offsetLeft) {
        //если нижняя и правая граница пакмана больше гранци шарика

        if (gamer.offsetTop + gamer.offsetHeight >= ball.offsetTop + ball.offsetHeight && gamer.offsetLeft + gamer.offsetWidth >= ball.offsetLeft + ball.offsetWidth) {
            ball.style.top = randomInteger(gameField.offsetTop, gameField.offsetHeight - ball.offsetHeight) + 'px';
            ball.style.left = randomInteger(gameField.offsetLeft, gameField.offsetWidth - ball.offsetWidth) + 'px';
            sound.currentTime = 0;
            sound.play();
            coin++;
            scoreField.innerHTML = "<h2> score:"+coin+"</h2>";

        }
        //console.log('vertikal & gorizontal');
    }
    //сожрать и рамдомно выбросить шарик
    //увеличить коин
}

function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
function timerOfGame(){
    var intervalId=setInterval(function () {
        timer--;

        if (timer==0){
            gamer.style.display='none';
            ball.style.display='none';
             startBlock.style.display='block';
             btnStart.style.display='block';
             btnStart.innerText='game over. reload?';
             btnStart.onclick=function () {
                 location.reload();
             }
             clearInterval(intervalId);

        }
        timerBlock.innerHTML="<h2> 00:"+timer+"</h2>";


    }, 1000);
}