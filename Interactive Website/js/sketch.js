//Static Variables
var canvas;
//HTML and elements
var title;
var user;
var text;
var firstOption;
var secondOption;
var backToStart;
//User Inputs
var userInput;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", "-1");
    begin();
}

function begin() {
    title = createElement('h1', "Welcome to the Twine!");
    text = createElement('p', "Please enter your name to get started");
    createElement("br");
    userInput = createInput("Type your name here");
    userInput.changed(storyStart);
}

function storyStart() {
    userInput.hide();
    title.html("Wake up, ");
    user = createElement("h1", userInput.value());
    text.html('You wake up in a room. You see a door in front of you and three walls. Your back hurts, investigate?');
    createElement("br");
    firstOption = createP("Get up.");
    secondOption = createP("Check under the covers");

    firstOption.mousePressed(exploreRoom);
    secondOption.mousePressed(examineBed);
}

function exploreRoom() {
    
}
function windowResized() {
    canvas
}