import { useContext } from 'react';
import { GlobalTaskData } from '../main';
import { useState } from 'react';

export default function EditTaskCard({
  editTaskCardDisplay,
  handleEditTaskCardPressed,
  cardId,
}) {
  const { state, dispatch } = useContext(GlobalTaskData);
  const [title, setTitle] = useState('');
  const [storyPoints, setStoryPoints] = useState(0);

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
        value={storyPoints}
        onChange={(e) => {
          setStoryPoints(e.target.value);
        }}
      />
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
              storyPoints: storyPoints,
              //category: category,
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
