function setup() {
  createCanvas(1450, 900);

  //SETS FRAMES PER SEC
  //frameRate(5);

  //makes the draw function not loop
  noLoop();
}
// (x(value moves things to the right), y(value moves things down))

//var myRandom = 0;
//let noiseScale = 0.02;

//IN THE DRAW FUNCTION YOU CREATE YOUR ART; DEFALUT SETING AUTOMATICALLY RUNS THE DRAW FUNCTION CONTIONUOUSLY

//NOTE AT THE BOTTOM OF THE PAGE YOU WILL FIND ALL FUNCTIONS THAT I USE IN MY DRAW FUNCTION

function draw() {
  //SETS COLOR MODE TO HSB INSTEAD OF RGB, RGB IS DEFAULT
  //colorMode(HSB);
  //REPEATS THE BLOB FUNCTION
  /*for (var i = 10; i < 610; i++) {
    blobs();
  } */
  //CREATES PATTERN USING SIN AND COS
  /* for (var x = 0; x <= 360; x += 1) {
    for (var y = 0; y <= 360; y += 1) {
      spot(x);
    }
  }*/
  // MY SECOND FRACTAL FUNCTION
  //tree(500, 720, 50, 0, 200);
  //MY FIRST FRACTAL FUNCTION
  // recPattern(400, 300, 200);
  // CREATING A LANDSCAPE USING NOISE
  /* background("black");
  noStroke();
  for (var x = 100; x <= 700; x += 2) {
    for (var y = 100; y <= 500; y += 2) {
      noiseTest2(x, y);
    }
  } 

// TESTING NOISE
  /* background("blue");
  fill("white");
  noStroke();
  for (var x = 100; x <= 1200; x += 1) {
    for (var y = 100; y <= 700; y += 1) {
      noiseTest(x, y);
    }
  }

  //RANDOM NOISE FUNCTION
  /*for (let x = 0; x < width; x++) {
    let noiseVal = noise((mouseX + x) * noiseScale, mouseY * noiseScale);
    stroke(noiseVal * 155, 25, 220);
    line(x, mouseY + noiseVal * 80, x, height);
  }*/
  //BULDING LINES USING NOISE
  /*for (var x = 10; x <= 1000; x += 5) {
    rndLine(x);
  }*/
  //REPEATS A PATTERN ALONG BOTH X AND Y AXIS
  /* for (var x = 100; x <= 800; x += 100) {
    for (var y = 100; y <= 500; y += 100) {
      repCircle(x, y);
    }
  } */
  //PICKING VALUES FOR THE MY FLOWER FUNCTION
  //myFlower(200, 200, "blue");
  //CALLS MY BUBBLE FUNCTION TIMES
  /*for (var i = 0; i < 20; i++) {
    bubble();
  } 



  setInterval(rndFlower, 1000);
  if (myRandom === 0) {
   myRandom = rndFlower();
   }

  //LOPING IN A STRAIGHT ROW
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
  }

  // LINE THAT GOSE ACROSS THE PAGE; USING X=Y
  for (var i = 0; i < 800; i++) {
    myMath(i); 
  }

  // CREATES A SINUS CURVE
  for (var i = 0; i < 1000; i = i + 6) {
    mySinus(i);
  }

  for (var i = 10; i < 1000; i = i + 16) {
    mySinus(i);
  }*/
}

///////////////////////
/*function mousePressed() {
  redraw([5]); redraws draw once when mouse is pressed
}*/

//function mouseReleased() {
//noLoop(); stoppes the draw loop once mosue is released
//}

//ALL MY FUNCTIONS THAT I CALL IN MY DRAW FUNCTION
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

function randomColor(x, y) {
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);

  fill(r, g, b);
  circle(400, 500, 50);
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

  circle(x, 300 - h, 3);
}

function blobs() {
  var x = random(0, 1450);
  var y = random(0, 800);
  var d = dist(600, 500, x, y);

  var size = 80 * exp(-sq(d / 200));
  fill(50 - size, 55, size * 2, 185 - size);
  stroke(55 - size, 228, size * 5);
  circle(x, y, size);
}

function repCircle(x, y) {
  fill("blue");
  circle(x, y, 50);
}

function rndLine(x) {
  var h = 200 * noise(x / 150);
  line(x, 400, x, 400 - h);
}

function noiseTest(x, y) {
  var x2 = x + 100 * noise(x / 50, y / 50) - 50;
  var y2 = y + 100 * noise(y / 50, x / 50) - 50;

  circle(x2, y2, 1);
}

function noiseTest2(x, y) {
  var x2 = x + y / 2;
  var h = 200 * noise(x / 200, y / 200);

  h += 30 * noise(x / 30, y / 20);
  var y2 = y - h + 100;

  var hue = h - 180 + 360;
  var brightness = h / 0.5;
  fill(hue, 80, brightness, 0.3);
  circle(x2, y2, 2);
}

function recPattern(x, y, s) {
  fill(159, 43, 104, 100);
  stroke(255, 0, 0);
  circle(x, y, s);
  if (s > 20) {
    recPattern(x + s / 2, y, s / 2);
    recPattern(x - s / 2, y, s / 2);
    recPattern(x, y - s / 2, s / 2);
    recPattern(x, y + s / 2, s / 2);
  }
}

function tree(x, y, brightness, angle, length) {
  //details
  strokeWeight(length / 40);
  stroke(120, 90, brightness, length / 20);

  // branch
  var x2 = x - length * sin(angle);

  var y2 = y - length * cos(angle);

  line(x, y, x2, y2);

  //smaller tree to the left
  if (length > 5) {
    tree(x2, y2, brightness + random(-20, 20), angle + 25, length * 0.7);
    tree(x2, y2, brightness + random(-30, 30), angle + 7, length * 0.6);

    // smaller tree to the right
    tree(x2, y2, brightness + random(-20, 20), angle - 25, length * 0.6);
    tree(x2, y2, brightness + random(-30, 30), angle - 7, length * 0.7);
  }
}

function spot(a) {
  var x = 200 * cos(a * 3);
  var y = 200 * sin(a * 4);

  noFill();
  stroke(0, 100, 90, 0.9);

  circle(400 + x, 300 - y, 70);
}
