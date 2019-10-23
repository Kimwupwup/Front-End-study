const body = document.querySelector("body");

const IMG_NUMBER = 7;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
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
