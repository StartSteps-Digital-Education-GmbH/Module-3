interface TaskInfo {
    title: string;
    completed: boolean;
}

class Task {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean) {
        this.title = title;
        this.completed = completed;
    }
}

function displayTask(task: TaskInfo): void {
    console.log(`Task: ${task.title} | Completed: ${task.completed}`);
}

// Example usage
const task1Info: TaskInfo = { title: 'Complete assignment', completed: false };
displayTask(task1Info);
