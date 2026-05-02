// Selecting button element
 var btn = document.querySelector("#myBtn");
 var userInput = document.querySelector("#user-input");
 var container = document.querySelector("#container");
 var body = document.querySelector("body");

 var monday=["ECO323","IFS353","MAN305","IFS362"];
 var tuesday=["IFS353","MAN305"];
 var wednesday=["IFS362","MAN303","ECO341"];
 var thursday=["IFS353","MAN302","STATS302"];
 var friday=["No class! YAY! :)"];

 //when hover over button change colour
 function setHoverColor() {
 btn.style.background = "#DC143C";
 }
 //when not hovering restore to normal colour
 function setNormalColor() {
 btn.style.background = "";
 }
 // Assigning event listeners to the button

btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
 btn.addEventListener("click", printTimetable);
function printTimetable(){
    
}