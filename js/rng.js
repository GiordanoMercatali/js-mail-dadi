// EXERCISE 2

/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let userNumber = getRandomNumber(1,6);
console.log(userNumber);

let pcNumber = getRandomNumber(1,6);
console.log(pcNumber); */

userNumberElem = document.querySelector(".user-number");
pcNumberElem = document.querySelector(".pc-number");

const userNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(userNumber);
document.getElementById("user-n").innerHTML = userNumber;

const pcNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(pcNumber);
document.getElementById("pc-n").innerHTML = pcNumber;


if (userNumber > pcNumber){
    console.log("You win!");
    document.getElementById("result").innerHTML = "You win!";
    userNumberElem.classList.add("winner");
    userNumberElem.classList.remove("loser");
    pcNumberElem.classList.add("loser");
    pcNumberElem.classList.remove("winner");
} else if (userNumber < pcNumber){
    console.log("You lose!");
    document.getElementById("result").innerHTML = "You lose!";
    userNumberElem.classList.add("loser");
    userNumberElem.classList.remove("winner");
    pcNumberElem.classList.add("winner");
    pcNumberElem.classList.remove("loser");
} else{
    console.log("Draw");
    document.getElementById("result").innerHTML = "Draw";
    userNumberElem.classList.remove("loser");
    userNumberElem.classList.remove("winner");
    pcNumberElem.classList.remove("winner");
    pcNumberElem.classList.remove("loser");
}