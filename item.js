

function Item(name, desc, take){
	self = this;
	self.name = name;
	self.desc = desc;
	self.take = take;
	pickUp = function pickUp(object){
	if (object.take > 0) {
		console.log('You take the', object.name);
		object.take = object.take -1;
		//player.inv.push(object);
	}	
 
	else {
		console.log(self.name,' cannot be taken');
	}
}
	
}
//Output description text for this item
Item.prototype.print = function(){
	//self = this;
	console.log(self.desc);
};

//Provides the appropriate string in response to a take
Item.prototype.pick = function(){
	if (self.take > 0) {
		console.log('You take the', self.name);
		//delete self; //I think adding and removing items should be dealt with by a seperate function
	} 
	else {
		console.log(self.name,' cannot be taken');
	}
};

Item.prototype.examine = function(){
	//Echo item desc on foo.examine()
	console.log(this.desc);
}

//Creating classes from parents
/*function Almond(){
	Item.call(this, 'almond', "A little dusty from your pocket, but packed with protein", 1);
}
inheritPrototype(Almond, Item);

var nut = new Almond()
console.log(nut);
*/

var spoon = new	Item('spoon', 'This spoon is shiny and tiny. Could fit easily into a jar of peanut butter', 1);

var sand = new Item('sand', 'This is the good stuff. Pure Columbian by the looks of it', 1)


//Is there a benefit to splitting a command into calling a method on it's param instead of using the param to get execute the command?
function Pick(object){
	_obj = object
	_obj.pick(); 
}
//Instead of doing it like this?
function pickUp(object){
	if (object.take > 0) {
		console.log('You take the', object.name);
		object.take = object.take -1;
		//player.inv.push(object);
	}	
 
	else {
		console.log(self.name,' cannot be taken');
	}
}

//Function Testing
//pickUp(sand);
//pickUp(spoon);



module.exports = Item;





function inheritPrototype(childObject, parentObject){
 	//Copy the properties and methods of parentObject onto childObject
 	//copyOfParent object now has everything parentObject has
 	var copyOfParent = Object.create(parentObject.prototype);

 	//Set constructor of new object to point to childObject
 	copyOfParent.constructor = childObject;

 	//Then set the childObject prototype to copyofParent so that childObject can inherit everything from copyOfParent
 	childObject.prototype = copyOfParent;
 }
