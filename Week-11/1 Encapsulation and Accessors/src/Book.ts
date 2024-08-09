import { Genre, IBook } from "./types";

class Book {
    private _title: string;
    private _author: string;
    private _publishedYear: number;
    private _genre: Genre;

    constructor(bookDetails: IBook = {
        title: "",
        author: "",
        publishedYear: 2000,
        genre: 'Science',
    }) {
        this._title = bookDetails.title;
        this._author = bookDetails.author;
        this._publishedYear = bookDetails.publishedYear;
        this._genre = bookDetails.genre;
    }
    // getTitle, setTitle
    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        // validate title
        this._title = newTitle;
    }
    // getAuthor, setAuthor
    get author(): string {
        return this._author;
    }

    set author(newAuthor: string) {
        this._author = newAuthor;
    }
    // getPublishedYear, setPublishedYear
    get publishedYear(): number {
        return this._publishedYear;
    }

    set publishedYear(newPublishedYear: number) {
        this._publishedYear = newPublishedYear;
    }
    // getGenre, setGenre
    get genre(): Genre {
        return this._genre;
    }

    set genre(newGenre: Genre) {
        this._genre = newGenre;
    }

    getBookDetails = (): IBook => {
        return {
            title: this._title,
            author: this._author,
            publishedYear: this._publishedYear,
            genre: this._genre
        }
    }
}

export default Book;
const newBook = new Book();
// console.log(newBook.title) => get title()
// newBook.title = "asdasd" => set title("asdasd")

