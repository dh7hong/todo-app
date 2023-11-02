import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ items, onDelete, onToggleStatus }) {
  return (
    <div>
      {items.map(item => (
        <TodoItem key={item.id} item={item} onDelete={onDelete} onToggleStatus={onToggleStatus} />
      ))}
    </div>
  );
}

export default TodoList;
