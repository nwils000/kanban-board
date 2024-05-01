export default function EditTaskCard({
  editTaskCardDisplay,
  handleEditTaskCardPressed,
}) {
  return (
    <div
      style={{
        display: editTaskCardDisplay,
        backgroundColor: 'red',
        height: '12rem',
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
      }}
      className="edit-task-card"
      onClick={handleEditTaskCardPressed}
    >
      Edit Task Card
    </div>
  );
}
