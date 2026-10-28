"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

let employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Sara", "HR", 35000),
    new Employee(3, "Rahul", "Finance", 45000),
    new Employee(4, "Priya", "IT", 50000),
    new Employee(5, "Karan", "Sales", 30000)
];

for (let i = 0; i < employees.length; i++) {
    console.log("Employee: " + employees[i].name);
    console.log("Department: " + employees[i].department);
    console.log("Annual Salary: " + employees[i].getAnnualSalary());

    employees[i].applyBonus(10);

    console.log("Salary after bonus: " + employees[i].salary);
    console.log("----------------------");
}

let totalPayout = employees.reduce(function(total, employee) {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Payout: " + totalPayout);