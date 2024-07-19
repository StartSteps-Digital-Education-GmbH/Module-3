import {DigitalBook} from './DigitalBook'
import { AudioBookDetails, DigitalBookDetails } from './Types';

// INSTRUCTION:
// Update AudioBook.ts: Extend DigitalBook and implement getBookDetails.

// Define a new class AudioBook that extends DigitalBook.
export class AudioBook extends DigitalBook {
    // Add properties duration (number, representing the duration in minutes) and narrator (string).
    private _duration: number;
    private _narrator: string

    constructor(audioBookDetails: AudioBookDetails){
        super(audioBookDetails);
        this._duration = audioBookDetails.duration;
        this._narrator = audioBookDetails.narrator;
    }

    // Add appropriate getters and setters for duration and narrator.
    // get duration
    get duration(): number {
        return this._duration;
    }
    // set duration
    set duration(newDuration: number){
        this._duration = newDuration
    }
    // get narrator
    get narrator(): string {
        return this._narrator;
    }
    // set narrator
    set narrator(newNarrator: string){
        this._narrator = newNarrator
    }

    // Override the getBookDetails() method to include the narrator and duration in the details.
    getBookDetails(): AudioBookDetails {
        // Get book details from super class
        const details = super.getBookDetails()
        // return bookdetails with duration and narrator
        return {
            ...details,
            duration: this._duration,
            narrator: this._narrator
        }
    }
}


