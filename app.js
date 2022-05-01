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

  if (isNaN(input) || input < min || input > max) {
    msg = `Please input a number between ${min} and ${max}`;
    showMessage(msg);
  }
});

function showMessage(msg) {
  message.textContent = msg;
}
