const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber) {
  body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(images/${imgNumber}.jpg)`;
  // const image = new Image();
  // image.src = `/images/${imgNumber}.jpg`;
  // image.classList.add("bgImage");
  // body.prepend(image);
}
function genRandom() {
  // const number = Math.floor(Math.random() * 5); // 오름
  // const number = Math.ceil(Math.random() * 5); // 내림
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
