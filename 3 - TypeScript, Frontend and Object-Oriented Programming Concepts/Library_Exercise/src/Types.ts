// Define a type for the book's genre
export type Genre = 'Fiction' | 'Non-Fiction' | 'Science' | 'Biography';

// Define an interface for the book details
export interface BookDetails {
    title: string;
    author: string;
    publishedYear: number;
    genre: Genre;
}

// Define an interface for the library details
export interface LibraryDetails {
    name: string;
    address: string;
}


// Add a new type for the format of digital books.
// Define a type DigitalBookFormat that can have values 'PDF', 'EPUB', 'MOBI', or 'AUDIO'
// export type DigitalBookFormat = 'PDF' | 'EPUB' | 'MOBI' | 'AUDIO'
export enum DigitalBookFormat {
    PDF = 'PDF',
    EPUB = 'EPUB',
    MOBI = 'MOBI',
    AUDIO = 'AUDIO'
}

// Define interface for Digital bookdetails
export interface DigitalBookDetails extends BookDetails {
    format: DigitalBookFormat;
    fileSize: number;
}

export interface AudioBookDetails extends DigitalBookDetails {
    duration: number;
    narrator: string
}


// export {BookDetails, DigitalBookFormat, DigitalBookDetails, AudioBookDetails};
