const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");
const selectedValue = document.getElementById("selectedValue");

dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();

    const isOpen = options.style.display === "block";

    options.style.display = isOpen ? "none" : "block";
});

options.addEventListener("click", function (event) {
    if (event.target.dataset.value) {
        dropdownButton.textContent = event.target.textContent;
        selectedValue.textContent =
            "Selected: " + event.target.dataset.value;

        options.style.display = "none";
    }
});

// Capturing phase: close dropdown when clicking outside.
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        options.style.display = "none";
    }
}, true);