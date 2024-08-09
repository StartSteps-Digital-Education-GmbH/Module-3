import { IBook, ILibrary } from "./types";
import Book from "./Book";


class Library {
    private _name: string;
    private _address: string;
    private _books: Book[]; //Array of class of Books

    constructor(libraryDetails: ILibrary) {
        this._name = libraryDetails.name;
        this._address = libraryDetails.address;
        this._books = [];
    }

    addBook = (bookDetail: IBook) => {
        const newBook = new Book(bookDetail);
        this._books.push(newBook);
    }
    removeBook = (bookTitle: string) => {
        this._books = this._books.filter((book) => book.title !== bookTitle);
    }
    getBooks = (): IBook[] => {
        // return this._books;
        return this._books.map(book => book.getBookDetails())
    }
}

const library = new Library({ name: 'City Library', address: '123 Main St' });

library.addBook({ title: '1984', author: 'George Orwell', publishedYear: 1949, genre: 'Fiction' });
library.addBook({ title: 'Sapiens', author: 'Yuval Noah Harari', publishedYear: 2011, genre: 'Non-Fiction' });

console.log(library.getBooks());

library.removeBook('1984');

console.log(library.getBooks());
