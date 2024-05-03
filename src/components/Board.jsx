import SearchFilterBar from './SearchFilterBar';
import { useContext, useState, useEffect } from 'react';
import BoardColumns from './BoardColumns';
import '../styles/Board.css';
import { GlobalTaskData } from '../main';

function Board() {
  const { state } = useContext(GlobalTaskData);
  const [stateToShow, setStateToShow] = useState(state.tasks);

  useEffect(() => {
    setStateToShow(state.tasks);
  }, [state]);

  function handleButtonPress() {
    if (stateToShow === state.tasks) {
      setStateToShow(state.historicalTasks);
    } else {
      setStateToShow(state.tasks);
    }
  }

  return (
    <div className="board">
      <div className="board-content" style={{ position: 'relative' }}>
        <h1>Kanban Board</h1>
        <button
          onClick={handleButtonPress}
          className="historical-data-button"
          style={{ position: 'absolute', top: '1.4rem', right: '0' }}
        >
          Show Historical Data
        </button>
        <SearchFilterBar />
        <BoardColumns stateToShow={stateToShow} />
      </div>
    </div>
  );
}

export default Board;
