
let data = {
	username: 'Michael',
	hp: 96,
	max_hp: 200,
	items: {},
	location: 'your room',
};

console.log(`Welcome to RPG fun time ${data.username}. \nBefore you start here is a rundown of your codition: `);
console.log(`Your hp is currently: ${data.hp}, and you are located in ${data.location}.`)
if (Object.keys(data.items).length === 0) {
	console.log('You currently have no items.')
} else {
	traversePrint(data.items);
}
console.log('You wake up in your room on a brisk evening, \nseems like a silent day outside of your window.');
console.log('Would you like to \n1: stay in bed, \n2: Look around the room, \n3: Leave your room?');

if (1) {
	if (data.hp < (data.max_hp / 2).toFix()) {
		data.hp += 2;
		console.log(`You lay for 20 mins, your hp has been increased by 2, and is now ${data.hp}`);
	}
	console.log('Would you like to \n1: stay in bed, \n2: Look around the room, \n3: Leave your room?');
} else if (2) {

} else {

}