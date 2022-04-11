"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number 🎉";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value;
// document.querySelector(".guess").value = 23;

const checkBtn = document.querySelector(".check");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

checkBtn.addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".guess").value);
  if (!guessValue) {
    displayMessage("No Number ⚠️ ");
  } else if (guessValue === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Correct Number🎉");
  } else if (guessValue > secretNumber) {
    displayMessage("Guess is very high");
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guessValue < secretNumber) {
    displayMessage("Guess is too low");
    score--;
    document.querySelector(".score").textContent = score;
  }
});
