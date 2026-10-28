"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        let transaction = transactions[i];

        if (transaction === null) {
            throw new Error("Null transaction");
        }

        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new Error("Missing id or amount");
        }

        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }

        valid.push(transaction);
        console.log("Valid transaction:", transaction.id);

    } catch (error) {
        invalid.push({
            transaction: transactions[i],
            reason: error.message
        });

        console.log("Invalid transaction:", error.message);
    }
}

console.log("----------------------");
console.log("Valid Transactions:", valid.length);
console.log("Invalid Transactions:", invalid.length);
console.log("Valid List:", valid);
console.log("Invalid List:", invalid);