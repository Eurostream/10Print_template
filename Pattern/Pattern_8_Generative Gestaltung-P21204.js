var tileCount = 20; // Numero di tiles sulla griglia
var actRandomSeed = 0; // Seed per randomizzare le forme
var rectSize = 20; // Dimensione della forma
var currentShape = 'rect'; // Forma corrente: 'rect', 'ellipse', 'triangle'

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(255);

  randomSeed(actRandomSeed); // Imposta il seme per randomizzare le forme

  // Griglia di tessere
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX; // Posizione X della forma
      var posY = height / tileCount * gridY; // Posizione Y della forma

      // Calcola lo spostamento dei vertici in base alla posizione del mouse
      var shiftX1 = mouseX / 20 * random(-1, 0.8);
      var shiftY1 = mouseY / 20 * random(-0.6, 1.2);
      var shiftX2 = mouseX / 20 * random(-0.75, 0.5);
      var shiftY2 = mouseY / 20 * random(-0.5, 0.8);
      var shiftX3 = mouseX / 20 * random(-0.9, 0.7);
      var shiftY3 = mouseY / 20 * random(-0.3, 0.8);
      var shiftX4 = mouseX / 20 * random(-0.59, 0.6);
      var shiftY4 = mouseY / 20 * random(-0.8, 0.3);

      // Imposta un colore casuale per ogni figura
      fill(random(360), 100, 100, 60);

      push(); // Salva lo stato corrente della trasformazione e lo chiude con pop
      translate(posX, posY); // Sposto2 l'origine delle coordinate

      // Disegna la forma corrente
      if (currentShape === 'rect') {
        beginShape();
        vertex(shiftX1, shiftY1);
        vertex(rectSize + shiftX2, shiftY2);
        vertex(rectSize + shiftX3, rectSize + shiftY3);
        vertex(shiftX4, rectSize + shiftY4);
        endShape(CLOSE);
      } else if (currentShape === 'ellipse') {
        ellipse(0, 0, rectSize + shiftX1, rectSize + shiftY1);
      } else if (currentShape === 'triangle') {
        triangle(shiftX1, shiftY1, rectSize + shiftX2, shiftY2, shiftX3, rectSize + shiftY3);
      }

      pop(); // Ripristina la matrice di trasformazione salvata
    }
  }
}

function mousePressed() {
  actRandomSeed = random(100000); // Cambia il seme per randomizzare le forme quando si preme il mouse
}

function keyReleased() {
  // Salva la tela come immagine PNG quando si preme 's' o 'S'
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  // Cambia la forma corrente in base al tasto premuto
  if (key == '1') currentShape = 'rect';
  if (key == '2') currentShape = 'ellipse';
  if (key == '3') currentShape = 'triangle';
}
