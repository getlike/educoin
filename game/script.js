var btnStart = document.querySelector("#btn-start");
var gameField = document.querySelector(".game-field");
var player = document.querySelector("#player");

// функциональные переменные
var scoreBlock = null; // блок
var score = 0; 
var lifes = 3;
var sizeBall = 100;
var lifeBlock = null;
var status = "on";


btnStart.onclick = function() {

	var startBlock = document.querySelector(".start-block");
	startBlock.style.display = "none";


	startGame();
}

// Start Game: создаем все поля в игровом поле 
function startGame() {
	// Create timer block
	createTimerBlock();

	// create score block
	createScoreBlock();

	createLifesBlock();
	createBall();
}

function createTimerBlock() {
	var timerBlock = document.createElement("div");
	timerBlock.id = "timer";
	timerBlock.innerHTML = "<h2>Timer: <span>5</span></h2>";
	
	gameField.appendChild(timerBlock);
}

function createScoreBlock() {
	// создаем блок div с id score
	var block = document.createElement("div");
		block.id = "score";
	// создаем заголовок h2
	var h2 = document.createElement("h2");
		h2.innerText = "Score: ";
	// помещаем заголовок h2 в блок div с id score
	block.appendChild(h2);
	// помещаем блок div с id score в игровое поле
	gameField.appendChild(block);
	// создаем span для счета
	scoreBlock = document.createElement("span");
	scoreBlock.innerText = "0";

	h2.appendChild(scoreBlock);
}

function createLifesBlock() {
	if(lifeBlock == null) {
		lifeBlock = document.createElement("div");
	} else {
		lifeBlock.innerHTML = "";
	}

	lifeBlock.id = "lifes";

	gameField.appendChild(lifeBlock);
	var i = 0;
	while(i < lifes) {
		var span = document.createElement("span");
		lifeBlock.appendChild(span);
		i = i + 1;
	}
}


function createBall() {
	if(status == "off") {
		return 0;
	}
	var ball = document.createElement("div");
	ball.className = "ball";
	/*
	1. Получить случайное число от 1 до 3(1 - слева, 2 - снизу)
	2. Проверяем откуда вылетаем
	3. получаем случайное число координаты в зависимости от места вылета

	*/
	var place = random(1, 3);
	if(place == 1) {
		ball.style.left = "-200px";
		ball.style.top = random(0, 400) + "px;"
	} else if(place == 2) {
		console.log(place);

		ball.style.left = random(0, 400) + "px";
		ball.style.top = "500px"
	} else {
		ball.style.left = "500px";
		ball.style.top = random(0, 400) + "px;"
	}
	
	
	setTimeout(function(){
		// end position
		ball.style.left = random(0, 300) + "px";
		ball.style.top = random(0, 300) + "px";
	}, 500);
	setTimeout(function() {
		downBall(ball);
	}, 1000)
	

	ball.style.background = "rgb(" + random(0, 255) + ", " + random(0, 255) + "," + random(0, 255) + ")"; // строка

	sizeBall = sizeBall - 10;
	
	gameField.appendChild(ball);
}

/*
* @todo если шарик упал то отнять жизнь 
* @todo если жизней нет закончить игру
*/
function downBall(ball) {
	ball.style.top = ball.offsetTop + 30 + "px";
	
	if(ball.offsetTop >= 420) {
		ball.remove();
		checkBalls();
		lifes = lifes - 1;
		createLifesBlock();
		if(lifes <= 0) {
			endGame();
		}
	} else {
		setTimeout(function() {
			downBall(ball);
		}, 9.81)
	}
	
}

function random(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    	rand = Math.floor(rand);

    return rand;
}


function endGame() {
	status = "off";
}

// резать шарики
gameField.onmousemove = function(e) {
	var element = e.target; // элемент

	if(element.className == "ball") {
		element.style.width = "0";
		element.style.height = "0";
		element.className = "ball-kill";

		scoreBlock.innerText = +scoreBlock.innerText + 1; 
		player.play();
		setTimeout(function() {
			element.remove();

			checkBalls();
			
		}, 500);
	}
}

function checkBalls() {
	// проверяем есть ли в ировом поле шарики
	var ballSelect = document.querySelector(".ball");
	// если их нет запускаем новые шары
	if(ballSelect == null) {
		var i = 0;

		while(i < random(1, 5)) { // правда/да
			createBall();
			i = i + 1;
		}
	}
}




