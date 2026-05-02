// switch Statement (Basic)

// The switch statement is used when checking multiple specific values.

// Syntax
switch(variable) {
   case value1:
      // code
      break;

   case value2:
      // code
      break;

   default:
      // default code
}

// Example (Using letters)
var letter = "B";

switch(letter) {
   case "A":
      console.log("Grade A");
      break;

   case "B":
      console.log("Grade B");
      break;

   case "C":
      console.log("Grade C");
      break;

   default:
      console.log("Invalid grade");
}