"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        data.age = Number(data.age);

        if (Number.isNaN(data.age)) {
            throw new Error("Invalid age");
        }

        cleanData.push(data);

        console.log("Valid data:", data);

    } catch (error) {
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

let under18 = [];

for (let i = 0; i < cleanData.length; i++) {
    if (cleanData[i].age < 18) {
        under18.push(cleanData[i]);
    }
}

console.log("----------------------");
console.log("Clean Data:", cleanData);
console.log("Users under 18:", under18);
console.log("Total Valid Records:", cleanData.length);