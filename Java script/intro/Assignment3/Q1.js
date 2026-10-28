"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
let value = apiData[i];


let numberValue = Number(value);
let booleanValue = Boolean(value);
let stringValue = String(value);

console.log("Original Value:", value);
console.log("Number:", numberValue);
console.log("Boolean:", booleanValue);
console.log("String:", stringValue);

if (Number.isNaN(numberValue) || (typeof value === "string" && value.trim() === "")) {
    invalidNumbers.push(value);
    console.log("Status: Invalid Number");
} else {
    validNumbers.push(numberValue);
    console.log("Status: Valid Number");
}

console.log("----------------------");


}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);
console.log("Total Valid:", validNumbers.length);
console.log("Total Invalid:", invalidNumbers.length);
