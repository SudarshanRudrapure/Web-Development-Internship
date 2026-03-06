// Selecting elements
var btn = document.querySelector("#myBtn");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#container");
var body = document.querySelector("body");

// Timetable data
var monday = ["ECO323", "IFS353", "MAN305", "IFS362"];
var tuesday = ["IFS353", "MAN305"];
var wednesday = ["IFS362", "MAN303", "ECO341"];
var thursday = ["IFS353", "MAN302", "STATS302"];
var friday = ["No class! YAY! :)"];

// When hover over button change colour
function setHoverColor() {
  btn.style.background = "#DC143C";
}

// When not hovering restore to normal colour
function setNormalColor() {
  btn.style.background = "";
}

// Assigning event listeners to the button
btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
btn.addEventListener("click", printTimetable);

function printTimetable() {

  // Monday
  if (userInput.value == "Monday") {
    for (var i = 0; i < monday.length; i++) {
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(monday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Tuesday
  if (userInput.value == "Tuesday") {
    for (var i = 0; i < tuesday.length; i++) {
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(tuesday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Wednesday
  if (userInput.value == "Wednesday") {
    for (var i = 0; i < wednesday.length; i++) {
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(wednesday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Thursday
  if (userInput.value == "Thursday") {
    for (var i = 0; i < thursday.length; i++) {
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(thursday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Friday
  if (userInput.value == "Friday") {
    for (var i = 0; i < friday.length; i++) {
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(friday[i]);

      var img = document.createElement("img");
      img.src = "friday-meme.jpg";

      paraText.appendChild(paraNode);
      container.appendChild(paraText);
      paraText.style.cssText = "font-size:24px;";

      body.appendChild(img);
    }
  }

}