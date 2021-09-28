// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

const prompt = require("prompt-sync")({ sigint: true });
const readline = require('readline');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Message on quit
process.on('exit', code => {
  setTimeout(() => {
    console.log('Will not get displayed');
  }, 0);
  console.log("Thanks for using me, ciao!");
});
console.log("Input any number from 1 to 9 to set a time or Beep! with b ~*");

// Beep with B ====> U+0062
process.stdin.on('data', (key) => {
  if (key === '\u0062') {
    setImmediate(function () {
      process.stdout.write('\x07');
    });
  }
});

const keys = ['\u0031', '\u0032','\u0033','\u0034','\u0035','\u0036','\u0037','\u0038','\u0039' ]

// TIMER with 1 ======> U+0031
process.stdin.on('data', (key) => {
  if (keys.includes(key)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * key);
  } else {
    console.log("not allowed");
  }
  // if (key === '\u0031') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 1000);
  // }
  // if (key === '\u0032') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 2000);
  // }
  // if (key === '\u0033') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 3000);
  // }
  // if (key === '\u0034') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 4000);
  // }
  // if (key === '\u0035') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 5000);
  // }
  // if (key === '\u0036') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 6000);
  // }
  // if (key === '\u0037') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 7000);
  // }
  // if (key === '\u0038') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 8000);
  // }
  // if (key === '\u0039') {
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, 9000);
  // } 
});


// on any input from stdin (standard input), output a "." to stdout
// process.stdin.on('data', (key) => {
//   process.stdout.write('.');
// });

// // Random number from 1 - 10
// const numberToGuess = Math.floor(Math.random() * 10) + 1;
// // This variable is used to determine if the app should continue prompting the user for input
// let foundCorrectNumber = false;

// while (!foundCorrectNumber) {
//   // Get user input
//   let guess = prompt('Guess a number from 1 to 10: ');
//   // Convert the string input to a number
//   guess = Number(guess);

//   // Compare the guess to the secret answer and let the user know.
//   if (guess === numberToGuess) {
//     console.log('Congrats, you got it!');
//     foundCorrectNumber = true;
//   } else {
//     console.log('Sorry, guess again!');
//   }
// };

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