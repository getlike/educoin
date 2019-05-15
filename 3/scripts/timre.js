var timerPage = document.querySelector('.digit');
var btnStart = document.querySelector('.button-start');
var btnStop = document.querySelector('.button-stop');
var btnRestart = document.querySelector('.button-restart');
var checker = 0;
var checkerSeck = 0;

var milisec = document.querySelector('.milisec');
var sec = document.querySelector('.sec');
var minut = document.querySelector('.minut');
var hour = document.querySelector('.hour');


console.dir(timerPage);
btnStart.onclick = function () {
    btnStart.style.background = '#f5d6a0b5';
    timerOfGame();
}
btnStop.onclick = function () {
    btnStop.style.background = '#f70614';
}
btnRestart.onclick = function () {
    location.reload();
}

function timerOfGame() {

    var intervalId = setInterval(function () {
        checker++;

        setMilisec(checker);
        //console.log('timer');
    }, 10);
}

function setMilisec() {
    // console.log(checker);
    if (checker < 10) {
        milisec.innerHTML = "0" + checker;
    } else if (checker >= 10) {
        milisec.innerHTML = checker;

    } else if (checker == 60) {
        milisec.innerHTML = checker;
        checkerSeck++;
        setSecunds(checkerSeck);
        checker = 0;
        setMilisec(checker);

    }
}

function setSecunds(checkerSeck) {
    if (checker < 10) {
        sec.innerHTML = "0" + checkerSeck;
    } else if (checker >= 10) {
        sec.innerHTML = checkerSeck;
    }
}