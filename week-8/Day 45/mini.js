// // create variables
// var burgerName;
// var friesName;
// var sodaName;

// var burgerTotal;
// var friesTotal;
// var sodaTotal;

// var orderTotal = 0;
// var deliveryConfirm = false;

// // Menu Alert (FIXED STRING)
// alert(
//   "Hi there! Thanks for choosing Burger Mart!\n\n" +
//   "Burgers:\n1. Large Dusty: $3\n2. Small Dusty: $2\n3. Big Chief: $7\n\n" +
//   "Fries:\n1. Small fries: $1\n2. Large fries: $2\n\n" +
//   "Soda:\n1. Small soda: $1\n2. Large soda: $1.5"
// );

// // Get user input (convert to number)
// var burgerVar = Number(prompt("Select a burger:\n1. Large Dusty\n2. Small Dusty\n3. Big Chief"));
// var friesVar = Number(prompt("Select fries:\n1. Small fries\n2. Large fries"));
// var sodaVar = Number(prompt("Select soda:\n1. Small soda\n2. Large soda"));

// // Constructor Function
// function mealOrder(burger, fries, soda) {

//   this.burger = burger;

//   if (this.burger === 1) {
//     burgerName = "Large Dusty";
//     burgerTotal = 3;
//   } else if (this.burger === 2) {
//     burgerName = "Small Dusty";
//     burgerTotal = 2;
//   } else if (this.burger === 3) {
//     burgerName = "Big Chief";
//     burgerTotal = 7;
//   }

//   this.fries = fries;

//   if (this.fries === 1) {
//     friesName = "Small fries";
//     friesTotal = 1;
//   } else if (this.fries === 2) {
//     friesName = "Large fries";
//     friesTotal = 2;
//   }

//   this.soda = soda;

//   if (this.soda === 1) {
//     sodaName = "Small soda";
//     sodaTotal = 1;
//   } else if (this.soda === 2) {
//     sodaName = "Large soda";
//     sodaTotal = 1.5;
//   }

//   // Calculate total
//   orderTotal = calculateTotal(burgerTotal, friesTotal, sodaTotal);

//   // Delivery method
//   this.delivery = function () {
//     var askDelivery = prompt("Would you like delivery? (yes/no)");
//     if (askDelivery.toLowerCase() === "yes") {
//       deliveryConfirm = true;
//     }
//   };

//   // Display order
//   this.displayOrder = function () {
//     if (!deliveryConfirm) {
//       alert(
//         "Your order:\n\n" +
//         burgerName + " $" + burgerTotal + "\n" +
//         friesName + " $" + friesTotal + "\n" +
//         sodaName + " $" + sodaTotal + "\n\n" +
//         "Total: $" + orderTotal
//       );
//     } else {
//       alert(
//         "Your order:\n\n" +
//         burgerName + " $" + burgerTotal + "\n" +
//         friesName + " $" + friesTotal + "\n" +
//         sodaName + " $" + sodaTotal + "\n" +
//         "Delivery: $5\n\n" +
//         "Total: $" + (orderTotal + 5)
//       );
//     }
//   };
// }

// // Create object
// var newOrder = new mealOrder(burgerVar, friesVar, sodaVar);

// // Call methods
// newOrder.delivery();
// newOrder.displayOrder();

// // Calculate total function
// function calculateTotal(burger, fries, soda) {
//   return burger + fries + soda;
// }


function calculateTotal(burger, fries, soda) {
  return burger + fries + soda;
}

function placeOrder() {

  let burger = Number(document.getElementById("burger").value);
  let fries = Number(document.getElementById("fries").value);
  let soda = Number(document.getElementById("soda").value);
  let delivery = document.getElementById("delivery").checked;

  let burgerName, friesName, sodaName;
  let burgerTotal, friesTotal, sodaTotal;

  // Burger
  if (burger === 1) {
    burgerName = "Large Dusty";
    burgerTotal = 3;
  } else if (burger === 2) {
    burgerName = "Small Dusty";
    burgerTotal = 2;
  } else {
    burgerName = "Big Chief";
    burgerTotal = 7;
  }

  // Fries
  if (fries === 1) {
    friesName = "Small Fries";
    friesTotal = 1;
  } else {
    friesName = "Large Fries";
    friesTotal = 2;
  }

  // Soda
  if (soda === 1) {
    sodaName = "Small Soda";
    sodaTotal = 1;
  } else {
    sodaName = "Large Soda";
    sodaTotal = 1.5;
  }

  let total = calculateTotal(burgerTotal, friesTotal, sodaTotal);

  if (delivery) {
    total += 5;
  }

  // Display result
  document.getElementById("result").innerHTML =
    `<h3>Your Order</h3>
     ${burgerName} - $${burgerTotal} <br>
     ${friesName} - $${friesTotal} <br>
     ${sodaName} - $${sodaTotal} <br>
     ${delivery ? "Delivery - $5<br>" : ""}
     <strong>Total: $${total}</strong>`;
}