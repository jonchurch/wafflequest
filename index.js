/*

gameIntro(player) {
	if (player is first time)
		askPlayerName() {
		say('****Welcome to the land of Waffles!**** \n\n Just moments ago you were in a diner, telling your friends that anybody can make a good waffle and that the slobs behind the counter will in short order be replaced by robots. \n There was a flash of light, the smell of burnt bacon, and suddenly everything goes black');
		say('\"WHO ARE DARES QUESTION THE POWER OF THE WAFFLEMANCERS OF GRIDLON?!\" a voice booms through the darkness. \"SPEAK YOUR NAME AND I SHALL REVEAL TO YOU YOUR FATE, AND NO THIS IS NOT A JOKE.\" \n You should probably do what it says... but if you have no idea whats going on here, just send \'help\' for some tips. ')
		controller.hears('My name is (.*)')
			player.name = match;
			say('YOU HAVE ENTERED A WORLD **COUGH** OF **WHEEZE** Man, caps are rough on the throat. ' + player.name + ' you have entered a world of pain, and waffles! Your breakfast related ignorance has angered many here, so we have brought you here to atone for your sins. You will die here, ' + player.name + 'BWAHAHAHA **COUGH** **WHEEZE** Your death beings now!')
		}//askPlayerName
	}//gameIntro

	gameLoop() {
		///Needs to know who the player is and where they are, listen for user input
		//On user input, run functions associated with the location object while parsing input for commands 
	}
*/
	
var map = {
	    "champ": {
	      "name": "Champagne Room",
	      "desc": "Absolutely no sex is allowed here. There are chairs arranged around a coffee table with magazines in the center of the room. There is one drug on the table next to a spoon.",
	      "contextualHelp": "Don't do drugs!",
	      "action": {
	          "take drug": "Better take this so no one gets hurt"
	      },
	      "exit": {
	        "north": "-1",
	        "east": "-1",
	        "south": "quiet",
	        "west": "-1"
	      },
	      "object": {
	        "drug": "Rolled up tube of sand and plants",
	          "spoon": "This spoon is shiny and tiny. Could fit easily into a jar of peanut butter",
	          "magazine": "The cover reads, Glue Enthusiasts Quarterly, issue #352. The pages are stuck together firmly"
	      },
	      "mobile": null
	},
	  "quiet": {
	      "name": "Quiet Room",
	      "desc": "The walls are covered with art that seems misguided. This room is for relaxing, and you can tell. Plants grow from the ceiling in long vines.",
	      "contextualHelp": "Good place to use drugs!",
	      "action": {
	          "use drug": "The drug is unlit"
	      },
	      "exit": {
	        "north": "champ",
	        "east": "-1",
	        "south": "-1",
	        "west": "sun"
	      },
	      "object": {
	        "plant": "These plants look like they've been here a long time",
	        "art": "Not quite to your taste, but a good atempt all the same"
	      },
	      "mobile": null
	},  
	    "sun": {
	      "name": "Sun Room",
	      "desc": "Light spills in from the 3 walls of windows around you. There is a large pile of sand with a stingray floating lazily above it",
	      "contextualHelp": "Pet the stringray",
	      "action": {
	          "pet stingray": "Your pats seem appreciated as it coos slightly and nuzzles against your hand",
	          "take sand": "You fill your pockets greedily"
	      },
	      "exit": {
	        "north": "-1",
	        "east": "quiet",
	        "south": "-1",
	        "west": "-1"
	      },
	      "object": {
	        "stingray": "Such a beautiful and misunderstood creature",
	          "sand": "This is the good stuff. Pure Columbia by the looks of it"
	      },
	      "mobile": null
	},
} //end top level location object

player = new Player();
player.current_location = map.champ;

var Game = function(){
var cmds = [];



//Print Current location's description	
console.log(current_location.desc);

if (state.command) {
	execute(cmds);	
}



go_to(location);

};
Game();
  
