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
      ? setEditTaskCardDisplay('flex')
      : setEditTaskCardDisplay('none');
    // console.log('clicked');
  }

  return (
    <>
      {console.log('KEY', props.id)}
      <div className="task-card">
        <div onClick={handleEditTaskCardPressed}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              color: 'rgb(183 183 183)',
              fontSize: '.95rem',
            }}
          >
            <span
              style={{
                display: 'flex',
                gap: '10px',
              }}
            >
              <span style={{ color: 'rgb(149 149 149)' }}>
                #{props.taskNumber}
              </span>{' '}
              <span>•</span> <span>{props.dateCreated}</span>
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
            ></span>
          </div>
          <p style={{ fontSize: '1.15rem' }}>{props.title}</p>
          <div
            className="severity-wrapper"
            style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
          >
            <SeverityBadge severityAmount={props.severity} />
            <span>{props.severity}</span>
          </div>
        </div>
        <EditTaskCard
          category={props.category}
          editTaskCardDisplay={editTaskCardDisplay}
          handleEditTaskCardPressed={handleEditTaskCardPressed}
          cardId={props.id}
          taskTitle={props.title}
          taskSeverity={props.severity}
        />
      </div>
    </>
  );
}
