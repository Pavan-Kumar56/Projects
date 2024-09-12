'use strict';

const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
// total score IDs
const player0 = document.getElementById('score--0');
const player1 = document.getElementById('score--1');
// current scores IDs
const currentS0 = document.getElementById('current--0');
const currentS1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
// 3 buttons in the game
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  // currentScore is set to 0 and given outside the function
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player0.textContent = 0;
  player1.textContent = 0;

  currentS0.textContent = 0;
  currentS1.textContent = 0;

  dice.classList.add('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');

  playerZero.classList.remove('player--winner');
  playerOne.classList.remove('player--winner');
  playerZero.classList.add('player--active');
  playerOne.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};
//adding an event listener when btn roll is clicked
btnRoll.addEventListener('click', function () {
  // generating a random number b/w 1 & 6
  const rolledDice = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  //   displaying dice png images according to rolledDice
  dice.src = `dice-${rolledDice}.png`;
  //  if dice != 1 add rolledDice number to currentScore
  if (rolledDice !== 1) {
    currentScore += rolledDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // currentS0.textContent = currentScore;
    // if dice=1 switch to next player
  } else {
    switchPlayer();
    // toggle method adds class if its is not present and remove if it is present
  }
});
// when btnHold is clicked the current score is added to total score
btnHold.addEventListener('click', function () {
  // 1. add currentScore to active player's score
  scores[activePlayer] += currentScore;
  // scores[1]=scores[1]+currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. check if active player's score is >=100 and finish the game
  if (scores[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    dice.classList.add('hidden');
    btnRoll.classList.toggle('hidden');
    btnHold.classList.toggle('hidden');
  } else {
    // switch to next player
    switchPlayer();
  }
});
// adding an event to btnNew to bring back everything to initial state
btnNew.addEventListener('click', init);
