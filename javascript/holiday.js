//hard coded to start... will scale at some point
var mainVar = 600; //width

var length = 1;
var pg;
var s = [];
var speed = 0;
var font;

var twinkles = [];
var x; 
var y; 


//vars for countdown
var dayGoal = 31;
var hourGoal = 23;
var minuteGoal = 59;
var secGoal = 60;

var img; //santa sleigh
var img2; //snowman
var img3; //christmas tree
var img4; //bow

var santaX = 155;//santa variables won't scale
var santaY = 5;

var bellsSound;

function preload() {
  img = loadImage("sleighPic.png");
  img2 = loadImage("snowman.png");
  img3 = loadImage("christmasTree.png");
  img4 = loadImage("ribbon.png");
  // bellsSound = loadSound("bells.mp3");
}

function setup() {
  createCanvas(mainVar, mainVar-200); //height must be 200 less than mainVar value (x)
  background(112, 16, 11);

  for (var i = mainVar*0.9166; i < mainVar; i += mainVar*0.0066) {
    for (var j = mainVar*0.625; j < mainVar*0.6416; j += mainVar*0.0066) {
      push();
      s.push(new Star(i, j));
      pop();
    }
  }
  star1 = new Stars(mainVar*0.0333,mainVar*0.0333);
  star2 = new Stars(mainVar*0.1666,mainVar*0.05);
  star3 = new Stars(mainVar*0.25,mainVar*0.15);
  star4 = new Stars(mainVar*0.2916,mainVar*0.25);
  star5 = new Stars(mainVar*0.1333,mainVar*0.2);
  star6 = new Stars(mainVar*0.1,mainVar*0.1);
  
}
  

function draw() {
  background(112, 16, 11);
  frameRate(100);
  globe = new SnowGlobe(mainVar*0.7833, mainVar*0.4333);
  globe.display1();
  for (var i = 0; i < mainVar*0.05; i++) {
    s[i].display();
  }
  globe.display2();
  globe.showBottom();

  banner();
  makeMessage();
  countdown();
  drawWindow();
  // bellsSound.play();
  ribbon();
}  

function ribbon(){
  rotate(mainVar*0.0833);
  image(img4,mainVar*0.1833,mainVar*0.475,mainVar*0.2166,mainVar*0.2166);
}

function banner() {
  noStroke();
  fill(237, 191, 7);
  rect(0, mainVar*0.0166, width, mainVar*0.2166);
  rect(mainVar*0.0666, 0, mainVar*0.2166, height);

  for (var i = 0; i < width; i += mainVar*0.0166) {
    stroke(196, 157, 2);
    noFill();
    strokeWeight(mainVar*0.0033);
    ellipse(i, mainVar*0.0333, mainVar*0.025, mainVar*0.025);
    ellipse(i, mainVar*0.2166, mainVar*0.025, mainVar*0.025);
  }
  for (var i = 0; i < height; i += mainVar*0.0166) {
    stroke(196, 157, 2);
    noFill();
    strokeWeight(mainVar*0.0033);
    ellipse(mainVar*0.0833, i, mainVar*0.025, mainVar*0.025);
    ellipse(mainVar*0.2666, i, mainVar*0.025, mainVar*0.025);
  }
}

function drawWindow() {
  //window stuff
  fill(64, 63, 62);
  rect(-1*mainVar*0.0166, -1*mainVar*0.0166, mainVar*0.3833, mainVar*0.3666);
  star1.showStars();
  star2.showStars();
  star3.showStars();
  star4.showStars();
  star5.showStars();
  star6.showStars();

  //stars code here


  // //mountain stuff
  // //rock
  // stroke("black");
  // strokeWeight(1);
  // fill(153, 153, 153);
  // triangle(-30, 220,50,220,30,50);
  // triangle(20, 220,100,220,70,90);
  // //snow
  // noStroke();
  // fill("white");
  // triangle(32,70,23,70,30,50);
  // triangle(60,120,80,132,70,90);

  //tree stuff



  //santa stuff
  santaX -= 1;
  santaY -= 0.25;
  if (santaX === -80) { //santa variables won't scale
    santaX = 155;
    santaY = 5;
  }
  image(img, santaX, santaY, mainVar*0.15, mainVar*0.15);
  
  noFill();
  strokeWeight(mainVar*0.05);
  stroke(82, 54, 6);
  rect(-1*mainVar*0.0333, -1*mainVar*0.0333, mainVar*0.4166, mainVar*0.3833);
}

function makeMessage() {
  noStroke();
  textSize(mainVar*0.075);
  if (second() % 2 === 0) fill("red");
  else fill("green");
  // textFont(fontItalic);
  textFont("TheSansMono-LightItalic");
  text("Happy Holidays", mainVar*0.4466, mainVar*0.1166);
  if (second() % 2 === 0) fill("green");
  else fill("red");
  textSize(mainVar*0.0583);
  text("and a Happy New Year!", mainVar*0.4166, mainVar*0.1833);
}

