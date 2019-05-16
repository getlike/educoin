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
var ballsCount = randomInteger(1, 2);

var moveNow = 'right';

//game logic


btnStart.onclick = function () {
    startBlock.style.display = 'none';
    //запуск таймера
    var intervarHandle = setInterval(tick, 1000);
    createTimerBlock();
    createScoreBlock();
    createSwitcherBlock();

    createLives();
    for (var i = 0; i < ballsCount; i++) {//создаем мячики
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
    timerBlock.innerHTML = "<h2> T:<span></span></h2>";
    gameField.appendChild(timerBlock);
}

function createSwitcherBlock() {
    var block = document.createElement('div');
    block.id = "switcher";
    block.innerHTML = "switcher";
    document.body.appendChild(block)
}

function createScoreBlock() {
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

    var buttonBlock2 = document.createElement('button');
    buttonBlock2.className = 'button';
    buttonBlock2.innerText = 'кракен';
    blockButton.appendChild(buttonBlock2);


    block.appendChild(blockButton);

    document.body.appendChild(block);
    buttonBlock.onclick = function () {
        reload();
        block.remove();
    };
    buttonBlock1.onclick = function () {
        endGame();
    };
    buttonBlock2.onclick = function () {
        blockButton.onclick;
        //трайкетч
        if (document.querySelector('.pacman')) {
            document.querySelector('.pacman').remove();//удаляем лишнее

        }

        cracken();//создаем
        reload();//создаем шарики
        block.remove();//убираем кнопки

    }
}

function reload() {
    for (var i = 0; i < ballsCount; i++) {//создаем мячики
        createBall();
    }

}

function cracken() {
    var outerBlock=document.createElement('div');
    outerBlock.className='pacmanOuter';

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
            //gamer.style.transform = 'scale(-1, 1)';
        }
    } else if (gamer.offsetLeft > 0 && moveNow == 'left') {
        gamer.style.transform = 'scale(-1, 1)';


        gamer.style.left = gamer.offsetLeft - 2 + 'px';
        if (gamer.offsetLeft == 0) {
            moveNow = 'right';

        }
    }
    else if (gamer.offsetTop < gameField.clientHeight - gamer.clientHeight && moveNow == 'down') {
        gamer.style.top = gamer.offsetTop + 2 + 'px';
        gamer.style.transform = 'rotate(90deg)';
        if (gamer.offsetTop >= gameField.clientHeight - gamer.clientHeight) {

            moveNow = 'up'
        }
    }

    else {
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
    var bals=document.querySelectorAll('.ball');

    for (var i = 0; i < bals.length;i++){
        if (gamer.offsetTop <= bals[i].offsetTop && gamer.offsetLeft <= bals[i].offsetLeft) {
            //если нижняя и правая граница пакмана больше гранци шарика
console.dir(bals[i]);
            if (gamer.offsetTop + gamer.offsetHeight >= bals[i].offsetTop + bals[i].offsetHeight && gamer.offsetLeft + gamer.offsetWidth >= bals[i].offsetLeft + bals[i].offsetWidth) {
                // ball.style.top = randomInteger(gameField.offsetTop, gameField.offsetHeight - ball.offsetHeight) + 'px';
                // ball.style.left = randomInteger(gameField.offsetLeft, gameField.offsetWidth - ball.offsetWidth) + 'px';
                // sound.currentTime = 0;
                //sound.play();
                //шарик должен быть уничтожен
                bals[i].remove();
                scoreCounter++;
                scoreField.innerHTML = "<h2> score:"+scoreCounter+"</h2>";

            }
            //console.log('vertikal & gorizontal');
        }
        //сожрать и рамдомно выбросить шарик
        //увеличить коин
    }
    //если верхняя и лева граница пакмана меньше гранци шарика

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
