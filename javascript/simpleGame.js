//hard coded to start... will scale once figured out
var w = 800;
var h = w;

var lasers = [];
var alienShips = [];
var alienLasers = [];

var ufo;

var x = w * 0.5;
var y = h * 0.9625;

var xA;
var yA;
var rA;
var xDir = 0;

var rB;
var gB;
var bB;

var lx; //tracks location of laser
var ly;

var goalX1;
var goalY1;
var goalX2;
var goalY2;
var goalX3;
var goalY3;
var goalX4;
var goalY4;
var goalX5;
var goalY5;

var ship1Hit = false;
var ship2Hit = false;
var ship3Hit = false;
var ship4Hit = false;
var ship5Hit = false;

var count = 0;

var score = 0;
var win = false;

var length = 1;
var pg;
var s = [];

var song;
var boomNoise;
var lost;
var won;
var back;
var laserSound;

function preload() {
  //song = loadSound('150.wav');
  boomNoise = loadSound('explosion.wav');
  lost = loadSound('YODA3.wav');
  won = loadSound('chewie-1.wav');
  back = loadSound('SCARYBEL.wav')
  laserSound = loadSound('laser.wav');
}

function setup() {
  createCanvas(w, h);
  ufo = new Ship(x, y);

  for (var i = 0; i < 5; i++) {
    alienShips[i] = new AlienShip(
      i * (w * 0.1875) + w * 0.11857,
      h * 0.25,
      h * 0.0375
    );
  }

  for (var i = 0; i < 2000; i += 4) {
    for (var j = 0; j < 1000; j +=40) {
      push();
      //translate(width / 2, height / 2);
      //rotate(0.5);
      s.push(new Star(i, j));
      pop();
    }
  }

  // resetSketch();
  // var button = createButton("Reset");
  // button.mousePressed(resetSketch);
}

function draw() {
  //song.play();
  //back.play();
  setPlanet(20,180,240);

  if (frameCount % 60 === 0) score -= 10;

  fill("black");
  textSize(w*0.06);
  textFont("Georgia");
  text("Score: " + score, w * 0.09375, w * 0.09375);
  textSize(w*0.03);
  text(
    "Hit the Tie Fighters in the right spot to get even more points!",
    w * 0.09375,
    w * 0.125
  );
  text("Score 100 points to win!", w * 0.09375, w * 0.15625);
  ufo.display();
  ufo.move();
  fill("black");
  textSize(w * 0.05);
  if (
    ship1Hit &&
    ship2Hit &&
    ship3Hit &&
    ship4Hit &&
    ship5Hit &&
    score >= 100
  ) {
    text("You Win!", w * 0.425, w * 0.5);
    win = true;
    frameRate(0);
    won.play();
  }
  if (ship1Hit && ship2Hit && ship3Hit && ship4Hit && ship5Hit && score < 100) {
    text("You Lose!", w * 0.425, w * 0.5);
    win = false;
    frameRate(0);
    lost.play();
  }

  for (var i = 0; i < 100; i++) {
    s[i].display();
  }

  for (var i = 0; i < lasers.length; i++) {
    lasers[i].show();
    lasers[i].move();
    lx = lasers[i].x;
    ly = lasers[i].y;
    ly += w * 0.375;
    //console.log(ly);
  }

  for (var i = 0; i < 5; i++) {
    alienShips[0].show1();
    alienShips[1].show2();
    alienShips[2].show3();
    alienShips[3].show4();
    alienShips[4].show5();

    if (second() % 2 === 1) xDir = 1.00001;
    else xDir = -1.0001;
    alienShips[i].move();
    //variables to track x ships x and y loc
    goalX1 = alienShips[0].x;
    goalY1 = alienShips[0].y;
    goalX2 = alienShips[1].x;
    goalY2 = alienShips[1].y;
    goalX3 = alienShips[2].x;
    goalY3 = alienShips[2].y;
    goalX4 = alienShips[3].x;
    goalY4 = alienShips[3].y;
    goalX5 = alienShips[4].x;
    goalY5 = alienShips[4].y;
  }

  //now a bunch of if statements
  if (lx > goalX1 - 2 && lx < goalX1 + 2 && ly > goalY1) {
    score = score + 10;
    ship1Hit = true;
    alienShips[0].boom();
  }
  if (lx > goalX2 - 2 && lx < goalX2 + 2 && ly > goalY2) {
    score = score + 10;
    ship2Hit = true;
    alienShips[1].boom();
  }
  if (lx > goalX3 - 2 && lx < goalX3 + 2 && ly > goalY3) {
    score = score + 10;
    ship3Hit = true;
    alienShips[2].boom();
  }
  if (lx > goalX4 - 2 && lx < goalX4 + 2 && ly > goalY4) {
    score = score + 10;
    ship4Hit = true;
    alienShips[3].boom();
  }
  if (lx > goalX5 - 2 && lx < goalX5 + 2 && ly > goalY5) {
    score = score + 10;
    ship5Hit = true;
    alienShips[4].boom();
  }
}

