export default function EditTaskCard({ display, handleTaskCardPressed }) {
  return (
    <div
      style={{
        display: display,
        backgroundColor: 'red',
        height: '12rem',
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
      }}
      className="edit-task-card"
      onClick={handleTaskCardPressed}
    >
      Edit Task Card
    </div>
  );
}
