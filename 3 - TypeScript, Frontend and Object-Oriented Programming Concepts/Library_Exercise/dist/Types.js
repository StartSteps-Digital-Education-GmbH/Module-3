"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalBookFormat = void 0;
// Add a new type for the format of digital books.
// Define a type DigitalBookFormat that can have values 'PDF', 'EPUB', 'MOBI', or 'AUDIO'
// export type DigitalBookFormat = 'PDF' | 'EPUB' | 'MOBI' | 'AUDIO'
var DigitalBookFormat;
(function (DigitalBookFormat) {
    DigitalBookFormat["PDF"] = "PDF";
    DigitalBookFormat["EPUB"] = "EPUB";
    DigitalBookFormat["MOBI"] = "MOBI";
    DigitalBookFormat["AUDIO"] = "AUDIO";
})(DigitalBookFormat || (exports.DigitalBookFormat = DigitalBookFormat = {}));
// export {BookDetails, DigitalBookFormat, DigitalBookDetails, AudioBookDetails};
