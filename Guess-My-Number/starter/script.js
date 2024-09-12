'use strict';
// console.log(document.querySelector('.message').textContent);

// // manipulating DOM elements (message is converted using JavaScript)
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number')
// );

// document.querySelector('.number').textContent = '??';
// document.querySelector('.score').textContent = '20';

// document.querySelector('.guess').value = 2;
// console.log(document.querySelector('.guess').value);

// displaying message using JS while guessing the num
// const num = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// document.querySelector('.number').textContent = num;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   //when there is no input given
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number';
//     //when input is too low
//   } else if (guess < num) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low';
//       document.querySelector('.score').textContent = score -= 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Try again';
//       // changing BG color(red) when lost
//       document.querySelector('body').style.backgroundColor = '#ff0000';
//       document.querySelector('.score').textContent = score = 0;
//     }
//     // //when input is too high
//   } else if (guess > num) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high';
//       document.querySelector('.score').textContent = score -= 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Try again';
//       // changing BG color(red) when lost
//       document.querySelector('body').style.backgroundColor = '#ff0000';
//       document.querySelector('.score').textContent = score = 0;
//     }
//     // correct guess
//   } else if (guess === num) {
//     document.querySelector('.message').textContent = 'Correct answer 🎉';
//     // to change color of the body
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     // to change width of the button
//     document.querySelector('.number').style.width = '30rem';

//     document.querySelector('.highscore').textContent = score;
//   }
// });

// challenge = resetting with again button
let num = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
// refactoring code into a function
const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
};
const bgcolorDisplay = function (bgcolor) {
  document.querySelector('body').style.backgroundColor = bgcolor;
};

document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no input given
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    messageDisplay('No number');
  } else if (guess === num) {
    // document.querySelector('.message').textContent = 'Correct answer 🎉';
    messageDisplay('Correct answer 🎉');

    // to change color of the body
    // document.querySelector('body').style.backgroundColor = '#60b347';
    bgcolorDisplay('#60b347');
    // to change width of the button
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = num;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== num) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      messageDisplay(guess < num ? 'Too low' : 'Too high');
      document.querySelector('.score').textContent = score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Try again';
      messageDisplay('Try again');
      // changing BG color(red) when lost
      // document.querySelector('body').style.backgroundColor = '#ff0000';
      bgcolorDisplay('#ff0000');
      document.querySelector('.score').textContent = score = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = num;
  document.querySelector('.score').textContent = score;
  // document.querySelector('body').style.backgroundColor = '#222';
  bgcolorDisplay('#222');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'Start guessing...';
  messageDisplay('Start guessing...');
  document.querySelector('.guess').value = '';
});

// refactoring the below code into smaller because both else if() blocks have the same content
//   //when input is too low
// else if (guess < num) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too low';
//     document.querySelector('.score').textContent = score -= 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'Try again';
//     // changing BG color(red) when lost
//     document.querySelector('body').style.backgroundColor = '#ff0000';
//     document.querySelector('.score').textContent = score = 0;
//   }
//   // //when input is too high
// } else if (guess > num) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too high';
//     document.querySelector('.score').textContent = score -= 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'Try again';
//     // changing BG color(red) when lost
//     document.querySelector('body').style.backgroundColor = '#ff0000';
//     document.querySelector('.score').textContent = score = 0;
//   }

// you can also refactor the repeated lines into a function and then print whenever required
