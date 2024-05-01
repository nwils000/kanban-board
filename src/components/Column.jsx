import TaskCard from './TaskCard';
import { useState } from 'react';

export default function Column({ title }) {
  const [editTaskCardDisplay, setEditTaskCardDisplay] = useState('none');
  const [addTaskCardDisplay, setAddTaskCardDisplay] = useState('none');

  function handleEditTaskCardPressed() {
    editTaskCardDisplay === 'none'
      ? setEditTaskCardDisplay('block')
      : setEditTaskCardDisplay('none');
    console.log('clicked');
  }
  function handleAddTaskCardPressed() {
    addTaskCardDisplay === 'none'
      ? setAddTaskCardDisplay('block')
      : setAddTaskCardDisplay('none');
    console.log('clicked');
  }

  return (
    <div className="board-column">
      <div>
        <span>{title}</span>
        <button onClick={handleAddTaskCardPressed}>+</button>
      </div>
      <TaskCard
        editTaskCardDisplay={editTaskCardDisplay}
        handleEditTaskCardPressed={handleEditTaskCardPressed}
        addTaskCardDisplay={addTaskCardDisplay}
        handleAddTaskCardPressed={handleAddTaskCardPressed}
      />
    </div>
  );
}
