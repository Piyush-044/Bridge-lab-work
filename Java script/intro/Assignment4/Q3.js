"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " returned successfully.");
    }
}

let b1 = new Book("JavaScript Basics", "Amit", "101");
let b2 = new Book("Python Basics", "Rahul", "102");
let b3 = new Book("Web Development", "Priya", "103");

let books = [b1, b2, b3];

console.log("Available Books:");

for (let i = 0; i < books.length; i++) {
    if (!books[i].isIssued) {
        console.log(books[i].title);
    }
}

let searchISBN = "102";
let found = false;

for (let i = 0; i < books.length; i++) {
    if (books[i].ISBN === searchISBN) {
        books[i].issueBook();
        found = true;
        break;
    }
}

if (!found) {
    console.log("Book not found.");
}