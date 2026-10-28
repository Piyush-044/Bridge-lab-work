let count = 0;

function showCount() {
console.log("Current Count: " + count);
}

function increment() {
count++;
showCount();
}

function decrement() {
count--;
showCount();
}

increment();
increment();
decrement();
