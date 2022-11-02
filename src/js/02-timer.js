import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
import "notiflix/dist/notiflix-3.2.5.min.css";
import convertMs from "./convertMs";

const startBtn = document.querySelector("button[data-start]");
const timer = document.querySelector(".timer");

let timeFromPicker = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure("Please choose a date in the future");
      return;
    }
    startBtn.disabled = false;
    timeFromPicker = selectedDates[0].getTime();
  },
};

startBtn.disabled = true;

flatpickr("#datetime-picker", options);

let timeId = null;
startBtn.addEventListener("click", onStartBtnClick);

function onStartBtnClick() {
  timeId = setInterval(timing, 1000);
}

function timing() {
  timeFromPicker = timeFromPicker - 1000;
  if (timeFromPicker - options.defaultDate.getTime() < 1000) {
    clearInterval(timeId);
  }
  const time = convertMs(timeFromPicker - options.defaultDate.getTime());
  const { days, hours, minutes, seconds } = time;

  timer.querySelector("span[data-days]").textContent = `${days}`.padStart(
    2,
    "0"
  );
  timer.querySelector("span[data-hours]").textContent = `${hours}`.padStart(
    2,
    "0"
  );
  timer.querySelector("span[data-minutes]").textContent = `${minutes}`.padStart(
    2,
    "0"
  );
  timer.querySelector("span[data-seconds]").textContent = `${seconds}`.padStart(
    2,
    "0"
  );
}
