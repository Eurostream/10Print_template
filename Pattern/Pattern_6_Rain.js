//link: https://www.youtube.com/watch?v=bEyTZ5ZZxZs

//animo gli slash verso destra, altrimenti continuerebbero a sovrapporsi sullo stesso punto creando una X
let x = 0;
let y = 0;
let spacing = 30 //valore che cambia lo spazio tra uno slash e l'altro


//creo un canvas di una grandezza adattabile alla finestra, bianco (255) o nero (0)
function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(0);
}

//creo le figure, con line faccio la slash con rect un rettangolo/quadrato
function draw() {
  stroke(255);
  fill (230, 130, 30)
  if (random(1) < 0.5) {
    line (x, y-spacing, x+spacing, y+spacing)
}

//ogni frame si muove di "spacing" pixels
  x = x+spacing
  if (x > width) { 
    x = 0           //resetta a 0 la x quando è maggiore della width del canvas
    y = y + spacing //spacing tra le righe
  }
}