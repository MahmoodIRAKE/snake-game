import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosotion } from './grid.js'
let food = getRandomFoodPosotion();
const EXPANSION_RATE = 1;
export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosotion();
    }
}
export function draw(gameBoard) {

    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosotion() {
    let newFoodPosotion
    while (newFoodPosotion == null || onSnake(newFoodPosotion)) {
        newFoodPosotion = randomGridPosotion();
    }
    return newFoodPosotion
}