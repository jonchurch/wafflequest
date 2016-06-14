/*
* Creating Player Object to store attributes of the player
* In my simple game the player info will pertain to only inventory and win status
*/

var Player = function(){
	self = this
	self.inv = [];
	self.is_winner = false;
	self.current_location = 'champ';
}

//Print the player's inventory
Player.prototype.print_inv = function(){
	self = this;
	message = [];
	if (self.inv){
		for (i = 0; i < self.inv.length; i++) {
				message.push(self.inv[i]);
		}
		console.log('Inventory: ' + message.join(', '));
	}
	else {
		console.log('Your inventory is empty');
	}
};

/*
 player = new Player(); //Instantiates player as a new Plauyer object with empty inventory and winner = false

 player.inv = ['Pizza', 'Lantern', 'Napkin(2)'];

 player.print_inv();  //Inventory: Pizza, Lanter, Napkin(2)
 */

module.exports = Player;
