const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = 1200;
const canvasHeight = 700;

const log = console.log;
const pi = Math.PI;

let radius;

const lineNum = 300;

const getRandomX = () => Math.floor(Math.random() * canvasWidth) + 0;
const getRandomY = () => Math.floor(Math.random() * canvasHeight) + 0;
const getColorNum = () => Math.floor(Math.random() * 70) + 185;
const getRandomRadius = () => Math.floor(Math.random() * 200) + 100;
const getRandomOpacity = () => Math.random();

const drawLineCircle = (centerX, centerY) => {
  ctx.strokeStyle = `rgb(${getColorNum()}, ${getColorNum()}, ${getColorNum()}, ${getRandomOpacity()})`;
  radius = getRandomRadius();
  for (let i = 0; i <= lineNum; i += 1) {
    ctx.beginPath();
    const radian = (2 * pi * i) / lineNum;
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
      centerX + radius * Math.cos(radian),
      centerY + radius * Math.sin(radian)
    );
    ctx.stroke();
    ctx.closePath();
  }
};

for (let i = 0; i <= 200; i++) {
  drawLineCircle(getRandomX(), getRandomY());
}
