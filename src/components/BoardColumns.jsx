import '../styles/BoardColumns.css';
import TaskCard from './TaskCard';

export default function BoardColumns() {
  return (
    <div className="board-columns">
      <div className="board-column">
        <p>TO DO {'Amount of todos'}</p>
        <TaskCard />
      </div>
      <div className="board-column">
        <p>IN PROGRESS {'Amount of in progress'}</p>
        <TaskCard />
      </div>
      <div className="board-column">
        <p>IN REVIEW {'Amount of in review'}</p>
        <TaskCard />
      </div>
      <div className="board-column">
        <p>DONE {'Amount of done'}</p>
        <TaskCard />
      </div>
    </div>
  );
}
