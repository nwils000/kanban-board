import '../styles/TaskCard.css';
import SeverityBadge from './SeverityBadge';
import EditTaskCard from './EditTaskCard';
import { useState } from 'react';

export default function TaskCard() {
  const [display, setHidden] = useState('block');

  function handleTaskCardPressed() {
    display === 'none' ? setHidden('block') : setHidden('none');
  }

  return (
    <div
      className="task-card"
      style={{ position: 'relative' }}
      onClick={handleTaskCardPressed}
    >
      <span>#100 * 1 May, 3:23 PM</span>
      <p>Task Card</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <SeverityBadge />
        <span>8.8 {'importance level'}</span>
      </div>
      <EditTaskCard
        display={display}
        handleTaskCardPressed={handleTaskCardPressed}
      />
    </div>
  );
}
