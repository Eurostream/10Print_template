let x = 0;
let y = 0;
let spacing = 50;
let value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(31, 149, 172);
  background(247, 178, 118);
  ellipseMode(CORNER);
  angleMode(DEGREES);
}

function draw() {
  print10();
}

function print10() {

  value = random(1);
  noFill();
  strokeWeight(3);
  stroke(31, 149, 172);

  if (value <= 0.25) {
    arc(x, y, spacing, spacing, 0, 270);
  } else if (value > 0.25 && value <= 0.50) {
    arc(x, y, spacing, spacing, 270, 180);

  } else if (value > 0.50 && value <= 0.75) {
    arc(x, y, spacing, spacing, 180, 90);

  } else if (value > 0.75 && value <= 1.00) {
    arc(x, y, spacing, spacing, 90, 360);
  }

  x += spacing;

  if (x > width) {
    x = 0;
    y += spacing;
  }

  if (y > height) {
    noLoop();
  }
}