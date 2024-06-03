let x = 0;
let y = 0;
let spacing
let cols = 28;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(247, 178, 118); // Imposta il colore di sfondo
  angleMode(DEGREES); // Imposta la modalità angolo in gradi
  spacing = width/cols
}

function draw() {
  value = random(1); // Genera un valore casuale tra 0 e 1
  
  // Decidi casualmente se riempire l'arco
  if (random(1) < 0.5) {
    fill(31, 149, 172); // Imposta il colore di riempimento
  } else {
    noFill(); // Non riempie l'arco
  }

  //spessore e colore
  strokeWeight(3);
  stroke(31, 149, 172);

  if (value <= 0.25) {
    arc(x, y, spacing, spacing, 0, 270); // Disegna un arco da 0 a 270 gradi
  } else if (value > 0.25 && value <= 0.50) {
    arc(x, y, spacing, spacing, 270, 180); // Disegna un arco da 270 a 180 gradi
  } else if (value > 0.50 && value <= 0.75) {
    arc(x, y, spacing, spacing, 180, 90); // Disegna un arco da 180 a 90 gradi
  } else if (value > 0.75 && value <= 1.00) {
    arc(x, y, spacing, spacing, 90, 360); // Disegna un arco da 90 a 360 gradi
  }

  
  //animazione 10print
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