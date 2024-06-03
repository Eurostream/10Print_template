let x = 0;  // Coordinata x iniziale
let y = 0;  // Coordinata y iniziale
let spacing;
let cols = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  spacing = width/cols
}


function draw() {
  strokeWeight(3)
  stroke(43, 118, 207);
  
  //con un solo if il codice disegna o no una linea nella direzione specificata
  if (random(1) < 0.5) {
    line(x, y - spacing, x + spacing, y + spacing);
  }

  // Aggiorna la posizione x ad ogni frame
  x = x + spacing;
  
  
//Animazione 10print
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
  
  if (y > height) { 
  noLoop();
  console.log("altezza raggiunta");
  }
}