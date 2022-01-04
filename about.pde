PGraphics front; //fungiert als Maske
PImage backgroundImage;

void setup() {
  size(2560, 1440);
  background(0);
  backgroundImage = loadImage("Web-2560x1440-150dpi_DB0196.png");
  front = createGraphics(width, height);
  colorMode(HSB);
}

void draw() {
  front.beginDraw();
  front.stroke(255); //wird mit 200 verschwommener, Farbe ist nie ersichtlich, bei 10 zu sehr manipuliert
  front.strokeWeight(70);
  front.line(pmouseX,pmouseY,mouseX,mouseY);
  front.endDraw();
  backgroundImage.mask(front);
  image(backgroundImage,0,0); 
  if(mouseButton == LEFT){
    background(random(0,255),255,255);
    front = createGraphics(width, height);
  }
}
