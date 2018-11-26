import processing.video.*;

Capture webcam;
int counter;
int fillColor;
color trackColor = color(#000000);
float thres = 15;
float matchX = 0;
float matchY = 0;
float tXL;
float tXR;
float tYL;
float tYR;
int xAngle = 0;
int yAngle = 0;

void setup() {
    size(640, 480);
    webcam = new Capture(this, 640, 480, 30);
    tXL = webcam.width*.1;
    tXR = webcam.width - tXL;
    tYL = webcam.height*.1;
    tYR = webcam.height - tYL;
    textSize(24);
    fillColor = #000000;
    counter = 1;
    webcam.start();
}

void captureEvent(Capture c) {
  webcam.read();
  loadPixels();
}

int count;
void draw() {
  image(webcam, 0, 0, 640, 480);
  checkThresh();
  if(count > 0) {
    fill(color(#f00));
    ellipse(matchX, matchY, 20, 20);
    while(matchX > tXR) {
      xAngle = (xAngle +1)%360;
    text(xAngle, width/2, height/2); 
    }
    while (matchX < tXL) {
      xAngle = (xAngle-1)%360;
    text(xAngle, width/2, height/2);
    }
    while (matchY < tYL) {
      yAngle = (yAngle-1)%360;
    text(yAngle, width/2, height/2+30);
    }
    while (matchY < tYR) {
      yAngle = (yAngle+1)%360;
    text(yAngle, width/2, height/2+30);
    }
  }
  if(mousePressed){
  strokeWeight(10);
    stroke(fillColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
    
  }
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
