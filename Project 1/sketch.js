let numSquaresX;
let sizeX;
let offsetX;
let numSquaresY;
let sizeY;
let offsetY;

let margin = 20;

let numCon;
let conInc

function setup() {
  randomSeed(-333); 
  /* some seeds and why I like them
  111 - negative diamonds, symmetry, checkers, triangles
  666 - diamond, triangle, rhombus, negative triangles, checkers
  -999 - negative rectangle, triangles, square, negative triangles
  -666 - square, negative diamonds, triangles, negative triangles, rectangle, rhombus
  -555 - rhombus, rectangle, negative diamond, triangles, checkers
  -333 - big diamond, trapezoid, triangle, negative triangles, square, rhombus
  -222 - negative diamonds, square, triangles, rhombus
  */
  createCanvas(600, 600);
  noFill();
  background("white");
  stroke("black");
  rectMode(CENTER);

  noLoop();
}

// top of square
function shape1(x, y, i) {  
  line(
    offsetX + sizeX*x - (sizeX - i * conInc)/2,
    offsetY + sizeY*y - (sizeY - i * conInc)/2, 
    offsetX + sizeX*x + (sizeX - i * conInc)/2,
    offsetY + sizeY*y - (sizeY - i * conInc)/2
  )
}

// right side of square
function shape2(x, y, i) {
  line(
    offsetX + sizeX*x + (sizeX - i * conInc)/2,
    offsetY + sizeY*y - (sizeY - i * conInc)/2, 
    offsetX + sizeX*x + (sizeX - i * conInc)/2,
    offsetY + sizeY*y + (sizeY - i * conInc)/2
  );
}

// bottom of square
function shape3(x, y, i) {
  line(
    offsetX + sizeX*x + (sizeX - i * conInc)/2,
    offsetY + sizeY*y + (sizeY - i * conInc)/2,
    offsetX + sizeX*x - (sizeX - i * conInc)/2,
    offsetY + sizeY*y + (sizeY - i * conInc)/2
  );
}

// left of square
function shape4(x, y, i) {
  line(
    offsetX + sizeX*x - (sizeX - i * conInc)/2,
    offsetY + sizeY*y - (sizeY - i * conInc)/2,
    offsetX + sizeX*x - (sizeX - i * conInc)/2,
    offsetY + sizeY*y + (sizeY - i * conInc)/2
  );
}

// top left to bottom right diagonal
function shape5(x, y) {
  line(
    offsetX + sizeX*x - (sizeX)/2,
    offsetY + sizeY*y - (sizeY)/2,
    offsetX + sizeX*x + (sizeX)/2,
    offsetY + sizeY*y + (sizeY)/2
  )
}

// top right to bottom left diagonal
function shape6(x, y) {
  line(
    offsetX + sizeX*x + (sizeX)/2,
    offsetY + sizeY*y - (sizeY)/2,
    offsetX + sizeX*x - (sizeX)/2,
    offsetY + sizeY*y + (sizeY)/2
  )
}

// calculate values for size, offset, and spaceing between
// concentric shapes
function setParams() {
  sizeX = (width - 2 * margin) / numSquaresX;
  offsetX = sizeX / 2 + margin;
  sizeY = (height - 2 * margin) / numSquaresY;
  offsetY = sizeY / 2 + margin;
  
  conInc = sizeX / numCon;
}

// draw shapes on a grid
function makeShapes() {
  for (let y = 0; y < numSquaresY; y++) {
    for (let x = 0; x < numSquaresX; x++) {
      let a = random(0, 50);
      
      // depending on the random number chosen, either draw repeated lines or a diagonal
      if (a < 10) {
        for (let i = 0; i < numCon; i++) {
          shape1(x, y, i);
        }
      } else if (a < 20){
        for (let i = 0; i < numCon; i++) {
          shape2(x, y, i);
        }
      } else if (a < 30){
        for (let i = 0; i < numCon; i++) {
          shape3(x, y, i);
        }
      } else if (a < 40){
        for (let i = 0; i < numCon; i++) {
          shape4(x, y, i);
        }
      } else if (a < 45){
        shape5(x, y);
      } else {
        shape6(x, y);
      }
      
      
    }
  }
}

function draw() {
  // 1st grid, small shapes
  
  numSquaresX = 18;
  numSquaresY = 18;
  
  numCon = 4;
  
  setParams();
  
  makeShapes();
  
  /**********************************************************/
  // 2nd grid, larger shapes, more concentric shapes
  
  numSquaresX = numSquaresX / 2;
  numSquaresY = numSquaresY / 2;
  
  numCon = numCon * 2;
  
  setParams();
  
  makeShapes();
 
}
