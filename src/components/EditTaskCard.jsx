import { useContext } from 'react';
import { GlobalTaskData } from '../main';
import { useState } from 'react';

export default function EditTaskCard({
  editTaskCardDisplay,
  handleEditTaskCardPressed,
  cardId,
  category,
}) {
  const { state, dispatch } = useContext(GlobalTaskData);
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [severity, setSeverity] = useState(0);
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
      <span onClick={handleEditTaskCardPressed}>X</span>
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
      {console.log('selected category', selectedCategory)}
      <select
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

      {/* {console.log('stateTasks', state?.tasks[0]?.title)} */}
    </div>
  );
}
