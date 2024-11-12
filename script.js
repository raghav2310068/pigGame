'use strict';
// selecting element
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const activePlayer0El = document.querySelector('.player--0');
const activePlayer1El = document.querySelector('.player--1');

// declaing initial values
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// function to call starting conditions
let startingConditions = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  diceEl.classList.add('hidden');
  activePlayer0El.classList.add('player--active');
  activePlayer1El.classList.remove('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
};
// calling the starting conditions
startingConditions();

// function declaration to switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer0El.classList.toggle('player--active');
  activePlayer1El.classList.toggle('player--active');
  activePlayer = activePlayer ? 0 : 1;
  currentScore = 0;
};

// ROLL BUTTON FUNCTIONALITY AND ALGORITHM

btnRoll.addEventListener('click', function () {
  // generating a dice number
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // handing dice image
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// HOLD BUTTON FUNCTIONALITY

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    diceEl.classList.remove('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner', 'name');
  }
  switchPlayer();
});

btnNew.addEventListener('click', function () {
  startingConditions();
  scores = [0, 0];
  playing = false;
  activePlayer = 0;
  currentScore = 0;
});
