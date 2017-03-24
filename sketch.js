var spot = {
  x : 0,
  y : 210,
};

function setup() {
 resizeCanvas (400, 400);
}

function draw() {
  //sky
 background (96, 179, 213);
 rect (400, 400);
  
  //pavement
  noStroke();
  fill(207, 173,148);
  rect (0, 160, 400, 40);
  
  //pool
  noStroke();
  fill(33, 63, 125);
  rect (0, 200, 400, 10);
  
  //water
  noStroke();
  fill(40, 126,186);
  rect (0, 210, 400, 200);
  
  //house
  noStroke();
  fill(177, 114,99);
  rect (0, 90, 260, 70);
  
  //plants
  noStroke();
  fill(51, 81, 21);
  rect (120, 150, 130, 10);
  
  //window
  noStroke();
  fill(118, 126,139);
  rect (0, 110, 120, 50);
  
  //roof
  noStroke();
  fill(212, 197, 138);
  rect (0, 80, 270, 10);
  
  //splash
  noStroke();
  fill(255, 150);
  ellipse(200, 300, 160, 80);

  //pool line
  strokeWeight (3);
  stroke(205, 200, 46);
  line (0, 200, 400, 200);
  
   //diving board
  noStroke();
  fill(205, 200, 46);
  rect (mouseX, 250, 80, 150);
  
  spot.x = random (300, 100);
  spot.y = random (100, 300);
  fill (255);
  ellipse(spot.x, spot.y, 15, 15);
}