

var direction = 'right';

var xCor = 500;
var yCor = 10;

var radius = 10;
var hVelocMax = 20;
var hVeloc = 0;
var hAccel = 2;
var hDecel = 1;

var platWidth = 100;
var platX = 450;
var platY = 495;
var platVeloc = 10;
var bottomBoundary = 500;
function setup() { 
  createCanvas(1000, 500);
  frameRate(15);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(10);
  ellipse(xCor,yCor,radius,radius);
  drawPlatform();
  // testCollision();
  updateVelocity();
  movement();
  
}

// function testCollision(){
//   for(var i = 0; i < platWidth; i++) {
//     if() {

//     }
//   }
// }
function gameOver(){

}
function drawPlatform() {
  strokeWeight(10);
  line(platX,platY,platX+platWidth,platY);
  // platY -= platVeloc;
  // if(platY <= -5) {
  //   platX = 450;
  //   platY = 495;
  // }

}
function updateVelocity() {
  xCor += hVeloc;
}
function movement() {
  if (keyIsDown(LEFT_ARROW)) {
    hVeloc -= hAccel;
    if(hVeloc <= -hVelocMax) {
      hVeloc = -hVelocMax;
    }
  } 
  else {
    if (hVeloc < 0) {
      hVeloc += hDecel;
    }
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    hVeloc += hAccel;
    if(hVeloc >= hVelocMax) {
      hVeloc = hVelocMax;
    }
  } 
  else {
    if (hVeloc > 0) {
      hVeloc -= hDecel;
    }
  }
}
