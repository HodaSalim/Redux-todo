import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Task({ task }) {
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(task.description);
  const [isDone, setIsDone] = useState(task.isDone);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, description, isDone } });
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
          <label>
            <input type="checkbox" checked={isDone} onChange={(event) => setIsDone(event.target.checked)} />
            Done
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{description}</span>
          <label>
            <input type="checkbox" checked={isDone} onChange={(event) => setIsDone(event.target.checked)} />
            Done
          </label>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Task;
