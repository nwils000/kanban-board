import SearchFilterBar from './SearchFilterBar';
import { useContext, useState, useEffect } from 'react';
import BoardColumns from './BoardColumns';
import '../styles/Board.css';
import { GlobalTaskData } from '../main';

function Board() {
  const { state } = useContext(GlobalTaskData);
  const [stateToShow, setStateToShow] = useState(state.tasks);
  const [historicalCardsButtonText, setHistoricalCardsButtonText] = useState(
    'Show Historical Cards'
  );

  useEffect(() => {
    setStateToShow(state.tasks);
  }, [state]);

  function toggleText() {
    historicalCardsButtonText === 'Show Historical Cards'
      ? setHistoricalCardsButtonText('Show Current Cards')
      : setHistoricalCardsButtonText('Show Historical Cards');
  }

  function handleButtonPress() {
    toggleText();
    if (stateToShow === state.tasks) {
      setStateToShow(state.historicalCards);
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
          {historicalCardsButtonText}
        </button>
        <SearchFilterBar />
        <BoardColumns stateToShow={stateToShow} />
      </div>
    </div>
  );
}

export default Board;
