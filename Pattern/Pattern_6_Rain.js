let x = 0;  // Coordinata x iniziale
let y = 0;  // Coordinata y iniziale
let spacing = 30;  // Valore che determina lo spazio tra uno slash e l'altro


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}


function draw() {
  stroke(255);
  fill(230, 130, 30);
  
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
}
