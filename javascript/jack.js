//variables
var mouseCount = 0;
var timer = 0;

//functions

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  if (frameCount % 180 === 0) timer++;

  if (timer === 0) title();
  if (timer === 1) jack1();
  if (timer === 2) jack2();
  if (timer === 3) jack3();
  if (timer === 4) jack4();
  if (timer === 5) timer = 0;
}

function title() {
  //pumpkin
  fill(201, 87, 6);
  stroke(184, 77, 2);
  strokeWeight(15);
  ellipse(width / 2, height / 2, 400, 380); //body made of many circles
  ellipse(width / 2, height / 2, 320, 380);
  ellipse(width / 2, height / 2, 220, 380);
  ellipse(width / 2, height / 2, 120, 380);
  ellipse(width / 2, height / 2, 0, 380);

  noStroke();
  fill(102, 49, 11);
  triangle(
    width / 2 - 30,
    height / 5,
    width / 2 + 30,
    height / 5,
    width / 2 - 60,
    height / 6 - 50
  ); //stem

  stroke(184, 77, 2);
  strokeWeight(10);
  //face design
  if (frameCount % 35 === 0)
    //causes flicker in  light
    fill(214, 124, 60);
  else fill(230, 153, 71);

  fill(255);
  textSize(30);
  textAlign(CENTER);
  textFont("Georgia");
  text("Looking for some Jack-O-lantern ", width / 2, height / 2 - 80);
  text("designs this Halloween?", width / 2, height / 2 - 40);
  textSize(50);
  text("Look no further!", width / 2, height / 2 + 120);
}

function jack1() {
  //pumpkin
  fill(201, 87, 6);
  stroke(184, 77, 2);
  strokeWeight(15);
  ellipse(width / 2, height / 2, 400, 380); //body made of many circles
  ellipse(width / 2, height / 2, 320, 380);
  ellipse(width / 2, height / 2, 220, 380);
  ellipse(width / 2, height / 2, 120, 380);
  ellipse(width / 2, height / 2, 0, 380);

  noStroke();
  fill(102, 49, 11);
  triangle(
    width / 2 - 30,
    height / 5,
    width / 2 + 30,
    height / 5,
    width / 2 - 60,
    height / 6 - 50
  ); //stem

  stroke(184, 77, 2);
  strokeWeight(10);
  //face design
  if (frameCount % 35 === 0)
    //causes flicker in  light
    fill(214, 124, 60);
  else fill(230, 153, 71);

  //face
  triangle(
    width / 2 - 40,
    height / 2 + 40,
    width / 2 + 40,
    height / 2 + 40,
    width / 2,
    height / 2 - 40
  ); //nose
  triangle(
    width / 2 - 120,
    height / 2 - 50,
    width / 2 - 60,
    height / 2 - 50,
    width / 2 - 90,
    height / 2 - 120
  ); //left eye
  triangle(
    width / 2 + 120,
    height / 2 - 50,
    width / 2 + 60,
    height / 2 - 50,
    width / 2 + 90,
    height / 2 - 120
  ); // right eye
  arc(width / 2, height / 2 + 80, 240, 140, 0, TWO_PI + PI, PIE); //mouth
  fill(201, 87, 6);
  rect(width / 2 - 70, height / 2 + 120, 20, 20); // left tooth
  rect(width / 2 + 60, height / 2 + 80, 20, 20); // right tooth

  //name
  textAlign(CENTER);
  textFont("Georgia");
  fill(255);
  text("The Classic", width / 2, height / 2 + 280);
}

function jack2() {
  //pumpkin
  fill(201, 87, 6);
  stroke(184, 77, 2);
  strokeWeight(15);
  ellipse(width / 2, height / 2, 400, 380); //body made of many circles
  ellipse(width / 2, height / 2, 320, 380);
  ellipse(width / 2, height / 2, 220, 380);
  ellipse(width / 2, height / 2, 120, 380);
  ellipse(width / 2, height / 2, 0, 380);

  noStroke();
  fill(102, 49, 11);
  triangle(
    width / 2 - 30,
    height / 5,
    width / 2 + 30,
    height / 5,
    width / 2 - 60,
    height / 6 - 50
  ); //stem

  stroke(184, 77, 2);
  strokeWeight(10);
  //face design
  if (frameCount % 35 === 0)
    //causes flicker in  light
    fill(214, 124, 60);
  else fill(230, 153, 71);

  //face
  ellipse(300, 220, 100, 100); //eye
  triangle(
    width / 2 - 20,
    height / 2 + 40,
    width / 2 + 20,
    height / 2 + 40,
    width / 2,
    height / 2
  ); //nose
  arc(width / 2, height / 2 + 80, 240, 190, 0, TWO_PI + PI, PIE); //mouth
  fill(201, 87, 6);
  triangle(210, 450, 250, 460, 220, 420); //bottom-left tooth
  triangle(250, 380, 280, 380, 270, 410); // top-left tooth
  triangle(310, 470, 320, 440, 340, 460); // bottom-right tooth
  triangle(350, 380, 380, 380, 360, 420); // top-right tooth

  //name
  textAlign(CENTER);
  textFont("Georgia");
  fill(255);
  text("The Cyclops", width / 2, height / 2 + 280);
}

