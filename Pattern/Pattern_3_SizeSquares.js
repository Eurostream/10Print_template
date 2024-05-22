let x = 0;
let y = 0;
let squareSize = 10;
let xSpacing = 50;
let ySpacing;
let drawShape = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  ySpacing = windowHeight / 10; // spacing iniziale
}

function draw() {
  if (drawShape) {
    // disegna un quadrato nero
    fill(0);
    rectMode(CENTER);
    push();
    translate(x + xSpacing / 2, y + squareSize / 2);
    rotate(PI / 4); // Ruota 45°
    rect(0, 0, squareSize, squareSize, 5); // raggio bevel angoli
    pop();
  }


  // loop per 10print
  x += xSpacing;
  if (x > windowWidth) {
    x = 0;
    y += ySpacing;
    // Increase square size
    squareSize += 10;
  }

  // switch per disegnare o no
  drawShape = !drawShape;
}
