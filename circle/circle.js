const canvas = document.querySelector("canvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
const context = canvas.getContext("2d");
const pi = Math.PI;

let x = 1;

function draw() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  context.beginPath();
  context.fillStyle = "blue";
  context.arc(200, 200, 100, (pi / 2) * 3, (pi / 2) * 3 + x / 50, false);
  context.fill();
  context.closePath();
  context.beginPath();
  context.fillStyle = "white";
  context.arc(200, 200, 40, (pi / 2) * 3, (pi / 2) * 3 + x / 50, false);
  context.fill();
  context.closePath();

  x++;

  requestAnimationFrame(draw);
}

draw();
