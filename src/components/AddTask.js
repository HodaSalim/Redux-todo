import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: { description } });
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default AddTask;
