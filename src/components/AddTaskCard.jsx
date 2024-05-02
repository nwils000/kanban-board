import { useContext } from 'react';
import { GlobalTaskData } from '../main';
import { useState } from 'react';
import '../styles/EditAddTaskCard.css';

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
      }}
      className="modal modal-add"
    >
      <span
        className="x"
        style={{ alignSelf: 'right', width: 'fit-content', marginLeft: 'auto' }}
        onClick={handleAddTaskCardPressed}
      >
        X
      </span>
      <div className="label-group">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="label-group">
        <label htmlFor="severity">Severity:</label>
        <input
          id="severity"
          type="number"
          min="0"
          max="10"
          value={severity}
          onChange={(e) => {
            setSeverity(e.target.value);
          }}
        />
      </div>
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
