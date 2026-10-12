let expenses = [5000, 2000, 8000, 1500, 1000];

let total = 0;

// Calculate total expenses
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

let average = total / expenses.length;

// Add 10% tax
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Tax: ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));