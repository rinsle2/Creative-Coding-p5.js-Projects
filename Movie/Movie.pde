import processing.video.*;

Capture webcam;

void setup() {
    size(1280, 720);
    webcam = new Capture(this, 1280, 720, "Logitech Webcam c930e", 30);
    webcam.start();
}

void captureEvent(Capture c) {
  webcam.read();
}

void draw() {
  image(webcam, 0, 0);
}

void keyPressed() {
  if(key == 't') {
    filter(THRESHOLD);
  }
  if(key == 'b') {
    filter(BLUR);
  }
  if(key == 'p') {
    filter(POSTERIZE, 7);
  }
  if(key == 'i') {
    filter(INVERT);
  }
}
