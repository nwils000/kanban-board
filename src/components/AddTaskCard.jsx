import { useContext } from 'react';
import { GlobalTaskData } from '../main';
import { useState } from 'react';

export default function AddTaskCard({
  addTaskCardDisplay,
  handleAddTaskCardPressed,
}) {
  const { state, dispatch } = useContext(GlobalTaskData);
  const [title, setTitle] = useState('');
  return (
    <div
      style={{
        display: addTaskCardDisplay,
        backgroundColor: 'red',
        height: '12rem',
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
      }}
      className="edit-task-card"
      onClick={handleAddTaskCardPressed}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: 'ADD_TASK',
            task: {
              title: title,
              index: state.tasks.length + 1,
            },
          });
        }}
      >
        add task
      </button>
      {state?.tasks[0]?.taskNumber}
      {state?.tasks[1]?.taskNumber}
      {state?.tasks[2]?.taskNumber}
      {console.log('stateTasks', state?.tasks[0]?.title)}
    </div>
  );
}
