//game constant
let direction = { x: 0, y: 0 };
const foodsound = new Audio('js/food.mp3');
const gameoversound = new Audio('js/over.mp3');
const movesound = new Audio('js/move.mp3');
const musicSound = new Audio('js/gameloop.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]


//game function
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine() {
    //part 1 : updating the snake array and food

    //part2: render the snake and food
    // display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = documnet.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement);
    })


}







//main logic start here
window.requestAnimationFrame(main);

