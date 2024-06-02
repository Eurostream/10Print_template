//variabili globali
let x = 0;
let y = 0;
let spacing = 20; //spazio tra uno slash e l'altro
let hueMax = 255; // valore massimo hue

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255, 100, 100); //differente modo colori per esperimento
  background(0);
}

function draw() {
               //map(value, start1, stop1, start2, stop2)
  let hueValue = map(y, 0, height, 0, hueMax); // Mappo y a un valore di hue

  //stroke(hue, saturation, brightness)
  stroke(hueValue, 100, 100);
  strokeWeight(3);

  //se la probabilità è 0.5 significa 50% uno o l'altro slash, se 0.9 c'è il 10% di possibilità che spunti l'altro
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }

  //animazione 10print
  x = x + spacing;
  if (x > width) {  //se la x supera la larghezza del canvas
    x = 0;          //resetta a 0 la x
    y = y + spacing; //e scendi y+spacing
  }
}
