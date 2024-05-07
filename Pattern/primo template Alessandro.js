let x = 0;
let y = 0;
let size = 50; // Define the size of each shape

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220); // Set background color
}

function draw() {
  noStroke(); // No outline for triangles
  
  // Random RGB values for fill color
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b); // Set fill color
  
  // Randomly choose orientation of the triangle
  if (random(1) < 0.5) {
    triangle(x, y, x + size, y, x + size / 2, y + size); // Draw triangle pointing upwards
  } else {
    triangle(x, y + size, x + size, y + size, x + size / 2, y); // Draw triangle pointing downwards
  }
  
  x += size; // Move x position to the right
  
  // Check if x has reached the right edge of the canvas
  if (x > width - size) {
    x = 0; // Reset x to start from the left
    y += size; // Move y position down
  }
  
  // Check if y has reached the bottom of the canvas
  if (y > height - size) {
    noLoop(); // Stop the draw loop once the canvas is filled
  }
}