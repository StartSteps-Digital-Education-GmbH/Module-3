export type Genre = 'Fiction' | 'Non-Fiction' | 'Science';

export interface IBook {
    title: string;
    author: string;
    publishedYear: number;
    genre: Genre;
}

export interface ILibrary {
    name: string;
    address: string
}
