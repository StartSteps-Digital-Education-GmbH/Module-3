import { Book } from "./Book";
import { BookDetails, DigitalBookDetails, DigitalBookFormat } from "./Types"

// Define a new class DigitalBook that extends Book.
export class DigitalBook extends Book {
    // Add properties format (type DigitalBookFormat) and fileSize (number, representing the file size in MB).
    private _format: DigitalBookFormat;
    private _fileSize: number;

    // Constructor 
    constructor(digitalBookDetails: DigitalBookDetails){
        super(digitalBookDetails);
        this._format = digitalBookDetails.format;
        this._fileSize = digitalBookDetails.fileSize;
    }

    // Add appropriate getters and setters for format and fileSize.
    // get format
    get format(): DigitalBookFormat {
        return this._format;
    }

    // set format
    set format(newFormat: DigitalBookFormat) {
        const validFormats = (<any>Object).values(DigitalBookFormat) //get an array of DigitalBookFormat values //TODO: <any>
        if (validFormats.includes(newFormat)) {
            this._format = newFormat;
          } else {
            console.log(`ERROR: Invalid format!`);
          }
    }
    // get fileSize
    get fileSize(): number {
        return this._fileSize;
    }
    // set fileSize
    set fileSize(newFileSize: number){
        this._fileSize = newFileSize;
    }

    // Override the getBookDetails() method to include the format and file size in the details.
    getBookDetails(): DigitalBookDetails {
        // Get book details from super class Book
        const bookDetails = super.getBookDetails()

        // return bookdetais with format and fileSize
        return {
            ...bookDetails, // Copies all elements from bookDetails into our new object 
            format: this._format,
            fileSize: this._fileSize
        }
    }
}


