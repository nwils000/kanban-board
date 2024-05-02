import '../styles/TaskCard.css';
import { useState, useContext } from 'react';
import SeverityBadge from './SeverityBadge';
import EditTaskCard from './EditTaskCard';
import { GlobalTaskData } from '../main';

export default function TaskCard(props) {
  const { dispatch } = useContext(GlobalTaskData);
  const [editTaskCardDisplay, setEditTaskCardDisplay] = useState('none');
  function handleEditTaskCardPressed() {
    editTaskCardDisplay === 'none'
      ? setEditTaskCardDisplay('block')
      : setEditTaskCardDisplay('none');
    // console.log('clicked');
  }
  return (
    <>
      {console.log('KEY', props.id)}
      <div className="task-card" onClick={handleEditTaskCardPressed}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            #{props.taskNumber} * {props.dateCreated}
          </span>
          <span
            onClick={() => {
              dispatch({
                type: 'DELETE_TASK',
                task: {
                  id: props.id,
                },
              });
            }}
          >
            X
          </span>
        </div>
        <p>{props.title}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <SeverityBadge />
          <span>{props.severity}</span>
        </div>
      </div>
      <EditTaskCard
        category={props.category}
        editTaskCardDisplay={editTaskCardDisplay}
        handleEditTaskCardPressed={handleEditTaskCardPressed}
        cardId={props.id}
      />
    </>
  );
}
