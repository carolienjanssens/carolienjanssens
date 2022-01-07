let img;
let c; 
let value;
var front;
var rad = 50;
var addheight;
var addwidth;

function setup() {
  img = loadImage('Voll-Web-1280x720-150dpi_DB0196.png');
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  front = createGraphics(windowWidth, windowHeight);
  front.fill(0);
  front.rect(0,0,width,height);
}




function draw() {
  
  var verhältnis = windowWidth/windowHeight;
  noStroke();
  imageMode(CENTER);
  
  if (verhältnis > 1.7){
    addwidth = 70;
  } else {
    addwidth = (windowHeight*(1280/720)-windowWidth);
  }
  
  image(img,width/2,height/2,width+addwidth,(width+addwidth)*(720/1280));
  image(front,width/2,height/2);



  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX,mouseY) < rad) && x > 0 && x < width) {  
        front.set(x,y,color(0,0));
      }
    }
  }
  
  
  function touchStarted(){
  
    for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX,mouseY) < rad) && x > 0 && x < width) {  
        front.set(x,y,color(0,0));
      }
    }
  }
  
}
  
  
  front.updatePixels();
}





