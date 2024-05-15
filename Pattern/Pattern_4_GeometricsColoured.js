//link: https://www.youtube.com/watch?v=bEyTZ5ZZxZs

//animo gli slash verso destra, altrimenti continuerebbero a sovrapporsi sullo stesso punto creando una X
let x = 0;
let y = 0;
let spacing = 50 //valore che cambia lo spazio tra uno slash e l'altro
let arcSize = 100


//creo un canvas di una grandezza adattabile alla finestra, bianco (255) o nero (0)
function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
}

//creo le figure, con line faccio la slash con rect un rettangolo/quadrato
function draw() {
  if (random(0, 1) > 0.5) {
    // Arco Rosso 
    fill(247, 70, 79);
    arc(x, y, arcSize, arcSize, radians(0), radians(90));
  } else if (random(0, 1) > 0.5) {
    // Solo Arco Arancio
    fill(255, 163, 0);
    arc(x+spacing, y, arcSize, arcSize, radians(90), radians(180));
  } else if (random(0, 1) > 0.5) {
    // Altro Arco Blu
    fill(64, 88, 188);
    arc(x, y+spacing, arcSize, arcSize, radians(180), radians(270));
  } else if (random(0, 1) > 0.5) {
    // Altro Quadrato Blu
    fill(64, 88, 188);
    square (x,y, spacing)
  } else {
    // Altro cerchio
    fill(255);
    circle (x+25, y+25, spacing)
  }
  
//ogni frame si muove di "spacing" punti
  x = x+spacing
  if (x > width) { 
    x = 0           //resetta a 0 la x quando è maggiore della width del canvas
    y = y + spacing //spacing tra le right
  }
}