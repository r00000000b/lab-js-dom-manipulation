console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  var section = document.createElement('section');

  var shireLand = document.createElement('article');
  section.appendChild(shireLand);
  shireLand.innerHTML = "<h1>The Shire</h1>"
  /*var shire = document.createTextNode('The Shire');
  section.appendChild(shire);*/

  var rivendellLand = document.createElement('article');
  section.appendChild(rivendellLand);
  rivendellLand.innerHTML = "<h1>Rivendell</h1>"
  /*var rivendell = document.createTextNode('Rivendell');
  section.appendChild(rivendell);*/

  var mordorLand = document.createElement('article');
  section.appendChild(mordorLand);
  mordorLand.innerHTML = "<h1>Mordor</h1>"
/*  var mordor = document.createTextNode('Mordor');
  section.appendChild(mordor);*/

  // var body1 = document.getElementByTagName('body');
  //body1.appendChild('section');
/*
  section.appendChild(newLands);
  section.setAttribute('class', 'h1')
  section.appentChild(newLands);
  section.appendChild(newLands);
  var section = document.getElementByTagName('section')[0];
*/
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var hobbits = document.createElement('ul');

  var gandalf = document.createElement('li');
  hobbits.appendChild(gandalf);
  gandalf.innerHTML = "Gandalf the Gray";

  var legolas = document.createElement('li');
  hobbits.appendChild(legolas);
  legolas.innerHTML = "Legolas";

  var gimli = document.createElement('li');
  hobbits.appendChild(gimli);
  gimli.innerHTML = "Gimli";

  var strider = document.createElement('li');
  hobbits.appendChild(strider);
  strider.innerHTML = "Strider";

  var boromir = document.createElement('li');
  hobbits.appendChild(boromir);
  boromir.innerHTML = "Boromir";

hobbits.setAttribute('class', 'hobbit');

}


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
