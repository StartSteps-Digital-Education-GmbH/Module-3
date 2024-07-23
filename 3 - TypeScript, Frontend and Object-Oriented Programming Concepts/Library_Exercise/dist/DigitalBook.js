"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalBook = void 0;
const AbstractBook_1 = require("./AbstractBook");
const Types_1 = require("./Types");
// Define a new class DigitalBook that extends Book.
class DigitalBook extends AbstractBook_1.AbstractBook {
    // Constructor 
    constructor(digitalBookDetails) {
        super(digitalBookDetails);
        this._format = digitalBookDetails.format;
        this._fileSize = digitalBookDetails.fileSize;
    }
    // Add appropriate getters and setters for format and fileSize.
    // get format
    get format() {
        return this._format;
    }
    // set format
    set format(newFormat) {
        const validFormats = Object.values(Types_1.DigitalBookFormat); //get an array of DigitalBookFormat values //TODO: <any>
        if (validFormats.includes(newFormat)) {
            this._format = newFormat;
        }
        else {
            console.log(`ERROR: Invalid format!`);
        }
    }
    // get fileSize
    get fileSize() {
        return this._fileSize;
    }
    // set fileSize
    set fileSize(newFileSize) {
        this._fileSize = newFileSize;
    }
    // Override the getBookDetails() method to include the format and file size in the details.
    getBookDetails() {
        // return bookdetais with format and fileSize
        return {
            title: this.title,
            author: this.author,
            publishedYear: this.publishedYear,
            genre: this.genre,
            format: this._format,
            fileSize: this._fileSize
        };
    }
}
exports.DigitalBook = DigitalBook;
