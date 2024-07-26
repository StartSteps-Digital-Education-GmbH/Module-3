'use client'; // This is important to ensure hooks work

import React, { useState } from 'react';
import TaskList from './components/TaskList';
import { Task } from './interfaces';

function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Learn TypeScript', completed: false },
    { id: 3, title: 'Build a Project', completed: false },
  ]);

  return (
    <div>
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Home;
