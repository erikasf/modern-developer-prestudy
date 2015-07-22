var cashRegister = {
    total: 0,
    add: function(itemCost) {
        this.total += itemCost;
    }
};

// call the add method for our items
cashRegister.add(0.98); // eggs
cashRegister.add(1.23); // milk
cashRegister.add(4.99); // magazine
cashRegister.add(0.45); // chocolate

// Show the total bill
console.log("Your bill is " + cashRegister.total);
