import TaskCard from './TaskCard';
import { useState } from 'react';
import AddTaskCard from './AddTaskCard';

export default function Column({ title, tasks }) {
  // console.log('tasks', tasks);
  const [editTaskCardDisplay, setEditTaskCardDisplay] = useState('none');
  const [addTaskCardDisplay, setAddTaskCardDisplay] = useState('none');
  const [displayEditTaskCard, setDisplayEditTaskCard] = useState(true);

  function handleEditTaskCardPressed() {
    editTaskCardDisplay === 'none'
      ? setEditTaskCardDisplay('block')
      : setEditTaskCardDisplay('none');
    // console.log('clicked');
  }
  function handleAddTaskCardPressed() {
    addTaskCardDisplay === 'none'
      ? setAddTaskCardDisplay('block')
      : setAddTaskCardDisplay('none');
    // console.log('clicked');
  }

  function toggleDisplayEditTaskCard() {
    displayEditTaskCard
      ? setDisplayEditTaskCard(false)
      : setDisplayEditTaskCard(true);
  }

  return (
    <div className="board-column" style={{ position: 'relative' }}>
      <div>
        <span>{title}</span>
        <button onClick={handleAddTaskCardPressed}>+</button>
      </div>
      {tasks.map((e) => {
        console.log('ID', e.id);
        return (
          <TaskCard
            displayEditTaskCard={displayEditTaskCard}
            toggleDisplayEditTaskCard={toggleDisplayEditTaskCard}
            category={title}
            key={e.id}
            id={e.id}
            title={e.title}
            dateCreated={e.dateCreated}
            taskNumber={e.taskNumber}
            storyPoints={e.storyPoints}
            editTaskCardDisplay={editTaskCardDisplay}
            handleEditTaskCardPressed={handleEditTaskCardPressed}
            addTaskCardDisplay={addTaskCardDisplay}
            handleAddTaskCardPressed={handleAddTaskCardPressed}
          />
        );
      })}
      <AddTaskCard
        category={title}
        addTaskCardDisplay={addTaskCardDisplay}
        handleAddTaskCardPressed={handleAddTaskCardPressed}
      />
    </div>
  );
}
