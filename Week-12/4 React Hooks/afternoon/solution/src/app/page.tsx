// src/app/page.tsx
'use client'; // This is important to ensure hooks work

import React, { useState, useEffect, useRef } from 'react';
import TaskList from './components/TaskList';
import { Task } from './interfaces';
import { TaskProvider, useTaskContext } from './context/TaskContext';

function Home() {
  // Task 4: Use useContext to access task state and addTask function
  const { tasks, addTask } = useTaskContext();
  const taskInputRef = useRef<HTMLInputElement>(null);

  function handleAddTask() {
    if (taskInputRef.current) {
      addTask(taskInputRef.current.value);
      taskInputRef.current.value = '';
    }
  }

  return (
    <div>
      <h1>Task List</h1>
      <input type="text" ref={taskInputRef} placeholder="New Task" />
      <button onClick={handleAddTask}>Add Task</button>
      {/* Task 2: Pass tasks state to TaskList component */}
      {/* Task 3: Fetch tasks with useEffect */}
      {/* {tasks.map((task) => (
        <TaskList key={task.id} task={task} />
      ))} */}
      <TaskList tasks={tasks} />
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}

export default App;



// Task 2: Initializing tasks state with an array of three dummy tasks
// function Home() {
//   const [tasks, setTasks] = useState<Task[]>([
//     { id: 1, title: 'Learn React', completed: false },
//     { id: 2, title: 'Learn TypeScript', completed: false },
//     { id: 3, title: 'Build a Project', completed: false },
//   ]);

//   return (
//     <div>
//       <h1>Task List</h1>
//       <TaskList tasks={tasks} />
//     </div>
//   );
// }

// Task 3: Fetching tasks with useEffect
// function Home() {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   useEffect(() => {
//     // Simulate API call
//     setTimeout(() => {
//       setTasks([
//         { id: 1, title: 'Learn React', completed: false },
//         { id: 2, title: 'Learn TypeScript', completed: false },
//         { id: 3, title: 'Build a Project', completed: false },
//       ]);
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <h1>Task List</h1>
//       <TaskList tasks={tasks} />
//     </div>
//   );
// }