function countdown() {
  fill("white");
  textSize(mainVar*0.075);
  // text("How Long\nUntil 2022?", 190, 320);
  textSize(mainVar*0.0333);
  fill("white");
  text("Countdown\n  To 2022!", mainVar*0.0966, mainVar*0.4166);
  text(dayGoal - day() + " Days", mainVar*0.1216, mainVar*0.5333);
  text(abs(hourGoal - hour()) + " Hours", mainVar*0.115, mainVar*0.5666);
  text(minuteGoal - minute() + " Minutes", mainVar*0.1, mainVar*0.6);
  var secondDiff = 0 - second();
  text(secGoal - second() + " Seconds", mainVar*0.1, mainVar*0.6333);
  // text("Until 2022!",59.5,390)
}

//for snowflakes
class Star {
  constructor(x, y) {
    this.x = random(mainVar*0.6, mainVar*0.95);
    this.y = y;
    
  }
  display() {
    noFill();
    strokeWeight(mainVar*0.0033);
    var transp = 205;
    //while(this.y> 350) transp-=50;
    stroke(255,255,255, transp);
    beginShape();
    //ellipse(this.x, this.y, random(1, 2), random(1, 2));
    triangle(this.x-mainVar*0.00166,this.y+mainVar*0.00166, this.x+mainVar*0.00166,this.y+mainVar*0.00166, this.x,this.y-mainVar*0.00166);
    triangle(this.x-mainVar*0.00166,this.y-mainVar*0.00166, this.x+mainVar*0.00166,this.y-mainVar*0.00166, this.x,this.y+mainVar*0.00166);
    var speed = random(mainVar*0.00166, mainVar*0.0066);
    this.y += speed;
    if (this.y > mainVar*0.5833) this.y = random(mainVar*0.2916, mainVar*0.3183);
    // this.x+=speed;
    // if(this.x > 650) this.x=random(400,401);
    endShape();
  }
}

class SnowGlobe {
  constructor(x, y) {
    this.x = x
    this.y = y;
  }
  display1() {
    fill(176, 206, 255);
    strokeWeight(mainVar*0.0166);
    stroke(173, 173, 173);
    ellipse(this.x, this.y, mainVar*0.35, mainVar*0.35);
    image(img3, this.x - mainVar*0.1333, this.y - mainVar*0.0833, mainVar*0.2083, mainVar*0.25);
    image(img2, this.x, this.y + mainVar*0.05, mainVar*0.1, mainVar*0.1166);
  }

  display2() {
    stroke(112, 16, 11);
    noFill();
    strokeWeight(mainVar*0.07);
    ellipse(this.x, this.y, 250, 250);
  }

  showBottom() {
    stroke(189, 146, 60);
    strokeWeight(mainVar*0.0066);
    fill(138, 72, 10);
    rect(this.x - mainVar*0.1633, this.y + mainVar*0.1583, this.x - mainVar*0.4583, this.y + mainVar*0.1416, mainVar*0.0133);

    fill(189, 146, 60);
    noStroke();
    rect(this.x - mainVar*0.2, this.y + mainVar*0.175, this.x - mainVar*0.39, this.y - mainVar*0.4666, mainVar*0.0133);
    rect(this.x - mainVar*0.18, this.y + mainVar*0.2583, this.x - mainVar*0.425, this.y - mainVar*0.4666, mainVar*0.0133);

    rectMode(CENTER);
    stroke(189,146,60);
    fill("black");
    textSize(mainVar*0.0583);
    text("2021", this.x-mainVar*0.0583, this.y+mainVar*0.2183)
    rectMode(CORNER);
  }
}

class Stars{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  showStars(x,y){
    noStroke();
    if(second()%2===0) fill(212, 187, 2);
    else fill(224, 199, 9);
    beginShape();
    vertex(this.x,this.y-mainVar*0.0083);//1
    vertex(this.x-mainVar*0.0083,this.y+mainVar*0.0083);//2
    vertex(this.x-mainVar*0.0208,this.y+mainVar*0.0083);//3
    vertex(this.x-mainVar*0.0108,this.y+mainVar*0.0191);//4
    vertex(this.x-mainVar*0.015,this.y+mainVar*0.035);//5
    vertex(this.x,this.y+mainVar*0.025);//6
    vertex(this.x+mainVar*0.015,this.y+mainVar*0.035);//7
    vertex(this.x+mainVar*0.0108,this.y+mainVar*0.0191);//8
    vertex(this.x+mainVar*0.0208,this.y+mainVar*0.0083);//9
    vertex(this.x+mainVar*0.0083,this.y+mainVar*0.0083);//10
    endShape();
  }
}