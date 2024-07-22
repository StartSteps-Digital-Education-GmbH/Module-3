class Task {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean) {
        this.title = title;
        this.completed = completed;
    }
}

// Example usage
const task1 = new Task('Complete assignment', false);
console.log(task1);

