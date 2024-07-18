import { Genre, BookDetails } from './Types';
import { AbstractBook } from './AbstractBook'

// Define a class for the Book with encapsulated properties
export class Book extends AbstractBook {
    constructor(details: BookDetails) {
        super(details)
    }

    // Method to get the full details of the book
    getBookDetails(): BookDetails {
        return {
            title: this.title,
            author: this.author,
            publishedYear: this.publishedYear,
            genre: this.genre,
        };
    }
}
