const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const result = document.getElementById("result");

function showStep(stepNumber) {
    step1.hidden = stepNumber !== 1;
    step2.hidden = stepNumber !== 2;
    step3.hidden = stepNumber !== 3;
}

document.getElementById("next1").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    showStep(2);
});

document.getElementById("next2").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email");
        return;
    }

    showStep(3);
});

document.getElementById("back2").addEventListener("click", function () {
    showStep(1);
});

document.getElementById("back3").addEventListener("click", function () {
    showStep(2);
});

document.getElementById("submit").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }

    step3.hidden = true;

    result.innerHTML = `
        <h3>Registration Successful!</h3>
        <p>Name: ${escapeHTML(name)}</p>
        <p>Email: ${escapeHTML(email)}</p>
        <p>Password: Hidden for security</p>
    `;
});

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function (character) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}