import '../styles/TaskCard.css';
import SeverityBadge from './SeverityBadge';
import EditTaskCard from './EditTaskCard';
import AddTaskCard from './AddTaskCard';

export default function TaskCard(props) {
  return (
    <div
      className="task-card"
      style={{ position: 'relative' }}
      onClick={props.handleEditTaskCardPressed}
    >
      <span>#100 * 1 May, 3:23 PM</span>
      <p>Task Card</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <SeverityBadge />
        <span>8.8 {'importance level'}</span>
      </div>
      <EditTaskCard
        editTaskCardDisplay={props.editTaskCardDisplay}
        handleTaskCardPressed={props.handleEditTaskCardPressed}
      />
      <AddTaskCard
        addTaskCardDisplay={props.addTaskCardDisplay}
        handleTaskCardPressed={props.handleAddTaskCardPressed}
      />
    </div>
  );
}
