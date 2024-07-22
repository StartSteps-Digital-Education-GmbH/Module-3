// src/task.ts

// Define a Task class (Exercise 1)
class Task {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean) {
        this.title = title;
        this.completed = completed;
    }

    // Add methods to Task class (Exercise 3)
    markCompleted(): void {
        this.completed = true;
    }

    showDetails(): void {
        console.log(`Task: ${this.title} | Completed: ${this.completed}`);
    }
}

// Define an interface (Exercise 2)
interface TaskInfo {
    title: string;
    completed: boolean;
}

// Example usage to test Task class (Exercise 1 & 3)
const task1 = new Task('Complete assignment', false);
task1.showDetails();
task1.markCompleted();
task1.showDetails();
console.log(task1);

// Display function to add tasks to HTML (Exercise 2)
function displayTask(task: TaskInfo): void {
    const taskList = document.getElementById('task-list') as HTMLUListElement | null;
    if (taskList) {
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.textContent = `Task: ${task.title} | Completed: ${task.completed ? 'Yes' : 'No'}`;
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskList.appendChild(taskElement);
    }
}

// Task array and display all tasks function (Bonus Task)
const tasks: TaskInfo[] = [];

function displayTasks(tasks: TaskInfo[], completedFilter: 'all' | 'completed' | 'incomplete' = 'all'): void {
    const taskList = document.getElementById('task-list') as HTMLUListElement | null;
    if (taskList) {
        taskList.innerHTML = ''; // Clear previous tasks

        tasks.forEach(task => {
            if (
                (completedFilter === 'all') ||
                (completedFilter === 'completed' && task.completed) ||
                (completedFilter === 'incomplete' && !task.completed)
            ) {
                const taskElement = document.createElement('li');
                taskElement.className = 'task';
                taskElement.textContent = `Task: ${task.title} | Completed: ${task.completed ? 'Yes' : 'No'}`;

                if (task.completed) {
                    taskElement.classList.add('completed');
                }

                taskList.appendChild(taskElement);
            }
        });
    }
}

// Add task function (Exercise 4)
function addTask(title: string): void {
    const newTask = new Task(title, false);
    tasks.push(newTask);
    displayTasks(tasks);
}

// Event listener for form submission to add new task (Exercise 4)
const taskForm = document.getElementById('taskForm') as HTMLFormElement | null;
if (taskForm) {
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskTitle = (document.getElementById('taskTitle') as HTMLInputElement).value;
        if (taskTitle.trim()) {
            addTask(taskTitle);
            (document.getElementById('taskTitle') as HTMLInputElement).value = '';
        }
    });
}

// Event listeners for filter buttons (Bonus Task)
const showAllBtn = document.getElementById('showAllBtn') as HTMLButtonElement | null;
const showCompletedBtn = document.getElementById('showCompletedBtn') as HTMLButtonElement | null;
const showIncompleteBtn = document.getElementById('showIncompleteBtn') as HTMLButtonElement | null;

if (showAllBtn) {
    showAllBtn.addEventListener('click', () => {
        displayTasks(tasks, 'all');
    });
}

if (showCompletedBtn) {
    showCompletedBtn.addEventListener('click', () => {
        displayTasks(tasks, 'completed');
    });
}

if (showIncompleteBtn) {
    showIncompleteBtn.addEventListener('click', () => {
        displayTasks(tasks, 'incomplete');
    });
}

// Initial display of tasks (Exercise 4)
displayTasks(tasks);
