import '../styles/TaskCard.css';
import SeverityBadge from './SeverityBadge';
import EditTaskCard from './EditTaskCard';

export default function TaskCard(props) {
  return (
    <>
      {console.log('KEY', props.id)}
      <div className="task-card" onClick={props.handleEditTaskCardPressed}>
        <span>
          #{props.taskNumber} * {props.dateCreated}
        </span>
        <p>{props.title}</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <SeverityBadge />
          <span>{props.storyPoints}</span>
        </div>
      </div>
      <EditTaskCard
        category={props.title}
        editTaskCardDisplay={props.editTaskCardDisplay}
        handleEditTaskCardPressed={props.handleEditTaskCardPressed}
        cardId={props.id}
      />
    </>
  );
}
