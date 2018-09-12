//setup: only runs once
int fillColor;
int counter;
void setup(){
  size(displayWidth, displayHeight);
  background(#ffffff);
  fillColor = #000000;
  counter = 0;
}

//draw: an infinite loop
void draw()
{
  for(int i = 0;i<5;i++)
  {
    rect(1*i, 0, 20, 5);
    fill(fillColor);
  }
  //Mouse Pressed means a radial drawing to the center of the canvas
  if(mousePressed){
  strokeWeight(10);
    stroke(fillColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
    
  }
  //changing colors
  
  //Black
  if(counter == 0) {
    fillColor = #000000;
  }
  //Green
  if(counter == 1){
    fillColor = #00ff00;
  }
  //Red
  if(counter == 2){
    fillColor = #ff0000;
  }
  //Blue
  if(counter == 3){
    fillColor = #0000ff;
  }
  //Cyan
  if(counter == 4){
    fillColor = #00ffff;
  }
  //Yellow
  if(counter == 5){
    fillColor = #ffff00;
  }
}
//Different keys do different things
void keyPressed()
{
  //pressing p saves the image
  if(key == 'p')
  {
    save("image.png");
  }
  if(key == 'e' || key == 'E') {
    fillColor = #FFFFFF;
  }
  //Cycle Through the Colors
  //  Up
  if(key == '+' || key == '=')
  {
    counter++;
    if(counter >= 6) {
      counter = 0;
    }
  }
  //  Down
  if(key == '-')
  {
    counter--;
    if(counter <= -1) {
      counter = 5;
    }
  }
  //Set the color manually
  if(key == '1')
  {
    counter = 0;
  }
  if(key == '2')
  {
    counter = 1;
  }
  if(key == '3')
  {
    counter = 2;
  }
  if(key == '4')
  {
    counter = 3;
  }
  if(key == '5')
  {
    counter = 4;
  }
  if(key == '6')
  {
    counter = 5;
  }
  //Clear the canvas with c
  if(key == 'c'){
    background(#FFFFFF);
  }
}
