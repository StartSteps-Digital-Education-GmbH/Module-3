
import { AudioBookDetails, BookDetails, DigitalBookDetails, DigitalBookFormat, LibraryDetails} from './Types';
import { Book } from './Book';
import { DigitalBook } from './DigitalBook';
import { AudioBook } from './AudioBook';

// Define a class for the Library
export class Library {
    private name: string;
    private address: string;
    private books: Book[];

    constructor(details: LibraryDetails) {
        this.name = details.name;
        this.address = details.address;
        this.books = [];
    }

    // Method to add a book to the library without overloading
    // addBook(book: Book): void {
    //     this.books.push(book);
    // }

    // add book WITH OVERLOADING
    // Method overloading signatures for addBook
    addBook(book: Book): void;              // allow both Book 
    addBook(book: BookDetails): void;       // and bookDetails
    addBook(details: DigitalBookDetails): void;
    addBook(details: AudioBookDetails): void;

    // Actual implementation of the overloaded addBook method
    addBook(bookOrDetails: Book | BookDetails | DigitalBookDetails | AudioBookDetails): void {
        if (bookOrDetails instanceof Book) {
            // Add the book instance directly
            this.books.push(bookOrDetails);
        } else if ('format' in bookOrDetails) {
            if (bookOrDetails.format === 'AUDIO') {
                // Add AudioBook
                this.books.push(new AudioBook(bookOrDetails as AudioBookDetails));
            } else {
                // Add DigitalBook
                this.books.push(new DigitalBook(bookOrDetails as DigitalBookDetails));
            }
        } else {
            // Add Book
            this.books.push(new Book(bookOrDetails));
        }
    }


    // Method to remove a book from the library by title
    removeBook(title: string): void {
        this.books = this.books.filter(book => book.title !== title);
    }

    // Method to get the list of all books in the library
    getBooks(): (BookDetails)[] {
        return this.books.map(book => book.getBookDetails());
    }

    // Method to get descriptions of all books in the library
    getBookDescriptions(): string[] {
        return this.books.map(book => JSON.stringify(book.getBookDetails())); 
        // book.getBookDetails() calls the original method or one of the overridden methods in DigitalBook or AudioBook class
    }
}

// Example usage
const library = new Library({ name: 'City Library', address: '123 Main St' });

const book1 = new Book({ title: '1984', author: 'George Orwell', publishedYear: 1949, genre: 'Fiction' });
const book2 = new Book({ title: 'Sapiens', author: 'Yuval Noah Harari', publishedYear: 2011, genre: 'Non-Fiction' });

library.addBook(book1);
library.addBook(book2);


console.log(library.getBooks());
console.log(library.getBookDescriptions());

library.removeBook('1984');

console.log(library.getBooks());
console.log(library.getBookDescriptions());


// DIGITAL BOOK
console.log('\nAdding Digital book')
const digitalBook1 = new DigitalBook({ title: 'DIGITALBOOK', author: 'Yuval Noah Harari', publishedYear: 2011, genre: 'Non-Fiction', format: DigitalBookFormat.PDF, fileSize: 5})
library.addBook(digitalBook1)
console.log(library.getBooks())

console.log(JSON.stringify(digitalBook1.getBookDetails())); // calls the overriden method in DigitalBook class


// AUDIO BOOK
console.log('\nAdding Audio book')
const audioBook1 = new AudioBook({ title: 'AUDIOBOOK', author: 'Yuval Noah Harari', publishedYear: 2011, genre: 'Non-Fiction', format: DigitalBookFormat.AUDIO, fileSize: 5, duration: 60, narrator: "Max"})
library.addBook(audioBook1)
console.log(library.getBooks())


// CHECK OVERLOADED METHOD with bookdetails objects instead of book objects
console.log('\nAdding Digitalbook using details')
library.addBook({ title: 'Digital Book', author: 'Author', publishedYear: 2020, genre: 'Non-Fiction', format: DigitalBookFormat.PDF, fileSize: 5 })
console.log(library.getBooks())


console.log('\nAdding Audiobook using details')
library.addBook({ title: 'Audio Book', author: 'Author', publishedYear: 2020, genre: 'Non-Fiction', format: DigitalBookFormat.AUDIO, fileSize: 5 })
console.log(library.getBooks())

