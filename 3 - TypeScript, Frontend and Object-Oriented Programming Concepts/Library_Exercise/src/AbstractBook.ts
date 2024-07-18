import { BookDetails, Genre } from "./Types";

abstract class AbstractBook {
    // common fields
    private _title: string;
    private _author: string;
    private _publishedYear: number;
    private _genre: Genre;

    constructor(details: BookDetails) {
        this._title = details.title;
        this._author = details.author;
        this._publishedYear = details.publishedYear;
        this._genre = details.genre;
    }

     // Getter and Setter for the book title
     get title(): string {
        return this._title;
    }

    set settitle(newTitle: string) {
        this._title = newTitle;
    }

    // Getter and Setter for the book author
    get author(): string {
        return this._author;
    }

    set author(newAuthor: string) {
        this._author = newAuthor;
    }

    // Getter and Setter for the published year
    get publishedYear(): number {
        return this._publishedYear;
    }

    set publishedYear(newYear: number) {
        this._publishedYear = newYear;
    }

    // Getter and Setter for the book genre
    get genre(): Genre {
        return this._genre;
    }

    set genre(newGenre: Genre) {
        this._genre = newGenre;
    }

    // Required method to get book details
    abstract getBookDetails(): BookDetails;
}