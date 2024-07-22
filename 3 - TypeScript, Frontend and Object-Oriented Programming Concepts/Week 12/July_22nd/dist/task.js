"use strict";
class Task {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }
    toggleCompleted() {
        this.completed = !this.completed;
    }
    showDetails() {
        console.log(`Task: ${this.title} | Completed: ${this.completed}`);
    }
}
const tasks = [];
function displayTasks(tasks, completedFilter = 'all') {
    const taskList = document.getElementById('task-list');
    if (taskList) {
        taskList.innerHTML = ''; // Clear previous tasks
        tasks.forEach(task => {
            if ((completedFilter === 'all') ||
                (completedFilter === 'completed' && task.completed) ||
                (completedFilter === 'incomplete' && !task.completed)) {
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
}
function addTask(title) {
    const newTask = new Task(title);
    tasks.push(newTask);
    displayTasks(tasks);
}
// Event listener for form submission to add new task
const taskForm = document.getElementById('taskForm');
if (taskForm) {
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskTitle = document.getElementById('taskTitle').value;
        if (taskTitle.trim()) {
            addTask(taskTitle);
            document.getElementById('taskTitle').value = '';
        }
    });
}
// Event listeners for filter buttons
const showAllBtn = document.getElementById('showAllBtn');
const showCompletedBtn = document.getElementById('showCompletedBtn');
const showIncompleteBtn = document.getElementById('showIncompleteBtn');
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
