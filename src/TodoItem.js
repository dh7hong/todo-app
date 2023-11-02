import React from 'react';

function TodoItem({ item, onDelete, onToggleStatus }) {
  return (
    <div style={{ margin: '10px', border: '1px solid black', padding: '10px' }}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button onClick={() => onToggleStatus(item.id)}>{item.isFinished ? "Back to Todo" : "Move to Finished"}</button>
    </div>
  );
}

export default TodoItem;
