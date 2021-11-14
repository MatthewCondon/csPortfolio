/*------Canvas Variables------*/
/*-----w must be 100 px bigger than h-----*/
var w = 700; //width
var h = w - 100; //height

/*------Other Variables------*/
var fr = 10; // frameRate

var bubble = [];
let x;
let y;
let r = 0;
let c;

var on = false; //boolean lever
var mouseCount = 0;

/*-----For Firetruck Image-----*/
var img;

/*------Color Variables------*/
var rC;
var gC;
var bC;
var colors = ["red", "orange", "yellow", "black"];
var len = colors.length;

/*-----Fire Variables-----*/
var xA = w * 0.771;
var yA = w * 0.807;
var zA = w * 0.842;
var rA = w * 0.9;
var mA = w * 0.864;
var tA = w * 0.828;
var flamesBot1 = [];
var cA;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var exted = false;

var count = 0;


/*-----Functions-----*/
function preload() {
  //image taken from google creative commons license - https://pixabay.com/vectors/fire-truck-hook-and-ladder-emergency-3613560/
  img = loadImage("truck.png");
}

function setup() {
  createCanvas(w, h);
  ext1 = new Ext();
  for (var i = 0; i < w * 0.1; i++) {
    bubble[i] = new Bubble(width / 2, height / 2, random(10, 20));
  }
  rC = random(135, 235);
  gC = random(135, 235);
  bC = random(135, 235);

  for (var b = 0; b < w * 0.071; b++) {
    flamesBot1[b] = new Flame(width / 2, height / 2, random(10, 20));
  }
  // var button = createButton("Reset");
  // button.position(0,h);
}

function draw() {
  background(142, 144, 145);

  scene();

  ext1.show();
  if (mouseIsPressed) on = true;
  // Must hold
  else on = false;

  for (var i = 0; i < flamesBot1.length; i++) {
    flamesBot1[i].move();
  }
  fireFunc();
  extinguish();
  console.log(on);
  if (on) {
    frameRate(fr);
    for (var i = 0; i < bubble.length; i++) {
      bubble[i].move();
      bubble[i].display();
    }
  } else frameRate(100);

  //exted stuff
  if (exted === false) {
    noStroke();
    textSize(30);
    fill(5, 15, 128);
    textFont("Georgia");
    text("Oh no, a fire! Put it out!", w * 0.0714, h * 0.0833);
    text("Use the fire extinguisher on it!", w * 0.0714, h * 0.16);
  } else {
    noStroke();
    textSize(30);
    fill(5, 15, 128);
    textFont("Georgia");
    text("That was a close one...", w * 0.0714, h * 0.0833);
    text("Good job!", w * 0.0714, h * 0.16);
  }

  noStroke();
  rectMode(CORNER);
  if (exted === false) fill(105, 47, 3);
  else fill("black");
  rect(w * 0.7, h * 0.64, w * 0.2571428571, h * 0.0833, 10);

  //reset button
  //   if(exted){
  //     fill(156, 2, 9);
  //     rect(w * 0.7, h * 0.8, w * 0.2571428571, h * 0.0833, 10);
  //     fill("white");
  //     noStroke();
  //     text("RESET",w * 0.76, h * 0.823, w * 0.2571428571);

  // //     rect(w * 0.7, h * 0.8,180,60);

  // //     if(mousePressed && mouseX > w*0.7 && mouseX < w*0.7+w*0.257 && mouseY > h*0.8 && mouseY < h*0.8+h*0.1){
  // //       ;
  // //     }
  //   }

  image(img, w * 0.057, h * 0.666, w * 0.214, h * 0.2);
}

function extinguish() {
  noStroke();
  //rect1
  fill(142, 144, 145, c1);
  rect(w, w * 0.083, w * 0.57, h * 0.166);

  //rect2
  fill(142, 144, 145, c2);
  rect(w, h * 0.26, w * 0.57, h * 0.166);

  //rect3
  fill(142, 144, 145, c3);
  rect(w, h * 0.42, w * 0.57, h * 0.166);

  //rect4
  fill(142, 144, 145, c4);
  rect(w, h * 0.583, w * 0.57, h * 0.166);

  //fade stuff
  frameRate(15);
  if (!exted && mouseIsPressed && mouseX > 250 && mouseX < 500) c1 += 10;
  if (c1 > 150) c2 += 10;
  if (c2 > 150) c3 += 10;
  if (c3 > 150) c4 += 10;
  if (c4 > 255) exted = true;
}

