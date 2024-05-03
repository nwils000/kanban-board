import { useContext } from 'react';
import { GlobalTaskData } from '../main';
import { useState } from 'react';
import '../styles/EditAddTaskCard.css';

export default function EditTaskCard({
  editTaskCardDisplay,
  handleEditTaskCardPressed,
  cardId,
  category,
  taskTitle,
  taskSeverity,
}) {
  const { state, dispatch } = useContext(GlobalTaskData);
  const [title, setTitle] = useState(taskTitle);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [severity, setSeverity] = useState(taskSeverity);
  console.log('THE CAT', category);

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
  console.log('add task');

  return (
    <div
      style={{
        display: editTaskCardDisplay,
        zIndex: '2',
      }}
      className="modal"
    >
      <span
        className="x"
        style={{ alignSelf: 'right', width: 'fit-content', marginLeft: 'auto' }}
        onClick={handleEditTaskCardPressed}
      >
        X
      </span>
      <div className="label-group">
        <label htmlFor="title">Title:</label>
        <input
          maxLength={120}
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="label-group">
        <label htmlFor="severeity">Severity:</label>
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
      <div className="label-group">
        <label htmlFor="categories">Switch&nbsp;Category:</label>
        <select
          id="categories"
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          defaultValue={selectedCategory}
        >
          <option value="BACKLOG">BACKLOG</option>
          <option value="IN PROGRESS">IN PROGRESS</option>
          <option value="IN REVIEW">IN REVIEW</option>
          <option value="DONE">DONE</option>
        </select>
      </div>
      <div>
        <div className="modal-buttons">
          <button
            onClick={() => {
              handleEditTaskCardPressed();
              dispatch({
                type: 'EDIT_TASK',
                task: {
                  id: cardId,
                  title: title,
                  index: state.tasks.length,
                  dateCreated: currentDateAndTime(),
                  severity: severity,
                  category: selectedCategory,
                },
              });
            }}
          >
            Edit Task
          </button>
          <button
            onClick={() => {
              dispatch({
                type: 'DELETE_TASK',
                task: {
                  id: cardId,
                },
              });
            }}
          >
            Remove Task
          </button>
        </div>
      </div>

      {/* {console.log('stateTasks', state?.tasks[0]?.title)} */}
    </div>
  );
}
