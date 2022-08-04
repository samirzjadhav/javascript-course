"use strict";

//handing click event

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    //document.querySelector(".massage").textContent = "⛔ No number!";
    displayMessage("⛔ No number!");
  }
  //if guess correct number its win
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //  guess > secretNumber ? "📈 Too high!" : "📉 Too Low!";
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too Low!");
      score--;
      //document.querySelector(".score").textContent = score;
      displayScore(score);
    } else {
      //document.querySelector(".score").textContent = "💥 You lost the game!";
      displayScore("💥 You lost the game!");
      //document.querySelector(".score").textContent = 0;
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
git;
