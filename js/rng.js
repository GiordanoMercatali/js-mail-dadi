// EXERCISE 2

/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let userNumber = getRandomNumber(1,6);
console.log(userNumber);

let pcNumber = getRandomNumber(1,6);
console.log(pcNumber); */

const userNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(userNumber);

const pcNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(pcNumber);

if (userNumber > pcNumber){
    console.log("You win!");
} else if (userNumber < pcNumber){
    console.log("You lose!");
} else{
    console.log("Draw");
}