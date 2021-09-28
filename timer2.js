// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
const prompt = require("prompt-sync")({sigint: true}); // lets user ctrl + c
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
 
while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt('Guess a number from 1 to 10: ');
  // Convert the string input to a number
  guess = Number(guess);
 
  // Compare the guess to the secret answer and let the user know.
  if (guess === numberToGuess) {
    console.log('Congrats, you got it!');
    foundCorrectNumber = true;
  } else {
    console.log('Sorry, guess again!');
  }
}




// EXAMPLE CODE
// rl.question('Who are you?', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);  

// const num = prompt('Enter a number: ');
// console.log('Your number + 4 =');
// console.log(Number(num) + 4);