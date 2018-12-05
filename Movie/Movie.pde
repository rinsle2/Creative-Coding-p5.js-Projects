/*
Initially was P3D, P3D decided to be blegh, and now it rotates according to your motion :)
*/
import processing.video.*;

Capture webcam;
int counter = 0;
int fillColor = 0;
color trackColor = color(#00ff00);
float thres = 150;
float matchX = 0;
float matchY = 0;
float tXL = 0;
float tXR = 0;
int angle = 0;

void setup() {
    size(640, 480);
    webcam = new Capture(this, 640, 480, 30);
    tXL = webcam.width*.1;
    tXR = webcam.width - tXL;
    textSize(24);
    fillColor = #000000;
    counter = 1;
    webcam.start();
}

void captureEvent() {
  webcam.read();
  loadPixels();
}

int count = 0;
void draw() {
  count = 0;
  background(0);
  image(webcam, 0, 0, 640, 480);
  checkThresh();
  if(count > 0) {
    fill(color(#ff0000));
    ellipse(matchX, matchY, 20, 20);
    if(matchX > tXR) {
      angle = (angle + 1)%360;
    }
  if(matchX < tXR) {
    angle = (angle - 1)%360;
  }
  }
  if(mousePressed){
  strokeWeight(10);
    stroke(fillColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
    
  }
  rotate(angle);
}
void checkThresh() {
  for(int x = 0;x<webcam.width;x++)
    for(int y = 0;y<webcam.height;y++) {
      int l = x+(y*webcam.width);
      color curColor = webcam.pixels[l];
      float r1 = red(curColor);
      float b1 = blue(curColor);
      float g1 = green(curColor);

      float r2 = red(trackColor);
      float b2 = blue(trackColor);
      float g2 = green(trackColor);

      float diff = dist(r1, g1, b1, r2, g2, b2);
      if(diff <thres) {
        matchX = x;
        matchY = y;
        count++;
      }
    }
}

void keyPressed() {
  if(key == 't'|| key == 'T') {
    filter(THRESHOLD);
  }
  if(key == 'b' || key == 'B') {
    filter(BLUR);
  }
  if(key == 'p'|| key == 'P') {
    filter(POSTERIZE, 2);
  }
  if(key == 'i'|| key == 'I') {
    filter(INVERT);
  }
  if(key == 'e'|| key == 'E') {
    filter(ERODE);
  }
  if(key == 'd'|| key == 'D') {
    filter(DILATE);
  }
  if(key == 'g'|| key == 'G') {
    filter(GRAY);
  }
  if(key == 'r' || key == 'R') {
    tint(255, 0, 0);
  }
  
  if(key == 's'|| key == 'S') {
    saveFrame("saves/filtered" + counter + ".png");
    counter++;
    delay(1000);
  }
}
