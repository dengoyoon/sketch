const canvas = document.querySelector("canvas");
canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);
const context = canvas.getContext("2d");
const pi = Math.PI;

let x = 1;

function draw() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //   context.save();
  context.beginPath();
  context.arc(200, 200, 100, (pi / 2) * 3, (pi / 2) * 3 + x / 100, false);
  context.stroke();

  //   context.translate(1, 0);
  x++;
  //   context.restore();

  requestAnimationFrame(draw);
}

draw();
