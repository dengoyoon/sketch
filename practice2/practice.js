const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const log = console.log;
const pi = Math.PI;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const drawCircle = (cenX, cenY, radius) => {
  ctx.beginPath();
  ctx.arc(cenX, cenY, radius, 0, 2 * pi);
  ctx.stroke();
};

const circles = [];

const animate = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  circles.forEach((circle) => {
    circle.radius += 2;
    // setTimeout(() => drawCircle(circle.x, circle.y, circle.radius), 100);
    // drawCircle(circle.x, circle.y, circle.radius);
    if (circle.radius <= 400) {
      drawCircle(circle.x, circle.y, circle.radius);
    }
  });

  requestAnimationFrame(animate);
};

animate();

// canvas.onmousemove = function (event) {
//   //onclick, onmousemove
//   const x = event.clientX - ctx.canvas.offsetLeft;
//   const y = event.clientY - ctx.canvas.offsetTop;
//   circles.push({ x: x, y: y, radius: 0 });
// };

function* getCiclePoint() {
  let i = 0;
  let radius = 0;
  let flag = 1;
  while (true) {
    i++;
    radius += 4 * flag;
    if (radius >= 200 || radius <= 0) {
      flag *= -1;
    }
    const radian = (2 * pi * i) / 40;
    const x = canvasWidth / 2 + radius * Math.cos(radian);
    const y = canvasHeight / 2 + radius * Math.sin(radian);
    yield [x, y];
  }
}

const gen = getCiclePoint();

const generateCirclePoint = async () => {
  while (true) {
    await delay(30);
    const [x, y] = gen.next().value;
    circles.push({ x: x, y: y, radius: 0 });
  }
};
generateCirclePoint();

// const pointNum = 50;
// let radius = 0;
// for (let i = 0; i <= pointNum; i++) {
//   radius++;
//   if (radius === 100) {
//     radius = 0;
//   }
//   const radian = (2 * pi * i) / pointNum;
//   const [x, y] = gen.next();
//   circles.push({ x: x, y: y, radius: 0 });
// }
