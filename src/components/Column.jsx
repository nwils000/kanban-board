import TaskCard from './TaskCard';
import { useState } from 'react';
import AddTaskCard from './AddTaskCard';
import EditTaskCard from './EditTaskCard';

export default function Column({ title, tasks }) {
  console.log('tasks', tasks);
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
      {tasks.map((e) => {
        return (
          <TaskCard
            category={title}
            key={e.id}
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
      <EditTaskCard
        category={title}
        editTaskCardDisplay={editTaskCardDisplay}
        handleEditTaskCardPressed={handleEditTaskCardPressed}
      />
      <AddTaskCard
        category={title}
        addTaskCardDisplay={addTaskCardDisplay}
        handleAddTaskCardPressed={handleAddTaskCardPressed}
      />
    </div>
  );
}
