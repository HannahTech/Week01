/*
      Assignment 05 - Catch the bird

      Author: Hengameh Khajehpour 301122261
      Date:  April 2021

      Filename: Assignment05.js

*/

// Create the canvas for the game to display in
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 650;
document.getElementById("game").appendChild(canvas);

// Load the background image
var brExist = false;
var brImage = new Image();

// show the background image
brImage.onload = function () {
	brExist = true;
};
brImage.src = "images/Jungle.jpg";

// Load bird image
var birdExist = false;
var birdImage = new Image();

// Show bird image
birdImage.onload = function () {
	birdExist = true;
};
birdImage.src = "images/Bird.png";

// Game objects
var bird = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
};

var score = 0;
var speed = 4000;
var interval;

//Get the position of the current mouse
var posX;
var posY;

//Mouse Position
function mousePos() {

	canvas.addEventListener("mousedown", onMouseDown);

	function onMouseDown(event) {
		posX = event.offsetX;
		posY = event.offsetY;
	}
}

//Move randomely the bird's position
var birdPos = function () {
	bird.x = Math.floor(Math.random() * (canvas.width - 155));
	bird.y = Math.floor (Math.random() * (canvas.height - 100));
    render();
}

//Canvas drawImage() Method
var render = function () {
	if (brExist) {
		ctx.drawImage(brImage, 0, 0, canvas.width, canvas.height);
	}

	if (birdExist) {
		drawnbirdImage = ctx.drawImage(birdImage, bird.x, bird.y);
	}

    document.getElementById("score").innerHTML = score ;
    document.getElementById("speed").innerHTML = (speed/1000).toFixed(2) + " S";

};

//Set timer
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//Reset buttons
function reset(id){
    switch(id){
    case "Rspeed" :
        speed = 4000 ;
        clearInterval(interval);
		birdPos();
    break;
    case "Rscore" :
        score = 0;
    break;
    case "Rtimer" :
        totalSeconds = 0 ;
    break;
    }
}
      
//Bird speed
function newSpeed(){

    mousePos();

    interval = setInterval(birdPos, speed);

    if ((posX >= bird.x && posX <= bird.x + birdImage.width) && 
        (posY >= bird.y && posY <= bird.y + birdImage.height)) {
		//Increase the score
        score += 1;
        //10% increase speed
        speed -= 250 ;
        clearInterval(interval);
		birdPos();
    }
    else
    {
        speed ;
    }
    return speed;
}

// The game loop
var game = function () {
	render();
	// Request to do this again ASAP
	requestAnimationFrame(game);
};

//Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
game();

//add event listener to respond with click
canvas.addEventListener('click', function () { newSpeed() });