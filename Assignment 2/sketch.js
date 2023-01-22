// Mary Ashley Tenedor
// ART 151 Assignment 2: For Loop Remix

// Colors used in the background are from the BERRY NEBULA PALETTE found on https://lospec.com/palette-list/berry-nebula

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background("#0d001a");
  rectMode(CENTER);
  noStroke();

  //----------------------------------------------------------//
  // dark sky background
  rotate(PI / 2.5); // rotate to make all lines diagonal

  let colors = [
    "#6e5181",
    "#6e5181",
    "#6e5181",
    "#6f1d5c",
    "#6f1d5c",
    "#4f1446",
    "#4f1446",
    "#2e0a30",
    "#2e0a30",
    "#2e0a30",
  ];

  // set size of circles in background
  let small = 1;
  let large = 5;
  let rand = random(small, large);
  let newRand = random(small, large);

  // draw the background with random colors and sizes
  for (let j = -500; j < 300; j += large + 3) {
    for (let i = -100; i < 700; i += rand / 2 + newRand / 2 + 3) {
      fill(random(colors));
      circle(i, j, newRand);

      rand = newRand;
      newRand = random(small, large);
    }
  }

  //----------------------------------------------------------//
  // stars
  rotate(-PI / 2.5); // rotate the background back to normal
  let numStars = 50;

  colors = ["#6ceded", "#6cb9c9", "#6d85a5"];
  strokeWeight(3);

  // create random sized stars in random locations
  for (let j = 0; j < numStars; j++) {
    let x = random(0, 500);
    let y = random(0, 500);
    let l = random(11, 21);
    stroke(random(colors));

    for (let i = 0; i < l; i += 2) {
      point(x - l / 2 + i, y);
      point(x, y - l / 2 + i);
    }
  }

  // place small stars randomly
  numStars = 100;
  strokeWeight(3);
  for (let j = 0; j < numStars; j++) {
    let x = random(0, 500);
    let y = random(0, 500);
    let l = random(11, 21);
    stroke(random(colors));

    point(x, y);
  }

  //----------------------------------------------------------//
  // moon
  noStroke();

  fill("#ebeace");
  let moonD = random(70, 100);

  let moonX = random(20, 480);
  let moonY = random(20, 300);
  circle(moonX, moonY, moonD);

  // craters in random places on the moon
  fill("#c7c26b");
  let moonR = moonD / 2;

  for (let i = 0; i < 10; i++) {
    let craterD = random(2, 10);

    let craterX = random(
      moonX - (moonR * sqrt(2)) / 2 + 5,
      moonX + (moonR * sqrt(2)) / 2 - 5
    );
    let craterY = random(
      moonY - (moonR * sqrt(2)) / 2 + 5,
      moonY + (moonR * sqrt(2)) / 2 - 5
    );
    circle(craterX, craterY, craterD);
  }

  //----------------------------------------------------------//
  //clouds
  let numClouds = 10;

  for (let i = 0; i < 5; i++) {
    let mainX = random(50, 450);
    let mainY = random(50, 450);

    // draw clouds in one color
    for (let i = 0; i < numClouds; i++) {
      let cloudD = random(20, 40);
      let cloudX = random(mainX - 50, mainX + 50);
      let cloudY = random(mainY - 5, mainY + 5);

      fill("#e5ceeb");
      ellipse(cloudX, cloudY, cloudD, cloudD / 2);

      cloudX = random(mainX - 30, mainX + 30);
      cloudY = random(mainY - 10, mainY);

      fill("#e5ceeb");
      ellipse(cloudX, cloudY, cloudD, cloudD / 2);
    }

    mainX = random(50, 450);
    mainY = random(50, 450);

    // draw clouds in other color
    for (let i = 0; i < numClouds; i++) {
      let cloudD = random(20, 40);
      let cloudX = random(mainX - 50, mainX + 50);
      let cloudY = random(mainY - 5, mainY + 5);

      fill("#fff1f3");
      ellipse(cloudX, cloudY, cloudD, cloudD / 2);

      cloudX = random(mainX - 30, mainX + 30);
      cloudY = random(mainY - 10, mainY);

      fill("#fff1f3");
      ellipse(cloudX, cloudY, cloudD, cloudD / 2);
    }
  }
}
