let x = 0;
let y = 0;
let spacing = 20; // adjust the spacing of the shapes
let shapeSize = 15; // adjust the size of the shapes

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}



function draw() {
  // calculate color for the current row based on mouse position
  let rowColor;
  if (y < height / 2) {
    // blue gradient for top half
    let fromColor = color(0, 102, 153);
    let toColor = color(135, 206, 250);
    rowColor = lerpColor(fromColor, toColor, mouseX / width);
    fill(rowColor);
    rect(x, y, shapeSize, shapeSize);
    // randomly add white dots in the blue area
    if (random(1) > 0.9) {
      fill(255);
      ellipse(x + shapeSize / 2, y + shapeSize / 2, 5, 5);
    }
  } else {
    // beige gradient for bottom half
    let fromColor = color(255, 219, 172);
    let toColor = color(242, 198, 122);
    rowColor = lerpColor(fromColor, toColor, (mouseX - width / 2) / (width / 2));
    fill(rowColor);
    rect(x, y, shapeSize, shapeSize);
    // randomly add bird shapes in the beige area
    if (random(1) > 0.1) {
      fill(255);
      let rockSize = random(10, 20);
      let rockX = x + shapeSize / 2;
      let rockY = y + shapeSize / 2 - rockSize / 2;
      triangle(rockX, rockY, rockX - rockSize / 2, rockY + rockSize / 2, rockX + rockSize / 2, rockY + rockSize / 2);
    }
  }

  // move to the next position
  x += shapeSize;
  if (x > width) {
    x = 0;
    y += shapeSize;
  }

  if (y > height) {
    print("done.");
    noLoop();
  }
}
