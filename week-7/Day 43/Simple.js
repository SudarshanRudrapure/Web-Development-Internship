function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;

  this.getTotalValue = function () {
    return this.price * this.quantity;
  };

  this.applyDiscount = function (percent) {
    let discount = this.price * (percent / 100);
    return this.price - discount;
  };
}
const p1 = new Product("Laptop", 50000, 2);

console.log(p1.getTotalValue());   // 100000
console.log(p1.applyDiscount(10)); // 45000