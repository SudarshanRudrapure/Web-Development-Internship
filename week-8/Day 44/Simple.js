function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    // Deposit money
    this.deposit = function(amount) {
        this.balance += amount;
        console.log(this.owner + " deposited ₹" + amount);
    };

    // Withdraw money
    this.withdraw = function(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else {
            this.balance -= amount;
            console.log(this.owner + " withdrew ₹" + amount);
        }
    };

    // Check balance
    this.checkBalance = function() {
        console.log("Current balance: ₹" + this.balance);
    };
}

var account1 = new BankAccount("Sudarshan", 5000);

account1.deposit(2000);      // Sudarshan deposited ₹2000
account1.withdraw(1000);     // Sudarshan withdrew ₹1000
account1.checkBalance();     // Current balance: ₹6000