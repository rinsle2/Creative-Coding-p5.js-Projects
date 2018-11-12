//Static Variables
var canvas;
//HTML and elements
var title;
var greet;
var user;
var text;
var firstOption;
var secondOption;
<<<<<<< HEAD
var thirdOption;
=======
var backToStart;
>>>>>>> edfe288a0c5f62e45483edfe2a26512cac72a8cc
//User Inputs
var userInput;
var numberInput;
//Item checkers
var hasPowerKey;
var hasDoorKey;
var firstOpened;
var numbersPaper;
var bed;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", "-1");
    hasDoorKey = false;
    hasPowerKey = false;
    firstOpened = true;
    isHidden = false;
    numbersPaper = false;
    bed = false;
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
    title = createElement("h1",", Wake up");
    userInput.hide();
    greet.hide();
    text = createElement('h4', "You wake up in a room. You see a door in front of you and three walls. Your back hurts, investigate?");
    createElement("br");
    firstOption = createButton("Get up.");
    secondOption = createButton("Check under the covers");
<<<<<<< HEAD
    hasDoorKey = false;
    hasPowerKey = false;
    firstOpened = true;
=======
>>>>>>> edfe288a0c5f62e45483edfe2a26512cac72a8cc
    firstOption.mousePressed(exploreRoom);
    secondOption.mousePressed(examineBed);
}

function exploreRoom() {
    user.hide();
    title.html("The Room");
    text.html("You get up out of the bed, and notice a glint under the covers.\nYou notice on the wall to your left a box, connected to a light in the ceiling.\nThere is also a door.  What do you do?");
    createElement("br");
    if(bed) {
        firstOption.show();
        firstOption.html("Investigate the door");
        firstOption.mousePressed(examineDoor);
    }
    else {
        firstOption.show();
        firstOption.html("Investigate the bed");
        firstOption.mousePressed(examineBed);
    }
    secondOption.html("Investigate the box");
<<<<<<< HEAD
    thirdOption = createButtona("Investigate the door");
    firstOption.mousePressed(examineBed);
=======
>>>>>>> edfe288a0c5f62e45483edfe2a26512cac72a8cc
    secondOption.mousePressed(examineBox);
}

function examineBed() {
    thirdOption.hide();
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
        bed = true;
        secondOption.mousePressed(exploreRoom);
    }

}

function setPowerKey() {
    hasPowerKey = true;
    examineBed();
}

function examineBox() {
    thirdOption.hide();
    if(!hasPowerKey) {
        title.html("The Power Box");
        text.html("It's a power box and it is locked.  The key must be somewhere...");
        createElement("br");
        firstOption.hide();
        secondOption.html("Explore elsewhere");
        secondOption.mousePressed(exploreRoom);
    }
    else if(!numbersPaper && firstOpened) {
        if(isHidden) {
            firstOption.show();
        }
        title.html("The Power Box");
        text.html("You insert the key and the box creaks open.  Entangled within the wires is a paper.  Grab it?");
        createElement("br");
        firstOption.html("Grab the paper");
        secondOption.html("Explore the Room");
        firstOption.mousePressed(setNumbersPaper);
        secondOption.mousePressed(firstOpenedExplore);
        
    }
    else if(!numbersPaper && !firstOpened) {
        title.html("The Power Box");
        text.html("The box is wide open.  Entangled within the wires is a paper.  Grab it?");
        createElement("br");
        firstOption.html("Grab the paper");
        secondOption.html("Explore the Room");
        firstOption.mousePressed(setNumbersPaper);
        secondOption.mousePressed(exploreRoom);
    }
    else {
        title.html("The Power Box");
        text.html("The box is wide open.  The wires are all entangled with each other");
        createElement("br");
        firstOption.hide();
        secondOption.show();
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
}

function setNumbersPaper() {
    numbersPaper = true;
    title.html("The Paper");
    text.html("Numbers: 8679");
    secondOption.hide();
    firstOption.html("done writing");
    firstOption.mousePressed(examineBox);
}
function enterCode() {
    firstOption.hide();
    secondOption.hide();
    title.html("The combination lock");
    text.html("Enter the code please:\n");
    numberInput = createInput("Enter the code");
    numberInput.changed(checker);
}

function checker() {
    numberInput.hide();
    var numbers = numberInput.value();
    if(numbers == "8679") {
        escaped();
    }
    else {
        var wrong = createP("Wrong numbers.");
        firstOption.show();
        secondOption.show();
        wrong.hide();
        examineDoor();
    }
}
function examineDoor() {
<<<<<<< HEAD
    thirdOption.hide();
    if(!hasDoorKey) {
        title.html('The Old Door');
        text.html('It is locked, explore elsewhere.');
        firstOption.html("Turn around");
        firstOpened.mousePressed(exploreRoom);
    }
    else {
        title.html('The door swings open, you are free to go');
        firstOption.hide();
        secondOption.hide();
    }
}
function windowResized() {
    canvas
}
=======
    if(!numbersPaper) {
        title.html('The Old Door');
        text.html('It is locked, there\'s a combination lock. You can either enter it or explore elsewhere.');
        firstOption.show();
        secondOption.html('Enter code');
        firstOption.html("Turn around");
        firstOption.mousePressed(exploreRoom);
        secondOption.mousePressed(enterCode);
    }
    else {
        firstOption.hide();
        secondOption.hide();
        enterCode();
    }
}

function escaped() {
    title.html("You escaped!");
    text.html("Now go home.");
    var anotherGo = createButton("Replay?");
    anotherGo.show();
    anotherGo.mousePressed(restart);
} 

function restart () 
{
location.reload(true);
}
>>>>>>> edfe288a0c5f62e45483edfe2a26512cac72a8cc
