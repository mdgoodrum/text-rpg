
function buy() {

	if(sharePrice <= wallet) {
		wallet -= sharePrice;
		shares++;
		action = "You bought 1 share";
	} else {
		action = "You can't buy that";
	}

	updateGame();
}


function sell() {

	if(shares >= 1) {
		wallet += sharePrice;
		shares--;
		action = "You sold one share";
	} else {
		action = "You dont have a share to sell";
	}
	updateGame();
}

// updates functions

function priceUpdate() {
	sharePrice += Math.random();
	sharePrice -= Math.random();
}