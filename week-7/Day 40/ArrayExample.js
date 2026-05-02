// Step 1: Declare and create array
let myArray = [10, "Hello", true, "Apple", 50];

// Step 2: Access elements using index
console.log("First element:", myArray[0]);   // 10
console.log("Second element:", myArray[1]);  // Hello
console.log("Third element:", myArray[2]);   // true

// Step 3: Get length of array
console.log("Array length:", myArray.length); // 5

// Step 4: Loop through array using for loop
for (let i = 0; i < myArray.length; i++) {
  console.log("Index", i, "Value:", myArray[i]);
}

/*
Output

First element: 10
Second element: Hello
Third element: true
Array length: 5
Index 0 Value: 10
Index 1 Value: Hello
Index 2 Value: true
Index 3 Value: Apple
Index 4 Value: 50
*/