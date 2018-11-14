import processing.video.*;

Capture webcam;

void setup() {
    size(640, 480);
    webcam = new Capture(this, 640, 480, "Logitech c930e", 30);
    webcam.start();
}

void captureEvent(Capture c) {
  webcam.read();
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