function scene() {
  noStroke();
  fill("green");
  ellipse(h, h * 0.9833, h, h * 0.666);
  rectMode(CORNER);
  rect(0, h * 0.866, w, h);
}

function fireFunc() {
  setInterval(mousePressed, 3000);
  frameRate(fr);
  if (second() % 2 === 0) {
    x = w * 0.757;
    y = w * 0.792;
    z = w * 0.814;
    r = w * 0.885;
    m = w * 0.85;
    t = w * 0.814;
  } else {
    x = h * 0.916;
    y = h * 0.958;
    z = h;
    r = h * 1.066;
    m = h * 1.025;
    t = h * 0.983;
  }

  noStroke();
  fill("orange");
  triangle(w * 0.785, h * 0.666, w * 0.828, h * 0.666, y, h * 0.25);
  fill("red");
  triangle(w * 0.742, h * 0.666, w * 0.8, h * 0.666, x, h * 0.333);
  fill("gold");
  triangle(w * 0.814, h * 0.666, w * 0.871, h * 0.666, z, h * 0.291);
  fill("red");
  triangle(w * 0.864, h * 0.666, w * 0.921, h * 0.666, r, h * 0.416);
  fill("orange");
  triangle(w * 0.842, h * 0.666, w * 0.885, h * 0.666, m, h * 0.166);
  fill("red");
  triangle(w * 0.807, h * 0.666, w * 0.864, h * 0.666, t, h * 0.5);
  fill("gold");
  triangle(w * 0.821, h * 0.666, w * 0.85, h * 0.666, t, h * 0.583);
}

function mousePressed() {
  count++;
}


/*-----Classes-----*/
class Ext {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    rectMode(CENTER);
    noStroke();
    fill("red");
    //body
    rect(mouseX, mouseY, w * 0.0833, h * 0.26, 5);

    //neck
    fill("silver");
    rect(mouseX, mouseY - height * 0.14, w * 0.02, h * 0.02);

    fill("black");
    //on lever
    if (on)
      triangle(
        mouseX - w * 0.0083333,
        mouseY - h * 0.14,
        mouseX - w * 0.0083333,
        mouseY - h * 0.17,
        mouseX - w * 0.06,
        mouseY - h * 0.17
      );
    //off lever
    else
      triangle(
        mouseX - w * 0.0083333,
        mouseY - h * 0.14,
        mouseX - w * 0.0083333,
        mouseY - h * 0.17,
        mouseX - w * 0.06,
        mouseY - h * 0.13
      );

    //spray spot of lever
    rect(
      mouseX - w * 0.0083333,
      mouseY - h * 0.17 + w * 0.008,
      w * 0.03333,
      h * 0.02
    );

    //front part of spray spot
    rect(
      mouseX - w * 0.0083333 + w * 0.0333,
      mouseY - h * 0.17 + h * 0.02 - h * 0.01,
      w * 0.042857,
      h * 0.03333
    );
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x; //x loc
    this.y = y; // y loc
    this.r = r; //radius will be random
  }

  move() {
    this.x = mouseX + w * 0.12 + random(w * 0.0375 * -1, w * 0.375);
    this.y = mouseY - h * 0.155 + random(h * -1 * 0.05, h * 0.05);
  }
  display() {
    //frameRate(fr);
    stroke("black");
    fill("white");
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class Flame {
  constructor(x, y, r, c, cA) {
    this.x = x; //x loc
    this.y = y; // y loc
    this.r = r; //radius will be random
  }

  move() {
    frameRate(10);
    noStroke();
    //fill(colors[len]);
    frameRate(5);
    ellipse(this.x, this.y, this.r, this.r, 5);
    this.x = w * 0.8357 + random(-1 * h * 0.1, h * 0.1);
    this.y = h * 0.1 + random(0, h * 0.475);
  }
}
