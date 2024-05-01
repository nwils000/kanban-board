export default function AddTaskCard({
  addTaskCardDisplay,
  handleAddTaskCardPressed,
}) {
  return (
    <div
      style={{
        display: addTaskCardDisplay,
        backgroundColor: 'red',
        height: '12rem',
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
      }}
      className="edit-task-card"
      onClick={handleAddTaskCardPressed}
    >
      Add Task Card
    </div>
  );
}
