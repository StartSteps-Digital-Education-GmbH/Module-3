import React from 'react';
import { Task } from '../interfaces';

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
