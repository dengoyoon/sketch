const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = 1400;
const canvasHeight = 750;

const log = console.log;
const pi = Math.PI;

const getRandomX = () => Math.floor(Math.random() * canvasWidth) + 0;
const getRandomY = () => Math.floor(Math.random() * canvasHeight) + 0;
const getColorNum = () => Math.floor(Math.random() * 70) + 185;
const getRandomRGB = () =>
  `rgb(${getColorNum()}, ${getColorNum()}, ${getColorNum()}, ${getRandomOpacity()})`;
const getRandomRadius = () => Math.floor(Math.random() * 200) + 100;
const getRandomOpacity = () => Math.random();

const drawLine = (sX, sY, eX, eY) => {
  ctx.beginPath();
  ctx.moveTo(sX, sY);
  ctx.lineTo(eX, eY);
  ctx.stroke();
  ctx.closePath();
};

const drawLineCircle = (centerX, centerY, radius, lineNum) => {
  ctx.strokeStyle = getRandomRGB();
  radius = getRandomRadius();
  for (let i = 0; i <= lineNum; i += 1) {
    const radian = (2 * pi * i) / lineNum;
    drawLine(
      centerX,
      centerY,
      centerX + radius * Math.cos(radian),
      centerY + radius * Math.sin(radian)
    );
  }
};

for (let i = 0; i <= 200; i++) {
  drawLineCircle(getRandomX(), getRandomY(), getRandomRadius(), 300);
}
