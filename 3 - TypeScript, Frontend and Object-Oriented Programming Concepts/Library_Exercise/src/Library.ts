
import { BookDetails, DigitalBookFormat, LibraryDetails} from './Types';
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

    // Method to add a book to the library
    addBook(book: Book): void {
        this.books.push(book);
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


// STEP 4 INSTRUCTIONS
// Add example usage to demonstrate adding and managing digital books and audiobooks.

console.log('\nAdding Digital book')
const digitalBook1 = new DigitalBook({ title: 'DIGITALBOOK', author: 'Yuval Noah Harari', publishedYear: 2011, genre: 'Non-Fiction', format: DigitalBookFormat.PDF, fileSize: 5})
library.addBook(digitalBook1)
console.log(library.getBooks())

console.log('\nAdding Audio book')
const audioBook1 = new AudioBook({ title: 'AUDIOBOOK', author: 'Yuval Noah Harari', publishedYear: 2011, genre: 'Non-Fiction', format: DigitalBookFormat.PDF, fileSize: 5, duration: 60, narrator: "Max"})
library.addBook(audioBook1)
console.log(library.getBooks())

