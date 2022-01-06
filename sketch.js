//document.addEventListener("contextmenu", function (e) {
  //      e.preventDefault();
  //  }, false);

let img;

var black;
var alphaC;
var front;
var rad = 30;

var mouseIsDragged = false;

function setup() {
  img = loadImage('Web-2560x1440-150dpi_DB0196.png');
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  black = color(155);
  alphaC = color(0,0);
  front = createGraphics(windowWidth, windowHeight);
  background(255);
  front.fill("black");
  front.rect(0,0,width,height);
}
 
function draw() {
  noStroke();
  image(img,0,0,width,(width/2560)*1440);
  image(front, 0, 0);
  
 // front.line(mouseX,mouseY,pmouseX,pmouseY);
  

for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX, mouseY) < 4*rad) && x > 0 && x < width) {
        front.set(x,y,alphaC);
      }
    }
  }
  front.updatePixels();
}