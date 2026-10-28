"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (let i = 0; i < employees.length; i++) {
        let name = employees[i].name;
        let salary = Number(employees[i].salary);
        let years = Number(employees[i].years);

        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        let totalSalary = salary + bonus;

        console.log(`Employee: ${name}`);
        console.log(`Salary: ${salary}`);
        console.log(`Years: ${years}`);
        console.log(`Bonus: ${bonus}`);
        console.log(`Total Salary: ${totalSalary}`);
        console.log("----------------------");
    }
} catch (error) {
    console.log("Error: " + error.message);
}