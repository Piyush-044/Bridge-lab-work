"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        return this.items.reduce(function(total, item) {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(coupon) {
        let couponPattern = /^(SAVE20|DISC10)$/;

        if (!couponPattern.test(coupon)) {
            console.log("Invalid coupon!");
            return this.getTotal();
        }

        let total = this.getTotal();

        if (coupon === "SAVE20") {
            total = total - (total * 20 / 100);
        } else if (coupon === "DISC10") {
            total = total - (total * 10 / 100);
        }

        return total;
    }
}

let cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 2000, 1);

console.log("Cart Total: Rs. " + cart.getTotal());

let coupon = "SAVE20";

console.log("Coupon: " + coupon);
console.log("Final Total: Rs. " + cart.applyCoupon(coupon));