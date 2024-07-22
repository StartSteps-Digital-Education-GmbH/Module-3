interface TaskInfo { // Exercise 2
    title: string;
    completed: boolean;
}

class Task { // Exercise 1
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean) {
        this.title = title;
        this.completed = completed;
    }

    markCompleted(): void {
        this.completed = true;
    }

    showDetails(): void {
        console.log(`Task: ${this.title} | Completed: ${this.completed}`);
    }

}

function displayTask(task: TaskInfo): void { // Exercise 2
    console.log(`Task: ${task.title} | Completed: ${task.completed}`);
}

// Example usage
const task1Info: TaskInfo = { title: 'Complete assignment', completed: false };
displayTask(task1Info);

const task1 = new Task('Complete assignment', false);
task1.showDetails();
task1.markCompleted();
task1.showDetails();
