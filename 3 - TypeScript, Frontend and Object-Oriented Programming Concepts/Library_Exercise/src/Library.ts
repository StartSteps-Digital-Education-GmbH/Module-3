
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

    // --> Add book receives:
    // 1. Book object
    // 2. Digital Book details Object
    // 3. AudioBookDetails object

    // Add Book function signatures
    addBook(book: Book): void;                      //done
    addBook(details: BookDetails): void;            // done
    addBook(details: DigitalBookDetails): void;     // done
    addBook(details: AudioBookDetails): void;       // done

    // Actual implementation of Addbook
    addBook(bookOrDetails: Book | BookDetails | DigitalBookDetails | AudioBookDetails): void {
        // Book object is ready to push
        // Details --> book object still needs to instantiated (3 options)
        // DigitalBookDetails & AudioBookDetails contain format  

        if(bookOrDetails instanceof Book){
            this.books.push(bookOrDetails)
        } else if ('format' in bookOrDetails) { // DigitalBOokdetails and Audiobookdetails both have format
            if (bookOrDetails.format === 'AUDIO') {
                // bookOrDetails is AudioBookDetails
                this.books.push(new AudioBook(<AudioBookDetails>bookOrDetails))
            } else {
                // bookOrDetails is DigitalBookDetails
                this.books.push(new DigitalBook(<DigitalBookDetails>bookOrDetails))
            }
        } else {
            // bookOrDetails is BookDetails
            this.books.push(new Book(bookOrDetails))
        }
    }



    // // Old Addbook method
    // addBook(book: Book): void {
    //     this.books.push(book);
    // }

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





// Example of usage after updates are made:
console.log('\nTesting Overloaded AddBook Method')
library.addBook(new Book({ title: '1984', author: 'George Orwell', publishedYear: 1949, genre: 'Fiction' })); 
library.addBook({ title: 'Digital Fortress', author: 'Dan Brown', publishedYear: 1998, genre: 'Fiction' , format: DigitalBookFormat.EPUB, fileSize: 5});
library.addBook({ title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988, genre: 'Fiction', format: DigitalBookFormat.AUDIO, fileSize: 300, duration: 240, narrator: 'Jeremy Irons'});
console.log(library.getBooks())
// --> Add book receives:
// 1. Book object
// 2. Digital Book details Object
// 3. AudioBookDetails object