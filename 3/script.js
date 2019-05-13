var gamer = document.querySelector('.gamer');



var coin = 0;
console.dir(gamer);

// while (true){
    setInterval(function() {move()}, 1000);
// }



// gamer.style.left = (ball.offsetLeft - 1) + 'px';
function move() {
    gamer.style.left = 150 + 'px';
    coin++;
    console.log('move '+coin);
}