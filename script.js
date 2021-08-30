const body = document.querySelector("body");

const btnGradient = document.querySelector(".btn-gradient");

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomGradient = () =>
  `linear-gradient(to right, rgb(${random(0, 255)},${random(0, 255)},${random(
    0,
    255
  )}), rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)}))`;

const changeGradient = function () {
  body.style.background = randomGradient();
};

btnGradient.addEventListener("click", changeGradient);
