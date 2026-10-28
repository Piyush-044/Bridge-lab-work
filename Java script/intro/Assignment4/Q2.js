"use strict";

document.body.innerHTML = `
    <h2>Student Registration</h2>

    <form id="studentForm">
        <input id="name" placeholder="Enter Name"><br><br>
        <input id="email" placeholder="Enter Email"><br><br>
        <input id="phone" placeholder="Enter Phone"><br><br>
        <input id="password" type="password" placeholder="Enter Password"><br><br>

        <button type="submit">Register</button>
    </form>

    <p id="message"></p>
`;

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let valid = true;

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/;

    let fields = [name, email, phone, password];
    let patterns = [namePattern, emailPattern, phonePattern, passwordPattern];

    for (let i = 0; i < fields.length; i++) {
        if (!patterns[i].test(fields[i].value)) {
            fields[i].style.border = "2px solid red";
            valid = false;
        } else {
            fields[i].style.border = "2px solid green";
        }
    }

    let message = document.getElementById("message");

    if (valid) {
        message.textContent = "Registration successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter valid details.";
        message.style.color = "red";
    }
});