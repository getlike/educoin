var ball = document.querySelector('.ball');
var gameField = document.querySelector('.game-field');
var startBlock = document.querySelector('.start-block');
var btnStart=document.querySelector('#btnStart');
var btnStartMulty=document.querySelector('#multi');
var switcher=true;



console.dir(gameField);
btnStart.onclick=function(){
    startBlock.style.display='none';
    ball.style.display='block';
    btnStartMulty.style.display='block';

}

//switcher todo
ball.onclick=function () {
    //switcher here
    if (switcher) {
        gameOne();
    }
}

//перемещение по клику
function gameOne() {
    ball.style.left = randomInteger(3, gameField.clientWidth - 106) + 'px';
    ball.style.top = randomInteger(3, gameField.clientHeight - 106) + 'px';
    console.log(ball.style.left+' '+ball.style.top);
}
function position() {
 //todo
}

function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

