var hr,mn,sc;
var hrAngle,mnAngle,scAngle;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);


}

function draw() {
  background(255,255,255);
  stroke(255,0,0);
  strokeWeight(7);
  line(800,800,50,0);  
  drawSprites();
}