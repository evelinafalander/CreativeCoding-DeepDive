function setup() {
  createCanvas(1450, 800);
  // frameRate(5); //decides the frames per second of the draw() loop
  noLoop();
  background("black");
}
// (x(move right), y(move down))

//var myRandom = 0;

function draw() {
  /*myFlower(200, 200, "blue");
  for (var i = 0; i < 200; i++) {
    bubble();
  } //thsi calls your funtion a specific set of times
  randomColor();*/
  //setInterval(rndFlower, 1000);
  // if (myRandom === 0) {
  // myRandom = rndFlower();
  //}
  //looping a function in straight row
  /*for (var x = 0; x <= 1100; x = x + 50) {
    fill(x / 3, x / 4, x / 4);
    circle(x, 100, x / 3);
    strokeWeight(5);
  }
  for (var x = 10; x <= 500; x = x + 30) {
    noFill();
    circle(400, 450, x);
    strokeWeight(4);
    stroke(255 - x / 1, 255 - x / 2, 255 - x / 4);
  }*/

  /* for (var i = 0; i < 800; i++) {
    myMath(i); // this creats a line that goes across the page like a x=y maths function
  }*/
  for (var i = 0; i < 1000; i = i + 6) {
    mySinus(i);
  }
}
/*function mousePressed() {
  redraw([5]); redraws draw once when mouse is pressed
}*/

//function mouseReleased() {
//noLoop(); stoppes the draw loop once mosue is released
//}

function myFlower(x, y, c) {
  /*var x = 725;
  var y = 400;*/

  fill("red");
  noStroke();
  circle(x, y, 100);

  fill(c);
  noStroke();
  circle(x, y - 100, 100);
  circle(x, y + 100, 100);
  circle(x - 100, y, 100);
  circle(x + 100, y, 100);
}

function rndFlower() {
  var x = random(50, 1400);
  var y = random(50, 750);

  fill("brown");
  noStroke();
  circle(x, y, 50);

  fill("pink");
  noStroke();
  circle(x, y - 50, 50);
  circle(x, y + 50, 50);
  circle(x - 50, y, 50);
  circle(x + 50, y, 50);
}

function bubble() {
  var x = random(50, 1400);
  var y = random(50, 750);
  var size = random(50, 100);

  fill(random(["#f7c6f6", "#fff9b5", "#edc3f7", "#b1fae4"]));
  stroke("white");
  circle(x, y, size);
}

function randomColor() {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);

  fill(r, g, b);
  circle(100, 400, 200);
}

function myMath(x) {
  var y = x;
  fill("red");
  circle(x, y, 10);
  noStroke();
}
function mySinus(x) {
  var h = 60 * sin(x);
  fill(123 - h / 3, 200 - h / 4, 255 - h / 2, 220);
  noStroke();
  rect(x, 300, 4, h);

  fill(238, 184, 255, 190);

  rect(x, 300, 3, h * 1.4);
}
