'use client';

import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import { Task } from './interfaces';

function Home() {
  // Task 2: Initialize tasks state with an empty array
  const [tasks, setTasks] = useState<Task[]>([]);

  // Task 3: Simulate fetching tasks from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Learn TypeScript', completed: false },
        { id: 3, title: 'Build a Project', completed: false },
      ]);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      {/* Task 2: Pass tasks state to TaskList component */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Home;
