import '../styles/BoardColumns.css';

export default function BoardColumns() {
  return (
    <div className="board-columns">
      <div className="board-column">TO DO {'Amount of todos'}</div>
      <div className="board-column">IN PROGRESS {'Amount of in progress'}</div>
      <div className="board-column">IN REVIEW {'Amount of in review'}</div>
      <div className="board-column">DONE {'Amount of done'}</div>
    </div>
  );
}
