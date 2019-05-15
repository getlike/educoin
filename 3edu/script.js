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
    createScoreBlock();
    createLives();
    createBsll();
    //createBsll();

}

function createTimerBlock() {
    var timerBlock = document.createElement('div');
    timerBlock.id = "timer";
    timerBlock.innerHTML = "<h2> Timer: <span>5</span></h2>";
    //console.dir(timerBlock);
    gameField.appendChild(timerBlock);
}

function createScoreBlock() {
    var block = document.createElement('div');
    block.id = "score";
    block.innerHTML = "<h2> score :</h2>";

    gameField.appendChild(block);

    scoreBlock = document.createElement("span");
    scoreBlock.innerText = "0";
    var h2 = block.querySelector('h2');
    h2.appendChild(scoreBlock);
}

function createLives() {
    var block = document.createElement('div');
    block.id = 'lifes';

    var lifeSpan = document.createElement('span');
    //lifeSpan.innerHTML='<span></span>';

    var lifeSpan1 = document.createElement('span');
    //lifeSpan1.innerHTML='<span></span>'

    var lifeSpan2 = document.createElement('span');
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
//
// btnStartMulty.onclick = function () {//переключатель положений
//     if (switcher) {
//         switcher = false;
//         btnStartMulty.innerHTML = 'switcher off';
//
//     }
//     else {
//         switcher = true;
//         btnStartMulty.innerHTML = 'switcher on';
//
//     }
//
//     console.log('multy presed')
// }
// ball.onclick = function () {//жмакаем одинокий шарик
//     //switcher here
//     if(ball.style.background=='yellow'){
//         ball.style.background='blue';
//     }
//     else {
//         ball.style.background='yellow';
//     }
//     if (switcher) {
//         gameOne();
//     }
//     else {
//         ball.remove();
//         console.log('deleted');
//         var rnd = randomInteger(1, 5);
//         for (var i = 0; i < rnd; i++) {
//             gameMulty();
//         }
//
//     }
// }
//
// //перемещение стрелками доработать
// document.onkeydown = function (e) {
// //
//     if (switcher) {//почему не работает switcher(((
//         switch (e.key) {
//             case 'ArrowLeft':
//                 ball.style.background = 'red';
//                 ball.style.left = (ball.offsetLeft - 1) + 'px';
//                 console.log(ball.style.left);
//                 if (ball.style.left == '3px') {
//                     alert('низя сюду');
//                 }
//                 break;
//             case 'ArrowRight':
//                 ball.style.background = 'red';
//                 ball.style.left = (ball.offsetLeft + 1) + 'px';
//
//                 if (ball.style.left == '293px') {
//                     alert('низя сюду');
//                 }
//                 break;
//             case 'ArrowUp':
//                 ball.style.background = 'red';
//                 ball.style.top = (ball.offsetTop - 1) + 'px';
//                 console.log(ball.style.left);
//                 if (ball.style.top == '3px') {
//                     alert('низя сюду');
//                 }
//                 break;
//             case 'ArrowDown':
//                 ball.style.background = 'red';
//                 ball.style.top = (ball.offsetTop + 1) + 'px';
//                 console.log(ball.style.top);
//                 if (ball.style.top == '293px') {
//                     alert('низя сюду');
//                 }
//                 break;
//             default:
//                 console.log('не жмакай шопопало! только стрелочками!');
//         }
//     }
// }
// document.onkeyup = function (e) {//цвет обратно
//     ball.style.background = 'yellow';
// }
//
// //перемещение по клику
// function gameOne() {
//     ball.style.left = randomInteger(3, gameField.clientWidth - 116) + 'px';
//     ball.style.top = randomInteger(3, gameField.clientHeight - 116) + 'px';
//
//     console.dir(ball);
//     ball.style.width = (ball.clientWidth - 10) + 'px';
//     ball.style.height = (ball.clientHeight - 10) + 'px';//гыгы
//
//
// }
//
// //много шариков
// function gameMulty() {
//
//
//     var div = document.createElement('div');
//     div.className = "newBall";
//     div.style.display = 'block';
//
//     div.style.left = randomInteger(3, gameField.clientWidth - 106) + 'px';
//     div.style.top = randomInteger(3, gameField.clientHeight - 106) + 'px';
//     div.addEventListener('click', function () {
//         div.remove();
//         if (document.querySelector('.newBall')) {
//             console.log('has');
//         }
//         else {
//             endGame();
//         }
//
//
//     })
//
//
//     gameField.appendChild(div);
//
//
// }
//
// //великий рандом
// function randomInteger(min, max) {//капец как неудобненько
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
// }
//
// //конец ребут
// function endGame() {
//     console.log('end');
//
//     startBlock.style.display = 'block';
//     btnStart.style.display = 'none';
//     var btnEnd = document.createElement('button');
//     btnEnd.className = 'buttons';
//     btnEnd.display = 'true';
//     btnEnd.innerHTML = 'new game?';
//     startBlock.appendChild(btnEnd);
//     btnEnd.onclick = function () {
//         location.reload();
//     }
//
//
//
// }
