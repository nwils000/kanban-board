import '../styles/BoardColumns.css';
import { useContext, useState, useEffect } from 'react';
import Column from './Column';
import { GlobalTaskData } from '../main';

export default function BoardColumns() {
  const { state } = useContext(GlobalTaskData);
  // const [backlogTasks, setBacklogTasks] = useState(state.tasks.filter((e) => e.category === 'BACKLOG'))
  // const [inProgressTasks, setInProgressTasks] = useState(state.tasks.filter((e) => e.category === 'IN PROGRESS'))
  // const [inReviewTasks, setInReviewTasks] = useState(state.tasks.filter((e) => e.category === 'IN REVIEW'))
  // const [doneTasks, setDoneTasks] = useState(state.tasks.filter((e) => e.category === 'DONE'))
  // let backlogTasks = state.tasks.filter((e) => e.category === 'BACKLOG');
  // let inProgressTasks = state.tasks.filter((e) => e.category === 'IN PROGRESS');
  // let inReviewTasks = state.tasks.filter((e) => e.category === 'IN REVIEW');
  // let doneTasks = state.tasks.filter((e) => e.category === 'DONE');

  // useEffect(() => {
  //   backlogTasks = state.tasks.filter((e) => e.category === 'BACKLOG');
  //   inProgressTasks = state.tasks.filter((e) => e.category === 'IN PROGRESS');
  //   inReviewTasks = state.tasks.filter((e) => e.category === 'IN REVIEW');
  //   doneTasks = state.tasks.filter((e) => e.category === 'DONE');
  // }, [state]);

  console.log('STATEEE', state);
  console.log('STATEEEEEEEEEEEEEEEEEEEEE', state.tasks.filter((e) => e.category === 'BACKLOG'));
  
  return (
    <div className="board-columns">
      <Column
        title={'BACKLOG'}
        tasks={state.tasks.filter((e) => e.category === 'BACKLOG')}
      />
      <Column
        title={'IN PROGRESS'}
        tasks={state.tasks.filter((e) => e.category === 'IN PROGRESS')}
      />
      <Column
        title={'IN REVIEW'}
        tasks={state.tasks.filter((e) => e.category === 'IN REVIEW')}
      />
      <Column
        title={'DONE'}
        tasks={state.tasks.filter((e) => e.category === 'DONE')}
      />
    </div>
  );
}
