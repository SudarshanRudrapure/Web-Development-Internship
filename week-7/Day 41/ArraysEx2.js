// prints the numbers 10 to 1
for (i = 10; i > 0; i--) {
  console.log(i);
}


// writes the numbers 1 to 20 and adds a string odd or even depending on whether or not the number is odd or even

var i;

for (i = 1; i <= 20; i++) {
  if (i % 2) {
    console.log(i + " Odd");
  } else {
    console.log(i + " Even");
  }
}

// loops through an array and prints all indexes

var myArray = ["Apple", "Orange", "Grape", "Lemon"];
var i = 0;

while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}


// prompt the user until they supply a height of 1.2 meters or greater

do {
  alert("You must be 1.2 meters in height to join this ride.");
  var userHeight = prompt("Please enter your height");
} while (userHeight < 1.2);

alert("Enjoy the ride!");