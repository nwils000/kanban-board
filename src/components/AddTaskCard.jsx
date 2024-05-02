import { useContext } from 'react';
import { GlobalTaskData } from '../main';
import { useState, useEffect } from 'react';

export default function AddTaskCard({
  addTaskCardDisplay,
  handleAddTaskCardPressed,
  category,
}) {
  const { dispatch } = useContext(GlobalTaskData);
  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState(0);

  function currentDateAndTime() {
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    return formattedDate;
  }
  // console.log('add task');

  return (
    <div
      style={{
        display: addTaskCardDisplay,
        backgroundColor: 'red',
        height: '100%',
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        borderRadius: '6px',
      }}
      className="edit-task-card"
    >
      <span onClick={handleAddTaskCardPressed}>X</span>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="number"
        value={severity}
        onChange={(e) => {
          setSeverity(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTaskCardPressed();
          dispatch({
            type: 'ADD_TASK',
            task: {
              title: title,
              dateCreated: currentDateAndTime(),
              severity: severity,
              category: category,
            },
          });
        }}
      >
        add task
      </button>

      {/* {console.log('stateTasks', state?.tasks[0]?.title)} */}
    </div>
  );
}
