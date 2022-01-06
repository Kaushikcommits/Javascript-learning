const message = document.querySelector(".message");
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const number = document.querySelector(".number");
const bttn = document.querySelector(".check");
const again = document.querySelector(".again");
const highscore = document.querySelector(".highscore");

let scoreNum = 5;
score.textContent = scoreNum;
let highscoreNum = 0;

console.log(highscoreNum);
/*Math.trunc returns a whole number, mutliplying Math.random() into 20
    gives a number bween 0 to 19 & we add +1 to fix that and give a number between 1 and 20; */
let secretNum = Math.trunc(Math.random() * 20) + 1;

// function for message textContent

const messageSetter = (string) => {
  message.textContent = string;
};
/* Now when the button submit is clicked we do the following */

bttn.addEventListener("click", () => {
  /* In this case .guess class is an input field hence to get or set the value inside an input field 
we use the .value to the selected element */
  // by adding Number() we turn the string into a number
  const guessNum = Number(guess.value);
  // if guessNum returns false
  // (because ! makes the statement invert true to false or false to true ex: if(guessNum == false) = if (!guessNum)
  // so if there is nothing inside guessNum then **if(!guessNum)** returns true and the following code executes)
  if (!guessNum) {
    messageSetter("Enter something fucka");
  } else if (guessNum === secretNum) {
    messageSetter("You guessed it right !");
    document.querySelector("body").style.backgroundColor = "green";
    number.textContent = secretNum;
    number.style.width = "30rem";
    highscoreNum = scoreNum;
    highscore.textContent = highscoreNum;
  } else if (guessNum !== secretNum) {
    if (scoreNum > 1) {
      messageSetter(
        guessNum > secretNum ? "Number is too big" : "Number is too small"
      );
      scoreNum--;
    } else {
      scoreNum = 0;
      messageSetter("You lost the game");
    }
    score.textContent = scoreNum;
  }
});

// When the Again button is clicked the following happens

again.addEventListener("click", () => {
  messageSetter("Start guessing again :) ");
  number.style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  guess.value = "";
  scoreNum = 5;
  score.textContent = scoreNum;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
});
