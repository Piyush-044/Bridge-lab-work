let name = "Siddharth";
let age = 19;
let isStudent = true;
let subjects = ["JavaScript", "Java", "Python"];
let student = { name: "Piyush", age: 19 };
let marks = null;
let result;

let data = [
    { Label: "Name", Value: name, Type: typeof name },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Student Object", Value: student, Type: typeof student },
    { Label: "Marks", Value: marks, Type: "null" },
    { Label: "Result", Value: result, Type: typeof result }
];

console.table(data);