// src/app/context/TaskContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Task } from '../interfaces';

interface TaskContextProps {
  tasks: Task[];
  addTask: (title: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Learn TypeScript', completed: false },
    { id: 3, title: 'Build a Project', completed: false },
  ]);

  function addTask(title: string) {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext(): TaskContextProps {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}
