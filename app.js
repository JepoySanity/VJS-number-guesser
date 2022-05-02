let min = 1,
  max = 10,
  winningNum = 2,
  tries = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let input = parseInt(guessInput.value);
  // check if input is valid
  if (isNaN(input) || input < min || input > max) {
    msg = `Please input a number between ${min} and ${max}`;
    showMessage(msg, "red");
  } else {
    //check if player won
    if (input === winningNum) {
      msg = "Omedeto gozaimasu! you won this stupid game";
      gameOver(true, msg, true);
    } else {
      tries -= 1;
      if (tries === 0) {
        msg = "Sorry your ran out of guesses noob";
        gameOver(false, msg, true);
      } else {
        msg = `${input} was wrong, you have ${tries} tries left!`;
        gameOver(false, msg, false);
        guessInput.value = "";
      }
    }
  }
});

function showMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function gameOver(won, msg, disabled) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessBtn.disabled = disabled;
  guessInput.disabled = disabled;
  guessInput.style.borderColor = color;

  showMessage(msg, color);
}
