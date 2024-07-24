"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioBook = void 0;
const DigitalBook_1 = require("./DigitalBook");
// INSTRUCTION:
// Update AudioBook.ts: Extend DigitalBook and implement getBookDetails.
// Define a new class AudioBook that extends DigitalBook.
class AudioBook extends DigitalBook_1.DigitalBook {
    constructor(audioBookDetails) {
        super(audioBookDetails);
        this._duration = audioBookDetails.duration;
        this._narrator = audioBookDetails.narrator;
    }
    // Add appropriate getters and setters for duration and narrator.
    // get duration
    get duration() {
        return this._duration;
    }
    // set duration
    set duration(newDuration) {
        this._duration = newDuration;
    }
    // get narrator
    get narrator() {
        return this._narrator;
    }
    // set narrator
    set narrator(newNarrator) {
        this._narrator = newNarrator;
    }
    // Override the getBookDetails() method to include the narrator and duration in the details.
    getBookDetails() {
        // Get book details from super class
        const details = super.getBookDetails();
        // return bookdetails with duration and narrator
        return Object.assign(Object.assign({}, details), { duration: this._duration, narrator: this._narrator });
    }
}
exports.AudioBook = AudioBook;
