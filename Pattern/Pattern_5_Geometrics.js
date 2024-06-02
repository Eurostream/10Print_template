function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
}

// Variabili globali
let x = 0;
let y = 0;
let spacing = 100;
let disc = 0;
let hVar = 0;


function draw() {
  // Imposta le caratteristiche del bordo del rettangolo
  stroke(41);
  strokeWeight(1.3);
  fill(240);

  // Trasla il sistema di coordinate
  translate(x + spacing, y + spacing);
  rectMode(CENTER);  // Imposta la modalità di disegno dei rettangoli al centro
  rect(0, 0, spacing);

  fill(41);
  let a = (int(random(16)) % 4);  // Genera un numero casuale per la rotazione del rettangolo
  rotate(2 * PI * a / 4);  // Ruota il rettangolo

  disc = int(random(4)) % 4;  // Genera un numero casuale per determinare quale forma disegnare
  hVar = 10 - int(random(2) * 10);  // Genera una variazione casuale per l'altezza

  // Crea una forma basata sul valore di disc
  switch(disc) {
    case 0:
      rectMode(CORNER);
      rect(-spacing / 2, -spacing / 2, spacing, spacing / 2 + hVar);  // Disegna un rettangolo
      break;
    case 1:
      triangle(-spacing / 2, -spacing / 2, spacing / 2, -spacing / 2, 0, 0 + hVar);  // Disegna un triangolo
      break;
    case 2:
      arc(0, -spacing / 2, spacing, spacing + hVar, 0, PI);  // Disegna un arco
      break;
    case 3:
      break;  // Non disegna nulla
  }

  // Animazione: muove a destra e poi va a capo
  x += spacing;
  if (x > width-spacing*2) {
    x = 0;
    y += spacing;
  }
}
