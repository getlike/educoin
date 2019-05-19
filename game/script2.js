var btnStart = document.querySelector("#btn-start");
var gameField = document.querySelector(".game-field")
var startBlock = document.querySelector(".start-block");
var ball = document.querySelector(".ball");

btnStart.onclick = function() {
	startBlock.style.display = "none";
	ball.style.display = "block"
}

document.onkeydown = function(event) { 
	console.dir(event);
	// up
	if(event.keyCode == 38) {
		ball.style.top = ball.offsetTop - 5 + "px";
		console.dir(ball);
	}

	// down = 40
	if(event.keyCode == 40) {
		ball.style.top = ball.offsetTop + 5 + "px";
	}

	// left 37
	if(event.keyCode == 37) {
		ball.style.left = ball.offsetLeft - 5 + "px";
	}

	// right 39
	if(event.keyCode == 39) {

		if(ball.offsetLeft < gameField.clientWidth - ball.clientWidth) {
			ball.style.left = ball.offsetLeft + 5 + "px";
		}

	}
}

/*
1. Выбираем элемента ball и bot
2. Перемещение ball
3. Проверить координаты зашел ли bot в пределы ball
	3.1. проверить границу сверху
	3.2. проверить границу снизу
	3.3. проверить границу слева
	3.4. проверить границу справа
4. если bot в границах ball, то скрыть bot
*/

// var timerID = setInterval(function () {
// 	// to do
// 	var timer = document.querySelector("#timer span");
// 	console.dir(timer);
// 	timer.innerText = timer.innerText - 1;
// 	// если счет таймера 0 то 
// 	if (timer.innerText == "0") { // "0" == 0 
// 		// останавливаем таймер
// 		clearInterval(timerID);
// 		startBlock.style.display = "block";
// 		startBlock.innerHTML = "<h2>End game</h2>" +
// 			startBlock.innerHTML;

// 		var btnReload = document.querySelector("#btn-start");
// 		console.dir(btnReload);
		
// 		// При клике на кнопку start game перезагрузить страницу
// 		btnReload.onclick = function() {
// 			location.reload();
// 		};

// 		ball.style.display = "none"; 
// 	}
// }, 1000);

ball.onclick = function() {
	/*
	1. Написать условие если цвет ball равен зеленому то
	сделать его желтым
	2. Иначе сделать мяч зеленым
	*/
	if(ball.style.background == "green") {
		ball.style.background = "yellow";
	} else {
		ball.style.background = "green"
	}

}


// setTimeout(function () {
// 	startBlock.style.display = "block";
// 	startBlock.innerHTML = "<h2>You lose</h2>" + startBlock.innerHTML;
// 	ball.style.display = "none";
// }, 5000)

// setInterval(function() {
// 	console.log(i);
// 	i = i + 1
// }, 1000)


/*
1. if(да) {
	// сделать чтото
}
2. число и текст в чем отличия
3. Остановка таймера
4. преобразования числа в текст с помощью кавычек
5. преобразование текста в число с помощью знака "+"
6. размещение переменных в коде
7. location
8. План реализации
9. При изменении innerHTML элементы теряют свою функциональность
10. События клавиатуры
11. Если мы вызываем любое событие то мы можем его отследить передав
в функцию события переменную onclick = function(event) {}
12. offsetLeft & offsetTop
13. clientWidth & clientHeight
*/























