import SearchFilterBar from './SearchFilterBar';
import BoardColumns from './BoardColumns';
import '../styles/Board.css';

function Board() {
  return (
    <div className="board">
      <div className="board-content">
        <h1>Kanban Board</h1>
        <SearchFilterBar />
        <BoardColumns />
      </div>
    </div>
  );
}

export default Board;