function jack3() {
  //pumpkin
  fill(201, 87, 6);
  stroke(184, 77, 2);
  strokeWeight(15);
  ellipse(width / 2, height / 2, 400, 380); //body made of many circles
  ellipse(width / 2, height / 2, 320, 380);
  ellipse(width / 2, height / 2, 220, 380);
  ellipse(width / 2, height / 2, 120, 380);
  ellipse(width / 2, height / 2, 0, 380);

  noStroke();
  fill(102, 49, 11);
  triangle(
    width / 2 - 30,
    height / 5,
    width / 2 + 30,
    height / 5,
    width / 2 - 60,
    height / 6 - 50
  ); //stem

  stroke(184, 77, 2);
  strokeWeight(10);
  //face design
  if (frameCount % 35 === 0)
    //causes flicker in  light
    fill(214, 124, 60);
  else fill(230, 153, 71);

  //face
  ellipse(width / 2 - 80, height / 2 - 80, 80, 80); //left eye
  ellipse(width / 2 + 80, height / 2 - 80, 80, 80); //right eye
  arc(width / 2, height / 2 + 80, 240, 140, 0, PI + PI, PIE); //mouth

  fill(201, 87, 6);
  ellipse(width / 2 - 70, height / 2 - 105, 20, 20); //left pupil
  ellipse(width / 2 + 90, height / 2 - 105, 20, 20); //right pupil

  //name
  textAlign(CENTER);
  textFont("Georgia");
  fill(255);
  text("The Ghoul", width / 2, height / 2 + 280);
}

function jack4() {
  //pumpkin
  fill(201, 87, 6);
  stroke(184, 77, 2);
  strokeWeight(15);
  ellipse(width / 2, height / 2, 400, 380); //body made of many circles
  ellipse(width / 2, height / 2, 320, 380);
  ellipse(width / 2, height / 2, 220, 380);
  ellipse(width / 2, height / 2, 120, 380);
  ellipse(width / 2, height / 2, 0, 380);

  noStroke();
  fill(102, 49, 11);
  triangle(
    width / 2 - 30,
    height / 5,
    width / 2 + 30,
    height / 5,
    width / 2 - 60,
    height / 6 - 50
  ); //stem

  stroke(184, 77, 2);
  strokeWeight(10);
  //face design
  if (frameCount % 35 === 0)
    //causes flicker in  light
    fill(214, 124, 60);
  else fill(230, 153, 71);

  //face
  arc(width / 2 - 80, height / 2 - 150 + 80, 120, 100, 0, TWO_PI + PI, PIE); //left eye
  arc(width / 2 + 80, height / 2 - 150 + 80, 120, 100, 0, TWO_PI + PI, PIE); //left eye
  arc(width / 2, height / 2 + 40, 240, 190, 0, TWO_PI + PI, PIE); //mouth
  noStroke();
  triangle(
    width / 2 - 70,
    height / 2 + 110,
    width / 2 - 50,
    height / 2 + 170,
    width / 2 - 30,
    height / 2 + 120
  ); //bottom left tooth
  triangle(
    width / 2 + 70,
    height / 2 + 110,
    width / 2 + 50,
    height / 2 + 170,
    width / 2 + 30,
    height / 2 + 120
  ); //bottom right tooth

  stroke(184, 77, 2);
  strokeWeight(15);
  fill(201, 87, 6);
  triangle(
    width / 2 - 90,
    height / 2 - 65,
    width / 2 - 70,
    height / 2 - 65,
    width / 2 - 80,
    height / 2 - 55
  ); //left eye pupil
  triangle(
    width / 2 + 90,
    height / 2 - 65,
    width / 2 + 70,
    height / 2 - 65,
    width / 2 + 80,
    height / 2 - 55
  ); //right eye pupil

  //name
  textAlign(CENTER);
  textFont("Georgia");
  fill(255);
  text("The Vampire", width / 2, height / 2 + 280);
}

function mousePressed() {
  mouseCount++;
}
