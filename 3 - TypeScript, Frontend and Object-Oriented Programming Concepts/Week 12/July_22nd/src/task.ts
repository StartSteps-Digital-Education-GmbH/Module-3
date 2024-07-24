interface TaskInfo {
    title: string;
    completed: boolean;
}

class Task implements TaskInfo {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }

    toggleCompleted(): void {
        this.completed = !this.completed;
    }

    showDetails(): void {
        console.log(`Task: ${this.title} | Completed: ${this.completed}`);
    }
}

const tasks: Task[] = [];

function displayTasks(tasks: Task[], completedFilter: 'all' | 'completed' | 'incomplete' = 'all'): void {
    const taskList = document.getElementById('task-list') as HTMLUListElement;
   
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

                // Add event listener to toggle task completion status when clicked
                taskElement.addEventListener('click', () => {
                    console.log(`Task clicked: ${task.title}`);
                    task.toggleCompleted();
                    displayTasks(tasks, completedFilter); // Refresh the task list
                });
                

                if (task.completed) {
                    taskElement.classList.add('completed');
                }

                taskList.appendChild(taskElement);
            }
        });
    
}

function addTask(title: string): void {
    const newTask = new Task(title);
    tasks.push(newTask);
    displayTasks(tasks);
}

// Event listener for form submission to add new task
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

// Event listeners for filter buttons
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

// Initial display of tasks
displayTasks(tasks);
