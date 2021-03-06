var tealHouse = {

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

} //end top level object
  
