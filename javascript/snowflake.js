var snowFlake;//snowFlake declared globally
var blinker = false;
var mySnow=[];

function setup() {//runner
  createCanvas(900, 400);//new size
  for (let i=0; i<200; i++) {
    mySnow[i]=new SnowFlake();//makes 200 objects, with different attributes for each...dont move yet
  }
}
function draw() {//things happen/move
  background(82,89,95);//background is grey
  makeWall();
  christmasTree();
  presents();
  firePlace();
  makeMessage();

  //make multiple
  for (let i=0; i<mySnow.length; i++) {//fill up array
    mySnow[i].move();
    mySnow[i].display();
  }
  makeWindow();
}

function  makeMessage() {
  if (frameCount % 100 == 0) {
    blinker = !blinker;
  }
  if (blinker) {
    fill(255, 0, 0);
  } else {
    fill(33, 175, 33);
  }
  textSize(50);
  //textFont();
  text("Happy \n Holidays,\nRyan!", 600, 60 );
}
function makeWall(){
  //215.206.177
  stroke(215,206,177);
  rect(0,0,900,400);
  fill(215,206,177);
  rect(370,0,530,400);
  rect(50,300,500,100);
}
function makeWindow() {

  noFill();
  stroke(0, 0, 0);
  strokeWeight(50);
  rect(50, 50, 200, 200);
  //fill(0,0,0);
  //rect(45,45,45);
  stroke(215,206,177);
  strokeWeight(80);
  rect(0, 0, 300, 300);
}

function christmasTree() {
  //tree
  noStroke();
  fill(48, 40, 6);
  rect(450, 300, 50, 100);
  fill(8, 148, 6);
  triangle(375, 300, 475, 175, 575, 300);
  triangle(385, 250, 475, 100, 565, 250);
  triangle(400, 200, 475, 75, 550, 200);
  
  //ornaments
  fill(245,12,12);
  
  
  fill(245,159,12);//orange
  ellipse(460,290,15,15);
  ellipse(484,140,15,15);
  fill(12,20,245);// dark blue
  ellipse(510,280,15,15);
  ellipse(436,157,15,15);
  fill(107,6,6);//marroon
  ellipse(485,232,15,15);
  fill(12,167,245);//light blue
  ellipse(520,245,15,15);
  fill(97,245,12);//lime
  ellipse(500,193,15,15);
  ellipse(430,240,15,15);
  fill(245,12,128);//pink
  ellipse(400,290,15,15);
  ellipse(470,187,15,15);
  
  //star
  fill(246,12,12);
  rect(450,60,50,15);
  rect(467.5,42,15,50);
  fill(246,215,12);
  triangle(460,73.5, 475,35, 491,73.5);
  triangle(460,61.5, 475,100, 491,61.5);
  fill(12,167,245);
  

}
function presents() {
  noStroke();
  fill(229, 43, 43);
  rect(410, 310, 30, 90);
  fill(205, 255, 255);
  rect(424, 310, 2, 90);
  rect(410, 354, 30, 2);

  fill(43, 43, 229);
  rect(500, 350, 50, 50);
  fill(255, 255, 255);
  rect(524, 350, 2, 50);
  rect(500, 374, 50, 2);
}

function firePlace() {
  noStroke();
  fill(108, 108, 124);
  rect(640, 250, 210, 150);
  fill(0, 0, 0);
  ellipse(748, 390, 150, 200);

  fill(134, 101, 12);
  rect(698, 370, 100, 30);

  fill(192, 32, 32); //red
  triangle(730, 370, 750, 290, 765, 370);
  fill(235, 198, 53);//gold
  triangle(701, 370, 729, 310, 745, 370);
  triangle(756, 370, 767, 321, 784, 370);
  fill(236, 168, 8);//orange
  triangle(764, 370, 779, 335, 797, 370);
}

class SnowFlake {
  constructor() {
    this.x = Math.random()*10;
    this.y = Math.random()*300;
    this.r = (Math.random()*10)+5;
    this.speed=(Math.random()*5)+1;
    this.wiggle=(Math.random()*5)-2;
    this.velocity=.5;
    this.transp=255;
  }
  move() {//makes snowflake move
    this.x+=this.wiggle;
  }
 display() {
    if (this.y>-10) {
      this.y+=this.velocity;
    }
    if (this.y>250) {
      this.y+=this.wiggle;
      this.transp=0;
    }
    if (this.y>300) {
      this.y=-5;
    }
    if (this.x>250) {
      this.transp=0;
      this.x=0;
      this.x+=this.wiggle;
    }
    if (this.x>300) {  
      this.x+=this.wiggle;
    }
    if (this.x>50||this.y>300) {
      this.transp=255;
    }
    noStroke();
    fill(255, 255, 255, this.transp);//white snowflake
    ellipse(this.x, this.y, this.r, this.r);//size, width, height; x and y pos
  }
}
