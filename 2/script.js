var ball = document.querySelector('.ball');
var gameField = document.querySelector('.game-field');
var startBlock = document.querySelector('.start-block');
var btnStart = document.querySelector('#btnStart');
var btnStartMulty = document.querySelector('#multi');
var switcher = true;


btnStart.onclick = function () {
    startBlock.style.display = 'none';
    ball.style.display = 'block';
    btnStartMulty.style.display = 'block';

}
btnStartMulty.onclick = function () {//переключатель положений
    if (switcher) {
        switcher = false;
        btnStartMulty.innerHTML = 'switcher off';

    }
    else {
        switcher = true;
        btnStartMulty.innerHTML = 'switcher on';

    }

    console.log('multy presed')
}
//switcher todo
ball.onclick = function () {//жмакаем одинокий шарик
    //switcher here
    if (switcher) {
        gameOne();
    }
    else {
        gmaeMulty();
    }
}

//перемещение стрелками доработать
document.onkeydown = function (e) {
//
    if (switcher) {//почему не работает switcher(((
        switch (e.key) {
            case 'ArrowLeft':
                ball.style.background = 'red';
                ball.style.left = (ball.offsetLeft - 1) + 'px';
                console.log(ball.style.left);
                if (ball.style.left == '3px') {
                    alert('низя сюду');
                }
                break;
            case 'ArrowRight':
                ball.style.background = 'red';
                ball.style.left = (ball.offsetLeft + 1) + 'px';

                if (ball.style.left == '293px') {
                    alert('низя сюду');
                }
                break;
            case 'ArrowUp':
                ball.style.background = 'red';
                ball.style.top = (ball.offsetTop - 1) + 'px';
                console.log(ball.style.left);
                if (ball.style.top == '3px') {
                    alert('низя сюду');
                }
                break;
            case 'ArrowDown':
                ball.style.background = 'red';
                ball.style.top = (ball.offsetTop + 1) + 'px';
                console.log(ball.style.top);
                if (ball.style.top == '293px') {
                    alert('низя сюду');
                }
                break;
            default:
                alert('не жмакай шопопало! только стрелочками!');
        }
    }
}
document.onkeyup = function (e) {//цвет обратно
    ball.style.background = 'yellow';
}

//перемещение по клику
function gameOne() {
    ball.style.left = randomInteger(3, gameField.clientWidth - 106) + 'px';
    ball.style.top = randomInteger(3, gameField.clientHeight - 106) + 'px';
    console.log(ball.style.left + ' ' + ball.style.top);
    console.dir(ball);
}

function gmaeMulty() {
    ball.remove();
    console.log('deleted');

    var div = document.createElement('div');
    div.className = "newBall";
    div.style.display='block';

    div.style.left = randomInteger(3, gameField.clientWidth - 106) + 'px';
    div.style.top = randomInteger(3, gameField.clientHeight - 106) + 'px';

    gameField.appendChild(div);

}

function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

