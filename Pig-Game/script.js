"use strict";
// Selecting Elements
const score0El = document.getElementById("score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
//Initial setting

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add("hidden");
let score = 0;
let playerActive = 0;
let scores = [0, 0];
let playing = true;

const switchPlayer = () => {
  // resetting the score for the current player
  score = 0;
  document.querySelector(`#current--${playerActive}`).textContent = score;
  //checking and switching the current player
  playerActive = playerActive === 0 ? 1 : 0;

  /*toggle removes the class if present in element and adds if absent and by doing 
   2 toggles simultaneously we make sure that it switches to the current player 
   by removing the class 'player--active' where it is present and adding where the class is missing*/
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

// Implementing the functino when roll button is clicked
btnRoll.addEventListener("click", () => {
  if (playing) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    // Channging and displaying the src of the image based on the dice number
    dice.src = `dice-${diceNum}.png`;

    if (diceNum !== 1) {
      score += diceNum;
      //Displaying the current player score
      document.querySelector(`#current--${playerActive}`).textContent = score;
    } else {
      /* -----Switching to the next player */
      switchPlayer();
    }
  }
});

// Holding the score
btnHold.addEventListener("click", () => {
  if (playing) {
    scores[playerActive] += score;
    document.querySelector(`#score--${playerActive}`).textContent =
      scores[playerActive];

    // checking if player reaches 100 points and then make him the winner
    if (scores[playerActive] >= 20) {
      playing = false;
      dice.classList.add("hidden");
      // adding the player--winner class to the player who is the winner
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add("player--winner");

      // removing player winner after choosing the winner
      document
        .querySelector(`.player--${playerActive}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// Resetting the game

btnNew.addEventListener("click", () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.classList.add("hidden");
  score = 0;
  scores = [0, 0];
  playing = true;
  document
    .querySelector(`.player--${playerActive}`)
    .classList.remove("player--winner");
  player0.classList.add("player--active");
  document.querySelector(`#current--${playerActive}`).textContent = 0;
  playerActive = 0;
});
