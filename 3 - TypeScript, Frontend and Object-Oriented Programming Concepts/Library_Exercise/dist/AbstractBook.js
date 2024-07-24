"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractBook = void 0;
class AbstractBook {
    constructor(details) {
        this._title = details.title;
        this._author = details.author;
        this._publishedYear = details.publishedYear;
        this._genre = details.genre;
    }
    // Getter and Setter for the book title
    get title() {
        return this._title;
    }
    set settitle(newTitle) {
        this._title = newTitle;
    }
    // Getter and Setter for the book author
    get author() {
        return this._author;
    }
    set author(newAuthor) {
        this._author = newAuthor;
    }
    // Getter and Setter for the published year
    get publishedYear() {
        return this._publishedYear;
    }
    set publishedYear(newYear) {
        this._publishedYear = newYear;
    }
    // Getter and Setter for the book genre
    get genre() {
        return this._genre;
    }
    set genre(newGenre) {
        this._genre = newGenre;
    }
}
exports.AbstractBook = AbstractBook;
