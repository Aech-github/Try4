function setup() {
  createCanvas(1000, 1000);
  background(150,200.130);
  strokeWeight(50);
  stroke('white');
  frameRate(100) ;
 

}

function draw() {
 // declare variables 
  let posX = mouseX;
  let PosY = mouseY;
  // place a dot on the screen
   point( posX,PosY);
  
}