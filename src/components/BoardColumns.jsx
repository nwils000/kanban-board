import '../styles/BoardColumns.css';
import Column from './Column';

export default function BoardColumns({ stateToShow }) {
  console.log('STATEEE', stateToShow);

  return (
    <div className="board-columns">
      <Column
        title={'BACKLOG'}
        tasks={stateToShow
          ?.filter((e) => e.category === 'BACKLOG')
          .sort((a, b) => {
            return a.storyPoints - b.storyPoints;
          })}
      />
      <Column
        title={'IN PROGRESS'}
        tasks={stateToShow
          ?.filter((e) => e.category === 'IN PROGRESS')
          .sort((a, b) => {
            return a.storyPoints - b.storyPoints;
          })}
      />
      <Column
        title={'IN REVIEW'}
        tasks={stateToShow
          ?.filter((e) => e.category === 'IN REVIEW')
          .sort((a, b) => {
            return a.storyPoints - b.storyPoints;
          })}
      />
      <Column
        title={'DONE'}
        tasks={stateToShow
          ?.filter((e) => e.category === 'DONE')
          .sort((a, b) => {
            return a.storyPoints - b.storyPoints;
          })}
      />
    </div>
  );
}
