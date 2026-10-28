let scores = [];

for (let i = 0; i < 8; i++) {
let score = Math.floor(Math.random() * 71) + 30;
scores.push(score);
}

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let total = scores.reduce(function(sum, score) {
return sum + score;
}, 0);

let average = total / scores.length;

let passed = scores.filter(function(score) {
return score >= 50;
});

console.log("Scores: " + scores);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Average Score: " + average.toFixed(2));
console.log("Students Passed: " + passed.length);
