//floating ball
float x;
float y;
float xFast;
float yFast;
int ballW = 10;
int ballH = 10;
int pWidth = 200;
int pHeight = 50;
int scoreCount = 0;
void setup() {
    size(854, 480);
    xFast = 3.2;
    yFast = 3.2;
    rectMode(CENTER);
    x = random(12, width - 12);
    y = random(12, height/2 - 12);
}

void draw() {
    background(0);
    textSize(10);
    text("Score: " + scoreCount, 20, 40);
    //update positions
    x = x + xFast;
    y = y + yFast;
    fill(255);
    noStroke();
    ellipse(x, y, ballW, ballH);

    if(x >= width - ballW/2 || x <= ballW/2) {
        xFast*=-1;
    }
    if(y < ballH/2) {
        yFast *= -1;
    }
    //paddle hit = yes
    if (y > height - pHeight - 25 && x > mouseX - pWidth/2 && x < mouseX + pWidth/2 ) {
        yFast *= -1;
        scoreCount++;
        pWidth-=5;
        xFast*=1.3;
        yFast*=1.3;
    }
    //paddle not hit
    if(y > height - ballH/2)
    {
        scoreCount = 0;
        x = random(12, width - 12);
        y = random(12, height/2 - 12);
    }
    rect(mouseX, height-25, pWidth, pHeight);
}
