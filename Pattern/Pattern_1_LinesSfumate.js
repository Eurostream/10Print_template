//link: https://www.youtube.com/watch?v=bEyTZ5ZZxZs

//animo gli slash verso destra, altrimenti continuerebbero a sovrapporsi sullo stesso punto creando una X
let x = 0;
let y = 0;
let spacing = 20 //valore che cambia lo spazio tra uno slash e l'altro
let hueValue = 100


//creo un canvas di una grandezza adattabile alla finestra, bianco (255) o nero (0)
function setup() {
  createCanvas(windowWidth, windowHeight); 
  colorMode(HSB, 100, 100, 100,);
  background(0);
}

//creo le figure, con line faccio la slash con rect un rettangolo/quadrato
function draw() {
  stroke(hueValue, 100, 100);
  strokeWeight(3)
  //se la probabilità è 0.5 significa 50% uno o l'altro slash, se 0.9 c'è il 10% di possibilità che spunti l'altro
  if (random(1) < 0.5) {
    line (x, y, x+spacing, y+spacing);
    } else {
    line (x, y+spacing, x+spacing, y);      
    }


//ogni frame si muove di "spacing" punti
  x = x+spacing
  if (x > width) { 
    x = 0           //resetta a 0 la x quando è maggiore della width del canvas
    y = y + spacing //spacing tra le right
  }
  //huevalue change con costrain;
  hueValue = hueValue + random(-5,5);
  hueValue = constrain(hueValue, 0, 50);
}