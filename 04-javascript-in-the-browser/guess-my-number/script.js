"use strict";
/*
// selecting and manipulating element
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 12;

document.querySelector(".guess").value = 19;
*/

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
  //if guess number too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // //if guess number too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

/*
JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  //document.querySelector(".score").textContent = score;
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
