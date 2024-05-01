import '../styles/TaskCard.css';
import SeverityBadge from './SeverityBadge';

export default function TaskCard(props) {
  return (
    <div
      className="task-card"
      style={{ position: 'relative' }}
      onClick={props.handleEditTaskCardPressed}
    >
      <span>
        #{props.taskNumber} * {props.dateCreated}
      </span>
      <p>{props.title}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <SeverityBadge />
        <span>{props.storyPoints}</span>
      </div>
    </div>
  );
}
