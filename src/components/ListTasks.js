import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTasks() {
  const tasks = useSelector((state) => state.tasks);
  const [showDone, setShowDone] = useState(false);

  const filteredTasks = tasks.filter((task) => (showDone ? task.isDone : !task.isDone));

  return (
    <div>
      <button onClick={() => setShowDone(!showDone)}>
        {showDone ? 'Hide Done' : 'Show Done'}
      </button>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTasks;
