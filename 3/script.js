var gamer = document.querySelector('.gamer');
var gameField=document.querySelector('.game-field')

var coin = 0;
console.dir(gamer);
console.dir(gameField);
// while (true){
setInterval(function () {
    move()
}, 500);
// }


// gamer.style.left = (ball.offsetLeft - 1) + 'px';
function move() {
    if (gamer.style.left<(gameField.offsetWidth)) {
        gamer.style.left = gamer.offsetLeft + 25 + 'px';
        coin++;
        console.log(gamer.style.left);
    }else {
        gamer.style.left = gamer.offsetLeft - 25 + 'px';
    }
}