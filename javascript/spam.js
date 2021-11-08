var x;
var y;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  can();
}

function can() {
  rectMode(CENTER);
  fill("gold");
  rect(width / 2, height / 2, 300, 200);
  fill("blue");
  rect(width / 2, height / 2, 300, 180);

  textSize(50);
  fill("gold");
  text("SPAM", width / 3, 170);

  fill("tan");
  rect(width / 2, height / 2, 190, 30);
  fill("white");
  ellipse(width / 3 + 10, height / 2 + 20, 70, 10);
  ellipse(width / 3 + 110, height / 2 + 20, 70, 10);
  fill("red");
  ellipse(width / 2, height / 2 + 32, 140, 20);
  fill("brown");
  rect(width / 2, height / 2 + 50, 200, 30);
  fill("green");
  rect(width / 2, height / 2 + 60, 190, 10);
  fill("tan");
  rect(width / 2, height / 2 + 70, 190, 20);
}