/*
function resetSketch(){
    ufo = new Ship(x, y);

  for (var i = 0; i < 5; i++) {
    alienShips[i] = new AlienShip(
      i * (w * 0.1875) + w * 0.11857,
      h * 0.25,
      h * 0.0375
    );
  }
}
*/

function setPlanet(r, g, b) {
  rB = r;
  gB = g;
  bB = b;
  background(r, g, b);
}

/*
function frameCheck(){
  if(frameCount%2===0){
    var shots = new Laser(alienShips[i].x,alienShips[i].y+5);
    alienLasers.push(shots);
  }
}
*/

function keyPressed() {
  if (key === " ") {
    var shot = new Laser(x, ufo.y - w * 0.15);
    lasers.push(shot);
    laserSound.play();
  }
}

/* function alienShoot(){
  if(second()%2 === 0){
    for(var i = 0; i < alienShips.length; i++){
      var alienShot = new Laser(alienShips[i].x,alienShips[i].y-10);
      alienLasers.push(alienShot);
    }
  }
}

*/

class Ship {
  //will make a UFO at bottom of screen
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  display() {
    noStroke();
    
    fill("lime");
    rect(x-14,y-18,8,30,5);
    rect(x+6,y-18,8,30,5);
    
    fill("black");
    rect(x-14,y-5,8,10);
    rect(x+6,y-5,8,10);
    
    
    fill("grey");
    rect(x - w * 0.01, y - w * 0.11875, w * 0.02, w * 0.1125, w * 0.00625);

    fill("red");
    rect(x - w * 0.01, y - w * 0.11875, w * 0.02, w * 0.01875, w * 0.00625);

    fill(168);
    rect(x - w * 0.00625, y - w * 0.08125, w * 0.0125, w * 0.03125);

    fill("blue");
    ellipse(x, y - w * 0.03125, w * 0.0125, w * 0.0125);

    fill("grey");
    rect(x - w * 0.05, y - w * 0.025, w * 0.1, w * 0.01875, w * 0.0025);

    fill("grey");
    rect(x - w * 0.05, y - w * 0.0625, w * 0.00625, w * 0.05, w * 0.00625);
    rect(x + w * 0.04375, y - w * 0.0625, w * 0.00625, w * 0.05, w * 0.00625);

    fill("gold");
    rect(x - w * 0.05, y - w * 0.0625, w * 0.00625, w * 0.0125, w * 0.00625);
    rect(x + w * 0.04375, y - w * 0.0625, w * 0.00625, w * 0.0125, w * 0.00625);
  }
  move() {
    if (keyIsDown(LEFT_ARROW)) x -= w * 0.00875;
    {
      if (x < -5) x = w;
    }
    if (keyIsDown(RIGHT_ARROW)) x += w * 0.00875;
    {
      if (x > w + 5) x = 0;
    }
  }
}

