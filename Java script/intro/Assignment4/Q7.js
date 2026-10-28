"use strict";

document.body.innerHTML = `
    <h2>Login Form</h2>

    <form id="loginForm">
        <input id="username" placeholder="Username"><br><br>
        <input id="password" type="password" placeholder="Password"><br><br>
        <button type="submit">Login</button>
    </form>

    <p id="message"></p>
`;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (username.length < 5) {
        message.textContent = "Username must contain at least 5 characters.";
        message.style.color = "red";
        return;
    }

    let passwordPattern =
        /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!passwordPattern.test(password)) {
        message.textContent =
            "Password needs 8 characters, uppercase, lowercase, number and special character.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Login validation successful!";
    message.style.color = "green";
});