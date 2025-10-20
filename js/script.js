const images = [
  'images/toltec_artifact.png',
  'images/archaeologist.png',
  'images/anthropologist.png'
];

let index = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 7000);