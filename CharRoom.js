//code logic for room
//game variables

function goToRoom(){
	var img = document.getElementById("locationImage");
	img.src ="charRoom Img.png";

	characterLocation = "You are in your room";
	updateGame();
}

// logic when character hits the work button
function work() {
	wallet += 0.25;
	action = "You just dilevered some news papers on your bike";
	updateGame();
}

// this function prints on the web the current values of the game


goToRoom();