//link: https://www.youtube.com/watch?v=bEyTZ5ZZxZs

//variabili globali
let x = 0
let y = 0;
let spacing = 50
let arcSize = 100


//creo un canvas di una grandezza adattabile alla finestra, bianco (255) o nero (0)
function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
}

//creo le figure, con line faccio la slash con rect un rettangolo/quadrato
function draw() {
  
    disc = int(random(5)) % 10;  // Genera un numero casuale per determinare quale forma disegnare
  switch(disc) {
    
    case 0:
    // Arco Rosso 
    fill(247, 70, 79);
    arc(x, y, arcSize, arcSize, radians(0), radians(90));
    break;
   
    case 1:
    // Solo Arco Arancio
    fill(255, 163, 0);
    arc(x+spacing, y, arcSize, arcSize, radians(90), radians(180));
    break;
   
    case 2:
    // Altro Arco Blu
    fill(64, 88, 188);
    arc(x, y+spacing, arcSize, arcSize, radians(180), radians(270));
    break;
   
    case 3:
    // Altro Quadrato Blu
    fill(64, 88, 188);
    square (x,y, spacing)
    break;
    
    case 4:
    // Altro cerchio
    fill(255);
    circle (x+spacing/2, y+spacing/2, spacing)
    break;  // Non disegna nulla
}
  
  
//ogni frame si muove di "spacing" punti
  x = x+spacing
  if (x > width) { 
    x = 0           //resetta a 0 la x quando è maggiore della width del canvas
    y = y + spacing //spacing tra le right
  }
}