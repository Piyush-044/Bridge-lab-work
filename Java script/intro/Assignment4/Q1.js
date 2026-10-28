"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount() {
        this.price = this.price - (this.price * 10 / 100);
    }

    displayDetails() {
        return this.name + " - Rs. " + this.price +
            " - " + this.category;
    }
}

let p1 = new Product(1, "Laptop", 50000, "Electronics");
let p2 = new Product(2, "Shoes", 2500, "Fashion");
let p3 = new Product(3, "Book", 500, "Education");

let products = [p1, p2, p3];

p1.applyDiscount();

let expensiveProducts = products.filter(function(product) {
    return product.price > 1000;
});

for (let i = 0; i < expensiveProducts.length; i++) {
    console.log(expensiveProducts[i].displayDetails());
}