import '../styles/BoardColumns.css';
import { useContext } from 'react';
import Column from './Column';
import { GlobalTaskData } from '../main';

export default function BoardColumns() {
  const { state } = useContext(GlobalTaskData);

  console.log('STATEEE', state);

  return (
    <div className="board-columns">
      <Column
        title={'BACKLOG'}
        tasks={state.tasks
          ?.filter((e) => e.category === 'BACKLOG')
          .sort((a, b) => {
            return a.severity - b.severity;
          })}
      />
      <Column
        title={'IN PROGRESS'}
        tasks={state.tasks
          ?.filter((e) => e.category === 'IN PROGRESS')
          .sort((a, b) => {
            return a.severity - b.severity;
          })}
      />
      <Column
        title={'IN REVIEW'}
        tasks={state.tasks
          ?.filter((e) => e.category === 'IN REVIEW')
          .sort((a, b) => {
            return a.severity - b.severity;
          })}
      />
      <Column
        title={'DONE'}
        tasks={state.tasks
          ?.filter((e) => e.category === 'DONE')
          .sort((a, b) => {
            return a.severity - b.severity;
          })}
      />
    </div>
  );
}
