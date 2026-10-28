const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

function updateCounter() {
    const remaining = maxCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    if (remaining <= 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "orange";
    } else {
        counter.style.color = "green";
    }
}

message.addEventListener("input", function () {
    if (message.value.length > maxCharacters) {
        message.value = message.value.slice(0, maxCharacters);
    }

    updateCounter();
});

// Stop further typing when the maximum is reached.
message.addEventListener("keydown", function (event) {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft",
        "ArrowRight", "ArrowUp", "ArrowDown",
        "Tab", "Home", "End"
    ];

    if (
        message.value.length >= maxCharacters &&
        !allowedKeys.includes(event.key) &&
        !event.ctrlKey &&
        !event.metaKey
    ) {
        event.preventDefault();
    }
});

resetButton.addEventListener("click", function () {
    message.value = "";
    updateCounter();
});