function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(240);
}
  
  
let x = 0;
let y = 0;
let spacing = 100;
let disc = 0;
let hVar = 0;

function draw() {
//creo il rettangolo e la sua rotazione casuale
  stroke(41)
  strokeWeight (1.3)
  fill(240)
  translate(x + spacing, y + spacing)
  rectMode(CENTER)
  rect(0, 0, spacing)

  fill(41)
  let a = (int(random(16)) % 4)
  //console.log(2 * 180 * a/4)
  rotate(2 * PI * a/4);

  disc = int(random(4)) % 4;
  hVar = 10 - int(random(2)*10)
  //console.log(hVar)

// draw triangolo e arco con swithc e case al posto di else if, else
  switch(disc){
    case 0:
      rectMode(CORNER)
      rect(-spacing/2, -spacing/2, spacing, spacing/2 + hVar)
      break;
    case 1:
      triangle(-spacing/2, -spacing/2, spacing/2, -spacing/2, 0, 0 + hVar);
      break;
    case 2:
      arc(0, -spacing/2, spacing, spacing + hVar, 0, PI);
      break;
    case 3:
      break; //void
  }

//animazione lineare destra e a capo
  x += spacing
  if(x > width){
    x = 0
    y += spacing
  }
}