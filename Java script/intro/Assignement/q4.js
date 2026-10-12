let marks = [90, 85, 80, 88, 92];

let total = 0;
let detained = false;

// Calculate total and check marks
for (let i = 0; i < marks.length; i++) {
    total += marks[i];

    if (marks[i] < 35) {
        detained = true;
    }
}

let average = total / marks.length;
let percentage = (total / 500) * 100;

console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Percentage:", percentage + "%");

if (detained) {
    console.log("Detained");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50) {
    console.log("Promoted");
}
else {
    console.log("Detained");
}