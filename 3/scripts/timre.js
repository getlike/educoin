var timerPage=document.querySelector('.digit');
var btnStart=document.querySelector('.button-start');
var btnStop=document.querySelector('.button-stop');
var btnRestart=document.querySelector('.button-restart');
var checker;

var milisec=document.querySelector('.milisec');
var sec=document.querySelector('.sec');
var minut=document.querySelector('.minut');
var hour=document.querySelector('.hour');


console.dir(timerPage);
btnStart.onclick=function () {
    btnStart.style.background='#f5d6a0b5';
}
btnStop.onclick=function () {
    btnStop.style.background='#f70614';
}
btnRestart.onclick=function () {
    location.reload();
}

function timerOfGame(){
    var intervalId=setInterval(function () {
        checker++;
        setMilisec();
    }, 10);
}

function setMilisec() {
    if (checker<10){
        milisec.innerHTML="0"+checker;
    } else if(checker>=10){
        milisec.innerHTML=checker;

    }else if(checker==60){
        milisec.innerHTML=checker;
        setSecunds();
        checker=0;

    }
}

function setSecunds() {
    // let s;
}