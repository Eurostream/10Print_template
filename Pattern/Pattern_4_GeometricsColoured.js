//link: https://www.youtube.com/watch?v=bEyTZ5ZZxZs

//variabili globali
let x = 0;
let y = 0;
let arcSize;
let cols = 7;


//creo un canvas di una grandezza adattabile alla finestra, bianco (255) o nero (0)
function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(255);
  arcSize = width/cols
}

//creo le figure, con line faccio la slash con rect un rettangolo/quadrato
function draw() {
  
  strokeWeight(0);
  

  value = random(1);
  //funzione random
  if (value <= 0.2) {
    // Arco Rosso 
    fill(247, 70, 79);
    arc(x, y, arcSize, arcSize, radians(0), radians(90));

   
  } else if (value > 0.2 && value <= 0.4) {
    //Arco Arancio
    fill(255, 163, 0);
    arc(x+arcSize/2, y, arcSize, arcSize, radians(90), radians(180));

   
  } else if (value > 0.4 && value <= 0.6) {
    //Arco Blu
    fill(64, 88, 188);
    arc(x+arcSize/2, y+arcSize/2, arcSize, arcSize, radians(180), radians(270));

   
  } else if (value > 0.6 && value <= 0.8) {
    //Quadrato Blu
    fill(64, 88, 188);
    square (x,y, arcSize/2);

    
  } else if (value > 0.8 && value <= 1) {
    //Cerchio nero
    fill(36);
    circle (x+arcSize/4, y+arcSize/4, arcSize/2);

}
  
  
//ogni frame si muove di "spacing" punti
  x = x+arcSize/2;
  if (x > width) { 
    x = 0  ;         //resetta a 0 la x quando è maggiore della width del canvas
    y = y + arcSize/2; //spacing tra le right
  }
  
  if (y > height) { 
    noLoop();
    console.log("altezza raggiunta")
   }
}
