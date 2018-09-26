//Static Variables
var canvas;
//HTML and elements
var title;
var greet;
var user;
var text;
var firstOption;
var secondOption;
var thirdOption;
var backToStart;
//User Inputs
var userInput;
//Item checkers
var hasPowerKey;
var hasDoorKey;
var firstOpened;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", "-1");
    begin();
}

function begin() {
    greet = createElement('h1', "Welcome to the Twine! Enter your name to get started.");
    createElement("br");
    userInput = createInput("Type your name here");
    userInput.changed(storyStart);
}

function storyStart() {
    user = createElement("h1", userInput.value());
    userInput.hide();
    greet.hide()
    title = createElement("h1",", Wake up");
    text = createElement('h4', "You wake up in a room. You see a door in front of you and three walls. Your back hurts, investigate?");
    createElement("br");
    firstOption = createP("Get up.");
    secondOption = createP("Check under the covers");
    hasDoorKey = false;
    hasPowerKey = false;
    firstOpened = true;
    firstOption.mousePressed(exploreRoom);
    secondOption.mousePressed(examineBed);
}

function exploreRoom() {
    user.hide();
    title.html("The Room");
    text.html("You get up out of the bed, and notice a glint under the covers.\nYou notice on the wall to yoor left a box, connected to a light in the ceiling.\nThere is also a door.  What do you do?");
    createElement("br");
    firstOption.html("Investigate the bed");
    secondOption.html("Investigate the box");
    thirdOption.createP("Investigate the door");
    firstOption.mousePressed(examineBed);
    secondOption.mousePressed(examineBox);
    thirdOption.mousePressed(examineDoor);
}

function examineBed() {
    if(!hasPowerKey) {
        title.html("The Bed");
        text.html("You notice a glint as you push aside the covers, pick it up or leave the bed?");
        createElement("br");
        firstOption.html("Grab the key");
        secondOption.html("Leave the bed");
        firstOption.mousePressed(setPowerKey);
        secondOption.mousePressed(exploreRoom);
    }
    else {
        title.html("The Bed");
        text.html("You see nothing as you push aside the covers, maybe check somewhere else.");
        createElement("br");
        firstOption.hide();
        secondOption.html("Leave the bed");
        secondOption.mousePressed(exploreRoom);
        
    }

}

function setPowerKey() {
    hasPowerKey = true;
    examineBed();
}

function examineBox() {
    if(!hasPowerKey) {
        title.html("The Power Box");
        text.html("It's a power box and it is locked.  The key must be somewhere...");
        createElement("br");
        firstOption.html("");
        secondOption.html("Explore elsewhere");
        secondOption.mousePressed(exploreRoom);
    }
    else if(!hasDoorKey && firstOpened) {
        title.html("The Power Box");
        text.html("You insert the key and the box creaks open.  Entangled within the wires is another key.  Grab it?");
        createElement("br");
        firstOption.html("Grab the key");
        secondOption.html("Explore the Room");
        firstOption.mousePressed(setDoorKey);
        secondOption.mousePressed(firstOpenedExplore);
        
    }
    else if(!hasDoorKey && !firstOpened) {
        title.html("The Power Box");
        text.html("The box is wide open.  Entangled within the wires is another key.  Grab it?");
        createElement("br");
        firstOption.html("Grab the key");
        secondOption.html("Explore the Room");
        firstOption.mousePressed(setDoorKey);
        secondOption.mousePressed(exploreRoom);
    }
    else {
        title.html("The Power Box");
        text.html("The box is wide open.  The wires are all entangled with each other");
        createElement("br");
        firstOption.html("");
        secondOption.html("Explore the Room");
        secondOption.mousePressed(exploreRoom);
    }

}

function firstOpenedExplore () {
    firstOpened = false;
    exploreRoom();
}
function setDoorKey() {
    hasDoorKey = true;
    examineBox();
}
function examineDoor() {
    if(!hasDoorKey) {
        title.html('The Old Door');
        text.html('It is locked, explore elsewhere.');
        firstOption.html("Turn around")
    }
}
function windowResized() {
    canvas
}

function mousePressed(variable) {
    variable();
}