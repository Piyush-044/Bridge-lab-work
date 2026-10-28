let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
console.log("Secure");
} else {
console.log("Unsafe");
}

// Change values to test again
isAlarmOn = false;

if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
console.log("Secure");
} else {
console.log("Unsafe");
}
