function setup() {
  createCanvas(1800, 1000);
  background(255);
  colorMode(HSB,100);
}

function draw() {
  background(map(mouseX,0,width,60,8),100,map(mouseY,0,height,90,10));
}
