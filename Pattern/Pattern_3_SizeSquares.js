// Variabili globali
let x = 0;
let y = 0;
let squareSize = 10;
let xSpacing = 50;
let ySpacing;
let drawShape = true;


function setup() {
  createCanvas(windowWidth, windowHeight);  // Crea una tela delle dimensioni della finestra
  background(255);  // Imposta il colore di sfondo su bianco
  ySpacing = windowHeight / 10;  // Spaziatura verticale iniziale
}


function draw() {
  if (drawShape) {
    fill(0);
    rectMode(CENTER);  // Imposto la modalità di disegno dei rettangoli al centro
    push();  // Salva lo stato di trasformazione
    translate(x + xSpacing / 2, y + squareSize / 2);  // Trasla il sistema di coordinate
    rotate(PI / 4);  // Ruota il sistema di coordinate di 45°
    rect(0, 0, squareSize, squareSize, 5); //quadrato con Bevel
    pop();  // Ripristina lo stato di trasformazione precedente
  }

  //formula animazione 10print
  x = x + xSpacing;
  if (x > windowWidth) {
    x = 0;
    y += ySpacing;
    squareSize += 15;  // Aumenta la dimensione del quadrato
  }

  // Alterna il valore di drawShape per decidere se disegnare o meno il prossimo quadrato
  drawShape = !drawShape;
  
  if (y > height) { 
  noLoop();
  console.log("altezza raggiunta");
  }
}
