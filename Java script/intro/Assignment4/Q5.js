"use strict";

document.body.innerHTML = `
    <h2>Movie Ticket Booking</h2>

    <form id="bookingForm">
        <input id="name" placeholder="Enter Name"><br><br>
        <input id="email" placeholder="Enter Email"><br><br>
        <input id="seats" type="number" placeholder="Number of Seats"><br><br>
        <button type="submit">Book Ticket</button>
    </form>

    <div id="result"></div>
`;

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let seats = Number(document.getElementById("seats").value);

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let result = document.getElementById("result");

    if (!namePattern.test(name)) {
        result.textContent = "Please enter a valid name.";
        return;
    }

    if (!emailPattern.test(email)) {
        result.textContent = "Please enter a valid email.";
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        result.textContent = "Seats must be between 1 and 10.";
        return;
    }

    let booking = {
        name: name,
        email: email,
        seats: seats
    };

    result.innerHTML = `
        <h3>Booking Successful!</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;
});