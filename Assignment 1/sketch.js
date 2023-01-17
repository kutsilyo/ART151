// Mary Ashley Tenedor
// ART 151 Assignment 1: Self Portrait

// Colors used in this self portrait are from SARA-98A PALETTE found on https://lospec.com/palette-list/sara-98a

function setup() {
  createCanvas(500, 500);
  //noLoop();
}

function draw() {
  rectMode(CENTER);
  background('#ead6aa');
  
  // arcs
  noFill();
  strokeWeight(50);
  
  stroke('#71958d')
  circle(250, 250, 650)
  stroke('#657150')
  circle(250, 250, 550)
  stroke('#b61030')
  circle(250, 250, 450)
  stroke('#ca713c')
  circle(250, 250, 350)
  stroke('#ead6aa')
  circle(250, 250, 250)
  
  // define style
  strokeWeight(5);
  stroke('#1c0810');

  // hair
  fill('#1c0810');
  ellipse(250, 180, 180, 190)
  rect(250, 260, 180, 160);
  
  // more hair
  noFill();
  bezier(320, 178, 380, 238, 320, 288, 352, 350);
  bezier(160, 202, 130, 245, 180, 294, 140, 349);
  
  // headphones
  fill('#657150');
  arc(250, 158, 143, 140, 3.46, 5.97, CHORD);
  
  arc(180, 175, 80, 80, 0.79, 5.50, CHORD);
  arc(500-180, 175, 80, 80, 3.14+5.50, 3.14-0.79, CHORD);
  
  // neck and face
  stroke('#1c0810');
  fill('#daa56d');
  
  rect(250, 280, 40, 50);
  ellipse(250, 180, 140, 160)
  
  // more hair
  fill('#1c0810');
  arc(250, 174, 143, 140, 3.77, PI+HALF_PI, CHORD);
  arc(250, 174, 143, 140, PI+HALF_PI, 5.65, CHORD);
  
  // pants
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
  arc(230-(25/2), 411, 25, 25, TWO_PI, PI, CHORD);
  arc(500-230 + (25/2), 411, 25, 25, TWO_PI, PI, CHORD);
  
  // draw glasses
  noFill();
  rect(220, 180, 50, 40, 8, 8, 20, 20);
  rect(500-220, 180, 50, 40, 8, 8, 20, 20);
  
  line(180, 165, 194, 165);
  line(500-180, 165, 500-194, 165);
  line(247, 173, 253, 173);  
  
  // eyes, nose, mouth, mole
  noFill();
  arc(220, 177, 25, 25, PI, TWO_PI, OPEN);
  arc(500-220, 177, 25, 25, PI, TWO_PI, OPEN);
  
  arc(250, 210, 25, 25, 4.08, 5.34, OPEN);
  
  fill('#b61030');
  arc(250, 220, 40, 25, 0.47, 2.67, OPEN);
  
  fill('#1c0810');
  circle(236, 222, 1)
  
  // earrings
  stroke('#713410');
  circle(185, 223, 10)
  circle(185, 237, 10)
  
  circle(500-185, 223, 10)
  circle(500-185, 237, 10)

  // background
  
  // music notes
  stroke('#1c0810');
  circle(370, 110, 10)
  circle(390, 120, 10)
  line(375, 110, 375, 85);
  line(395, 120, 395, 85);
  line(375, 85, 395, 85);
  
  circle(130, 140, 10)
  line(135, 140, 135, 115);
  
  circle(110, 165, 10)
  line(105, 165, 105, 190);
  
  // plants
  fill('#657150');
  
  triangle(56, 440, 84, 440, 70, 320);
  triangle(70, 440, 92, 440, 101, 342);
  triangle(70, 440, 48, 440, 40, 342);
  
  fill('#ca713c');
  rect(70, 432, 85, 20, 5);
  rect(70, 470, 70, 53, 5);
  
  // table
  rect(463, 450, 15, 112, 5);
  rect(450, 390, 150, 15, 5);
  
  // drink
  fill('#f69d9d');
  line(482, 285, 458, 355);
  rect(466, 352, 40, 55, 5, 5, 15, 15);
  rect(466, 352, 40, 55, 5, 5, 15, 15);
  
  // book
  fill('#fffff2');
  stroke('#71958d')
  beginShape();
  vertex(440, 378);
  vertex(389, 378);
  vertex(389, 365);
  vertex(440, 365);
  endShape();
  
  console.log(mouseX, mouseY);
}
