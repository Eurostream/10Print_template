let x = 0;
let y = 0;
let spacing;
let cols = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(236);
  spacing = width/cols
}

function draw() {
  fill(41);
  strokeWeight(1);
  stroke (41)
  translate(x + spacing / 2, y + spacing / 2); // trasla origine nell'altra cella

  // Ruota a caso tra 0,90,180,270
  let rotations = [0, HALF_PI, PI, PI + HALF_PI];
  let rotation = random(rotations);
  rotate(rotation);

  // Disegno il triangolo
  triangle(-spacing/2, spacing/2, spacing/2, spacing/2, -spacing/2, -spacing/2);

  // Animazione 10print
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
  
      if (y > height) { 
    noLoop();
    console.log("altezza raggiunta");
  }
  
}
