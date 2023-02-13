// Colors used are from the palette found on https://lospec.com/palette-list/cl8uds

var radius = 100;

function setup() {
  createCanvas(500, 500);
  ellipseMode(RADIUS);
}

function draw() {  
  noStroke();
  
  var x = width/2;
  var y = height/2;
  
  // spacing chosen based on number of colors in palette
  var spacing = (width/2)/6;

  // distance from the center of the circle
  var d = dist(mouseX, mouseY, x, y);
  
  // change color of button based on whether it is in the circle
  if (d < radius) { // mouse within circle
    fill("#a5b7d4");
    background("#9aabc9");
    
    if (mouseIsPressed) {
      fill("#fcb08c");
    }
  } else {
    fill("#fcb08c");
    
    if (mouseIsPressed) {
      fill("#a5b7d4");
    }
  }
  
  // change background based on distance from center
  if (d < spacing) {
    background("#9aabc9");
  } else if (d > spacing && d < (spacing*2)) {
    background("#8fa0bf");
  } else if (d > (spacing*2) && d < (spacing*3)) {
    background("#a597a1");
  } else if (d > (spacing*3) && d < (spacing*4)) {
    background("#b48d92");
  } else if (d > (spacing*4) && d < (spacing*5)) {
    background("#d6938a");
  } else {
    background("#ef9d7f");
  }
  
  ellipse(x, y, radius, radius);
}
