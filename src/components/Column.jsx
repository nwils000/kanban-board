import TaskCard from './TaskCard';
import { useState } from 'react';
import AddTaskCard from './AddTaskCard';

export default function Column({ title, tasks }) {
  // console.log('tasks', tasks);

  const [addTaskCardDisplay, setAddTaskCardDisplay] = useState('none');

  function handleAddTaskCardPressed() {
    addTaskCardDisplay === 'none'
      ? setAddTaskCardDisplay('flex')
      : setAddTaskCardDisplay('none');
    // console.log('clicked');
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
            category={title}
            key={e.id}
            id={e.id}
            title={e.title}
            dateCreated={e.dateCreated}
            taskNumber={e.taskNumber}
            severity={e.severity}
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
