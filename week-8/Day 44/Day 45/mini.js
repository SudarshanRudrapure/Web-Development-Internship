//create variables to store data throughout the program
var burgerName;
var friesName;
var sodaName;
var burgerTotal;
var friesTotal;
var sodaTotal;
var orderTotal = 0;
var deliveryConfirm = false;
//Initial alert of restaurant menu
alert("Hi there! Thanks for choosing Burger Mart as your preferred online ordering
system. Below is our menu\n\nBurgers:\n1. Large Dusty: $3\n2. Small Dusty: $2\n3. Big
Chief: $7\n\nFries:\n1. Small fries: $1\n2. Large fries: $2\n\nSoda\n1. Small soda:
$1\n2. Large soda: $1.5");
//Prompt user for each item of the meal they want to build
//User should pass in the number assocciated with each item
var burgerVar = prompt("To start placing your order, select a burger:\n\n1. Large
Dusty: $3\n2. Small Dusty: $2\n3. Big Chief: $7");
var friesVar = prompt("Select your fries:\n\n1. Small fries: $1\n2. Large fries: $2");
var sodaVar = prompt("Select your soda:\n\n1. Small soda: $1\n2. Large soda: $1.5");
//function to handle a new meal order as an object
function mealOrder(burger, fries, soda)
{
this.burger= burger;
if(this.burger==1)
 {
 burgerName="Large Dusty";
 burgerTotal=3;
 }
else if(this.burger==2)
 {
 burgerName="Small Dusty";
 burgerTotal=2;
 }
else if(this.burger==3)
 {
 burgerName="Big Chief";
 burgerTotal=7;
 }
this.fries= fries;
Lesson outcomes
In this lesson, we explore role of properties and functions, otherwise known as methods, in
JavaScript. Properties allow us to manipulate characteristics of objects both in vanilla JavaScript
and the HTML document object model. While functions or methods are extremely powerful for
building reusable code to perform specific tasks.
4
if(this.fries==1)
 {
 friesName="Small fries";
 friesTotal=1;
 }
else if(this.fries==2)
 {
 friesName="Large fries";
 friesTotal=2;
 }
this.soda= soda;
if(this.soda==1)
 {
 sodaName="Small soda";
 sodaTotal=1;
 }
else if(this.soda==2)
 {
 sodaName="Large soda";
 sodaTotal=1.5;
 }
//call calculateTotal function and assign return value to the orderTotal //variable
 orderTotal=calculateTotal(burgerTotal,friesTotal,sodaTotal);
//Method of mealOrder object to prompt user with the option to have meal //delivered
this.delivery = function(){
var askDelivery= prompt("Would you like to have your meal delivered?");
if (askDelivery == "yes"){
 deliveryConfirm=true;
 }
 }
//Method to display the order details
this.displayOrder = function(){
if(deliveryConfirm==false)
 {
 alert("Your order details are below:\n\n"+burgerName+"
$"+burgerTotal+"\n"+friesName+" $"+friesTotal+"\n"+sodaName+" $"+sodaTotal+"\nYour
order total is $"+orderTotal);
 }
else
 {
 alert("Your order details are below:\n\n"+burgerName+"
$"+burgerTotal+"\n"+friesName+" $"+friesTotal+"\n"+sodaName+"
$"+sodaTotal+"\n"+"Delivery fee $5\n"+"Your order total is $"+(orderTotal+5));
 }
 }
}
//create new order
var newOrder = new mealOrder(burgerVar,friesVar,sodaVar);
//call delivery method on object
newOrder.delivery();
//call displayOrder method on object
newOrder.displayOrder();
//function to calculateTotal order total of all items - excludes delivery fee.
function calculateTotal(burger,fries,soda){
return burger+fries+soda;
}; 