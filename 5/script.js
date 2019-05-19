var ball = document.querySelector('.ball');
var gameField = document.querySelector('.game-field');

//батОны //,,,????
var startBlock = document.querySelector('.start-block');
var btnStart = document.querySelector('#btnStart');


//function variables;
var scoreBlock;
var sizeBall = 20;
var scoreCounter = 1;//так вышло((
var secundsRemaining = 1120;
var switcher = true;
var ballsCount = randomInteger(5, 15);

var moveNow = 'right';

//game logic


btnStart.onclick = function () {//логика шаров здесь и это неверно
    startBlock.style.display = 'none';
    //запуск таймера
    var intervarHandle = setInterval(tick, 1000);
    createTimerBlock();
    createScoreBlock();
    createSwitcherBlock();

    createLives();
    for (var i = 0; i < ballsCount; i++) {//создаем мячики взависимости от переменной ballsCount
        createBall();
    }

    gameField.addEventListener('click', function (e) {//слушаем нажатие наполе
        if (e.target.valueOf().className == 'game-field') {//если по полю то убираем жизнь
            document.querySelector('.sLife').remove();
            if (!document.querySelector('.sLife')) {//если жизней не осталось - конец игры
                endGame();
            }
        }
    })
}


function createTimerBlock() {//считаем время
    var timerBlock = document.createElement('div');
    timerBlock.id = "timer";
    timerBlock.innerHTML = "<h2> T:<span></span></h2>";
    gameField.appendChild(timerBlock);
}



function createScoreBlock() {//очки
    var block = document.createElement('div');
    block.id = "score";
    block.innerHTML = "<h2 class='score'> score:</h2>";

    gameField.appendChild(block);

    scoreBlock = document.createElement("span");
    scoreBlock.innerText = "0";
    var h2 = block.querySelector('h2');
    // scoreBlock.classList.add('animate');
    h2.appendChild(scoreBlock);
}

function createLives() {//жизни
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


function createBall() {//создаем мячики

    var ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.left = randomInteger(0, gameField.offsetWidth - 30) + 'px';//рандомно в пределах поля
    ball.style.top = randomInteger(0, gameField.offsetHeight - 30) + 'px';

    ball.style.background = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")";//разноцветненько

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
    } else {//if (!document.querySelector('.sLife')){
        //рамку посредине
        createBlockContinue();
        scoreCounter++;
        //endGame();
    }

}

function createBlockContinue() {
    var block = document.createElement('div');
    block.id = "continue";
    block.innerHTML = "continue";

    var blockButton = document.createElement('div');
    blockButton.id = "blockButton";
    blockButton.innerHTML = "";

    var buttonBlock = document.createElement('button');
    buttonBlock.className = 'button';
    buttonBlock.innerText = 'continue';
    blockButton.appendChild(buttonBlock);

    var buttonBlock1 = document.createElement('button');
    buttonBlock1.className = 'button';
    buttonBlock1.innerText = 'stop';
    blockButton.appendChild(buttonBlock1);

    


    block.appendChild(blockButton);

    document.body.appendChild(block);
    buttonBlock.onclick = function () {
        reload();
        block.remove();
    };
    buttonBlock1.onclick = function () {
        endGame();
    };
    

function reload() {
    for (var i = 0; i < ballsCount; i++) {//создаем мячики
        createBall();
    }

}

function cracken() {
    var outerBlock = document.createElement('div');//для отлова положения пакмана
    outerBlock.className = 'pacmanOuter';

    var block = document.createElement('div');
    block.className = "pacman";

    outerBlock.appendChild(block);
    console.dir(outerBlock);
    gameField.appendChild(outerBlock);
    ///запускаем кракена

    setInterval(function () {
        move(outerBlock)

    }, 25);

}

//движние игрока
function move(gamer) {
    //  if (gamer.style.display == 'block') {
    omnom(gamer);
    // }
    //пусть колобок побегает

    if (gamer.offsetLeft < gameField.clientWidth - gamer.clientWidth && moveNow == 'right') {//что то с указателем не то
        gamer.style.left = gamer.offsetLeft + 2 + 'px';
        gamer.style.transform = 'scale(1, 1)';
        if (gamer.offsetLeft == gameField.clientWidth - gamer.clientWidth) {
            moveNow = 'left';

        }
    } else if (gamer.offsetLeft > 0 && moveNow == 'left') {
        gamer.style.transform = 'scale(-1, 1)';


        gamer.style.left = gamer.offsetLeft - 2 + 'px';
        if (gamer.offsetLeft == 0) {
            moveNow = 'right';

        }
    } else if (gamer.offsetTop < gameField.clientHeight - gamer.clientHeight && moveNow == 'down') {
        gamer.style.top = gamer.offsetTop + 2 + 'px';
        gamer.style.transform = 'rotate(90deg)';
        if (gamer.offsetTop >= gameField.clientHeight - gamer.clientHeight) {

            moveNow = 'up'
        }
    } else if (gamer.offsetTop > 0 && moveNow == 'up') {
        gamer.style.top = gamer.offsetTop - 2 + 'px';
        gamer.style.transform = 'rotate(270deg)';
        if (gamer.offsetTop == 0) {
            moveNow = 'down'
        }
    }
}

function omnom(gamer) {//получаем координаты пакмана (4)
//получить все шарики
    //прогнать масив на координаты О_О
    var bals = document.querySelectorAll('.ball');

    for (var i = 0; i < bals.length; i++) {
        if (gamer.offsetTop <= bals[i].offsetTop && gamer.offsetLeft <= bals[i].offsetLeft) {
            //если нижняя и правая граница пакмана больше гранци шарика
            //================================
            //МАГИЯ
            //================================
            if (gamer.offsetTop + gamer.offsetHeight >= bals[i].offsetTop + bals[i].offsetHeight && gamer.offsetLeft + gamer.offsetWidth >= bals[i].offsetLeft + bals[i].offsetWidth) {

                bals[i].remove();
                scoreCounter++;
                document.querySelector('.score').innerHTML = 'score ' + scoreCounter;
                console.log(bals.length);
                if (bals.length == 1) {//проверяем количество несьеденых шариков
                    createBlockContinue()

                    //reload();//вызвать попап
                }

            }
            //================================
            //МАГИЯ
            //================================

        }
        //сожрать и рамдомно выбросить шарик
        //увеличить коин
    }


}

//клавиатура
document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowLeft':
            moveNow = 'left';

            break;
        case 'ArrowRight':
            moveNow = 'right';//нужно как то крутить головой

            break;
        case 'ArrowDown':
            moveNow = 'down';
            break;
        case 'ArrowUp':
            moveNow = 'up';//нужно как то крутить головой

            break;
    }
}

function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function tick() {
    var timeDisplay = document.querySelector('#timer');

    var min = Math.floor(secundsRemaining / 60);
    var sec = secundsRemaining - (min * 60);

    if (sec < 10) {
        sec = "0" + sec;//красота
    }
    var message = "<h2> T: <span>" + min + ":" + sec + "</span></h2>";//приведение не нужно %)
    timeDisplay.innerHTML = message;
//<h2> Timer : <span>5</span></h2>
    if (secundsRemaining == 0) {
        endGame();
        clearInterval(intervarHandle);
        //endgame
    }
    secundsRemaining--;
}//timer
function endGame() {
    location.reload();
}
