"use strict";
function displayTasks(tasks, completedFilter = 'all') {
    const taskList = document.getElementById('task-list');
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
