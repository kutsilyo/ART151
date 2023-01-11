// Mary Ashley Tenedor
// ART 151 Assignment 1
/* In p5*js Use 2d primitive shapes (square, point, line, circle, triangle, ellipse, beginShape) to create a self portrait.
You can use random() to create some variation in your portrait. Use the noLoop() function to keep random() from running again and again every frame.
*/

//https://p5js.org/reference/#/p5/strokeCap
// https://p5js.org/reference/#/p5/bezierVertex

//https://lospec.com/palette-list/sara-98a

function setup() {
  createCanvas(300, 300);
  //noLoop();
}

function draw() {
  background('#ca713c');
  
  strokeJoin(ROUND);
  strokeWeight(5);
  
  beginShape(QUAD_STRIP);
  fill(60, 100, 20);
  vertex(30, 30); // top left
  vertex(30, 60); // bottom left
  vertex(60, 30); // top right
  vertex(60, 60); // bottom right
  
  fill(20, 20, 250);
  vertex(90, 30);
  vertex(90, 60);
  endShape();
  
  beginShape();
  curveVertex(84, 91);
  curveVertex(84, 91);
  curveVertex(68, 19);
  curveVertex(21, 17);
  curveVertex(32, 91);
  curveVertex(32, 91);
  endShape();
  
  console.log(mouseX, mouseY);
}