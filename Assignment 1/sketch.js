// Mary Ashley Tenedor
// ART 151 Assignment 1: Self Portrait

// Colors used in this self portrait are from SARA-98A PALETTE found on https://lospec.com/palette-list/sara-98a

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  rectMode(CENTER);
  
  background('#ead6aa');
  
  // define style
  strokeWeight(5);

  // draw hair
  fill('#1c0810');
  
  ellipse(250, 180, 180, 190)
  rect(250, 260, 180, 160);
  
  // draw headphones
  fill('#657150');
  arc(180, 175, 80, 80, 0.79, 5.50, CHORD);
  arc(500-180, 175, 80, 80, 3.14+5.50, 3.14-0.79, CHORD);
  
  // neck and face
  fill('#daa56d');
  
  rect(250, 280, 40, 50);
  ellipse(250, 180, 140, 160)
  
  // draw pants
  fill('#71958d')
  rect(250, 457, 345-155, 100);
  line(250, 450, 250, 500);
  
  
  arc(155, 410, 70, 60, TWO_PI, HALF_PI, OPEN);
  arc(500-155, 410, 70, 60, HALF_PI, PI, OPEN);
  
  //draw sweater
  fill('#ee7175');
  
  arc(250, 380, 200, 200, 2.83, 0.31, CHORD);
  
  line(200, 352, 230, 410);
  line(500-200, 352, 500-230, 410);
  
  // draw hands
  fill('#daa56d');
  arc(230-(25/2), 410, 25, 25, TWO_PI, PI, CHORD);
  arc(500-230 + (25/2), 410, 25, 25, TWO_PI, PI, CHORD);
  
  // draw glasses
  noFill();

  rect(220, 180, 50, 40, 8, 8, 20, 20);
  rect(500-220, 180, 50, 40, 8, 8, 20, 20);
  
  line(180, 165, 194, 165);
  line(500-180, 165, 500-194, 165);
  line(247, 173, 253, 173);  
  
  // eyes
  noFill();
  arc(220, 177, 25, 25, PI, TWO_PI, OPEN);
  arc(500-220, 177, 25, 25, PI, TWO_PI, OPEN);
  
  // background
  fill('#1c0810');
  
  circle(370, 110, 10)
  circle(390, 120, 10)
  line(375, 110, 375, 85);
  line(395, 120, 395, 85);
  line(375, 85, 395, 85);
  
  console.log(mouseX, mouseY);
}
