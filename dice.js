//Write a function that chooses two random numbers (1-6) and returns them.
//WIt should also return the sum.
 //BONUS: have your function take an argument of the # of dice to be rolled.
//Example: rollDice(3) // Dice rolled are 4, 2, and 7. Sum is 13.

const randomNumber = function () {
var ran = Math.floor((Math.random() * 6) + 1);
return ran ;
}

const rollDice = function () {
randomNumber();

}

rollDice(); // Dice rolled are 6 and 1. Sum is 7
