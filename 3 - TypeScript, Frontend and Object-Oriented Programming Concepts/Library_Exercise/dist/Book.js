"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const AbstractBook_1 = require("./AbstractBook");
// Define a class for the Book with encapsulated properties
class Book extends AbstractBook_1.AbstractBook {
    constructor(details) {
        super(details);
    }
    // Method to get the full details of the book
    getBookDetails() {
        return {
            title: this.title,
            author: this.author,
            publishedYear: this.publishedYear,
            genre: this.genre,
        };
    }
}
exports.Book = Book;
