import hexColor from "./getHexColor";

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timeId = null;

stopBtn.disabled = true;

startBtn.addEventListener("click", onClickStartBtn);

stopBtn.addEventListener("click", onClickStopBtn);

function onClickStopBtn() {
  stopBtn.disabled = true;
  clearInterval(timeId);
  startBtn.disabled = false;
}

function onClickStartBtn() {
  changeBodyColor();
  startBtn.disabled = true;
  timeId = setInterval(changeBodyColor, 1000);
  stopBtn.disabled = false;
}

function changeBodyColor() {
  body.style.backgroundColor = hexColor();
}