class Laser {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    fill("lime");
    noStroke();
    ellipse(this.x, this.y, w * 0.00625, w * 0.025);
  }
  move() {
    this.y = this.y - w * 0.0625;
  }
  moveDown(){
    this.y = this.y + w*0.01875;
  }
}

class AlienShip {
  constructor(xA, yA, rA) {
    this.x = xA;
    this.y = yA;
    this.r = rA;
    this.xDir = 0;
  }
  show1() {
    if (ship1Hit === false) {
      noStroke();
      fill("grey");
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      fill(33, 38, 35);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.03125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );

      fill("grey");
      ellipse(this.x, this.y, this.r, this.r);
      fill(63, 66, 64);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    } else {
      noStroke();
      fill(rB, gB, bB);
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.3125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      ellipse(this.x, this.y, this.r, this.r);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    }
  }
  show2() {
    if (ship2Hit === false) {
      noStroke();
      fill("grey");
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      fill(33, 38, 35);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.03125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );

      fill("grey");
      ellipse(this.x, this.y, this.r, this.r);
      fill(63, 66, 64);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    } else {
      noStroke();
      fill(rB, gB, bB);
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.3125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      ellipse(this.x, this.y, this.r, this.r);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    }
  }
  show3() {
    if (ship3Hit === false) {
      noStroke();
      fill("grey");
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      fill(33, 38, 35);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.03125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );

      fill("grey");
      ellipse(this.x, this.y, this.r, this.r);
      fill(63, 66, 64);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    } else {
      noStroke();
      fill(rB, gB, bB);
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.3125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      ellipse(this.x, this.y, this.r, this.r);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    }
  }
  show4() {
    if (ship4Hit === false) {
      noStroke();
      fill("grey");
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      fill(33, 38, 35);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.03125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );

      fill("grey");
      ellipse(this.x, this.y, this.r, this.r);
      fill(63, 66, 64);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    } else {
      noStroke();
      fill(rB, gB, bB);
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.3125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      ellipse(this.x, this.y, this.r, this.r);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    }
  }
  show5() {
    if (ship5Hit === false) {
      noStroke();
      fill("grey");
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      fill(33, 38, 35);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.03125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );

      fill("grey");
      ellipse(this.x, this.y, this.r, this.r);
      fill(63, 66, 64);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    } else {
      noStroke();
      fill(rB, gB, bB);
      rect(this.x - w * 0.04375, this.y - w * 0.00625, w * 0.0875, w * 0.0125);
      rect(
        this.x - w * 0.04375,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      rect(
        this.x + w * 0.3125,
        this.y - w * 0.05,
        w * 0.0125,
        w * 0.1,
        w * 0.00375
      );
      ellipse(this.x, this.y, this.r, this.r);
      ellipse(this.x, this.y, this.r - w * 0.0125, this.r - w * 0.0125);
    }
  }
  move() {
    this.x += xDir;
  }
  boom() {
    boomNoise.play();
    fill("red");
    ellipse(this.x, this.y, w * 0.15, w * 0.15);
    fill("yellow");
    ellipse(this.x, this.y, w * 0.1, w * 0.1);
    fill("orange");
    ellipse(this.x, this.y, w * 0.05, w * 0.05);
    fill("red");
    ellipse(this.x, this.y, w * 0.025, w * 0.025);
  }
}

class Star {
  constructor(x, y) {
    this.x = random(width);
    this.y = y;
  }
  display() {
    strokeWeight(5);
    stroke(255);
    // if(second()%2===0) stroke(255);
    // else (stroke(rB, gB, gB));
    beginShape();
    push();
    var lR = random(1,6);
    ellipse(this.x, this.y, lR, lR);
    this.y+=1;
    
    if(this.y===height) this.y=0;
    
    pop();
    endShape();
  }
}
