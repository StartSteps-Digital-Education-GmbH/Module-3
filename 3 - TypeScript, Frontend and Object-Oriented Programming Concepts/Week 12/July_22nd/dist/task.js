"use strict";
// src/task.ts
// Define a Task class (Exercise 1)
class Task {
    constructor(title, completed) {
        this.title = title;
        this.completed = completed;
    }
    // Add methods to Task class (Exercise 3)
    markCompleted() {
        this.completed = true;
    }
    showDetails() {
        console.log(`Task: ${this.title} | Completed: ${this.completed}`);
    }
}
// Example usage to test Task class (Exercise 1 & 3)
const task1 = new Task('Complete assignment', false);
task1.showDetails();
task1.markCompleted();
task1.showDetails();
console.log(task1);
// Display function to add tasks to HTML (Exercise 2)
function displayTask(task) {
    const taskList = document.getElementById('task-list');
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
                if (task.completed) {
                    taskElement.classList.add('completed');
                }
                taskList.appendChild(taskElement);
            }
        });
    }
}
// Add task function (Exercise 4)
function addTask(title) {
    const newTask = new Task(title, false);
    tasks.push(newTask);
    displayTasks(tasks);
}
// Event listener for form submission to add new task (Exercise 4)
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
// Event listeners for filter buttons (Bonus Task)
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
// Initial display of tasks (Exercise 4)
displayTasks(tasks);
