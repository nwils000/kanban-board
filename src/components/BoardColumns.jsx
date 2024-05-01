import '../styles/BoardColumns.css';
import Column from './Column';

export default function BoardColumns() {
  return (
    <div className="board-columns">
      <Column title={'BACKLOG'} />
      <Column title={'IN PROGRESS'} />
      <Column title={'IN REVIEW'} />
      <Column title={'DONE'} />
    </div>
  );
}
