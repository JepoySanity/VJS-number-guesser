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

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

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
      gameOver(true, msg);
    } else {
      tries -= 1;
      if (tries === 0) {
        msg = "Sorry your ran out of guesses noob";
        gameOver(false, msg);
      } else {
        msg = `${input} was wrong, you have ${tries} tries left!`;
        showMessage(msg, "red");
        guessInput.value = "";
      }
    }
  }
});

function showMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  showMessage(msg, color);
  guessBtn.value = "Play again";
  guessBtn.className = "play-again";
}
