"use strict";

let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.body.innerHTML = `
    <h2>Edit User Details</h2>

    <form id="userForm">
        <input id="name" placeholder="Name" value="${user.name}"><br><br>
        <input id="email" placeholder="Email" value="${user.email}"><br><br>
        <input id="age" type="number" placeholder="Age" value="${user.age}"><br><br>
        <button type="submit">Update</button>
    </form>

    <h3>Updated Details</h3>
    <pre id="details"></pre>
`;

document.getElementById("details").textContent =
    JSON.stringify(user, null, 2);

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    document.getElementById("details").textContent =
        JSON.stringify(user, null, 2);

    console.log("Updated User:", user);
});