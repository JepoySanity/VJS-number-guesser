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
    showMessage(msg, "red", false);
  } else {
    //check if player won
    if (input === winningNum) {
      showMessage("Congrats! you guess that right mate!", "green", true);
    } else {
      tries -= 1;
      if (tries === 0) {
        showMessage("Sorry your ran out of guesses noob", "red", true);
      } else {
        showMessage(`${input} was wrong, you have ${tries} tries left`, "red");
      }
    }
  }
});

function showMessage(msg, color, disabled) {
  message.textContent = msg;
  message.style.color = color;
  guessBtn.disabled = disabled;
  guessInput.style.borderColor = color;
}
