function setup() {
  createCanvas(1450, 800);
}

function draw() {
  var x = 725;
  var y = 400;

  fill("yellow");
  noStroke();
  circle(x, y, 100);

  fill("pink");
  noStroke();
  circle(x, y - 100, 100);
  circle(x, y + 100, 100);
  circle(x - 100, y, 100);
  circle(x + 100, y, 100);
}
