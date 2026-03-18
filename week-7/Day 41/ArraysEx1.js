// 1. Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}


// 2. Check numbers from 1 to 10 → Positive / Negative (simple condition demo)
for (let i = -5; i <= 5; i++) {
  if (i >= 0) {
    console.log(i + " is Positive");
  } else {
    console.log(i + " is Negative");
  }
}


// 3. Loop through array and print all values
let fruits = ["Mango", "Banana", "Pineapple", "Cherry"];
let i = 0;

while (i < fruits.length) {
  console.log("Fruit:", fruits[i]);
  i++;
}

// 4. Keep asking user until they enter correct password
let password;

do {
  password = prompt("Enter password (hint: 1234)");
} while (password !== "1234");

alert("Login successful!");