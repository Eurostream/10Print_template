let x = 0;
let y = 0;
let spacing = 50; //spacing

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(236);
}

function draw() {
  // Draw a black right triangle
  fill(41);
  noStroke();
  translate(x + spacing / 2, y + spacing / 2); // Move to the center of the current cell

  // Randomly rotate by 0, 90, 180, or 270 degrees
  let rotations = [0, HALF_PI, PI, PI + HALF_PI];
  let rotation = random(rotations);
  rotate(rotation);

  // Draw the right triangle
  triangle(-spacing/2, spacing/2, spacing/2, spacing/2, -spacing/2, -spacing/2);

  // Move x position
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
}
