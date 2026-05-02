// Shopping List Array Project

// Create an empty shopping list array
let shoppingList = [];

// Add items to the list using push()
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Eggs");
shoppingList.push("Rice");

console.log("Shopping List after adding items:");
console.log(shoppingList);

// Remove the last item using pop()
let removedItem = shoppingList.pop();

console.log("Removed Item:", removedItem);

console.log("Shopping List after removing the last item:");
console.log(shoppingList);

// Add another item
shoppingList.push("Fruits");

console.log("Final Shopping List:");
console.log(shoppingList);