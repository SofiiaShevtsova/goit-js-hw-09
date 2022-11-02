const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timeId = null;

stopBtn.disabled = true;

startBtn.addEventListener("click", (event) => {
  startBtn.disabled = true;
  timeId = setInterval(onClickStartBtn, 1000);
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", (event) => {
  stopBtn.disabled = true;
  clearInterval(timeId);
  startBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStartBtn() {
  body.style.backgroundColor = getRandomHexColor();
}
