var field = document.querySelector('.coin');
var ball = document.querySelector('.ball');
var secundsRemaining = 1600;//можно положить из хтмл
var intervarHandle = setInterval(tick, 1000);
var coin = 0;
var gameField=document.querySelector('.game-Field');

ball.style.width=100+'px';

ball.onclick = function (e) {
    //alert('ball');
    //ball.style.position = ' absolute';
    ball.style.left = randomInteger(0, 235 ) + 'px';
    ball.style.bottom = randomInteger(0, 235) + 'px';
    console.dir(gameField.style.width);


    //колобок сбежал))
    //что нетак с моим шариком?
    // ball.animate({ height: 50 });
    //ball.offsetHeight-=10;
    coin++;
    field.innerHTML = 'кликов ' + coin;//тут нужен массив цветов для надписи


}

function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function tick() {
    var timeDisplay = document.querySel
    ctor('.cloack');

    var min = Math.floor(secundsRemaining / 60);
    var sec = secundsRemaining - (min * 60);

    if (sec < 10) {
        sec = "0" + sec;//красота
    }
    var message = min + ":" + sec;//приведение не нужно %)
    timeDisplay.innerText = message;

    if (secundsRemaining == 0) {
        alert('Time is up');
        clearInterval(intervarHandle);
        gameOver();
    }
    secundsRemaining--;
}

function gameOver() {
    ball.style.visibility = 'hidden';
}

window.onload = function () {
    //todo
}

//mouseover