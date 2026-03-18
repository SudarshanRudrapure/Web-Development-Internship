let fruits = ["Apple", "Banana", "Mango", "Orange"];
let searchItem = "Mango";
let found = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === searchItem) {
    found = true;
    break;
  }
}

if (found) {
  console.log(searchItem + " found in array");
} else {
  console.log(searchItem + " not found");
}