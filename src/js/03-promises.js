import Notiflix from "notiflix";
import "notiflix/dist/notiflix-3.2.5.min.css";

const form = document.querySelector(".form");
const user = {};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    user[name] = value;
  });
  form.reset();

  for (let i = 1; i <= user.amount; i += 1) {
    createPromise(i, user.delay);

    user.delay = Math.floor(user.delay) + Math.floor(user.step);
  }
}

function createPromise(position, delay) {
  // console.log(delay);
  // console.log(position);
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  promise
    .then((value) => Notiflix.Notify.success(value))
    .catch((error) => Notiflix.Notify.failure(error));
}
