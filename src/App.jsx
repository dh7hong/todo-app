import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (title && description) {
      setTodos([...todos, { id: Date.now(), title, description, isFinished: false }]);
      setTitle('');
      setDescription('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodoStatus = (id) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo)));
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <h2>Todo List</h2>
      <TodoList items={todos.filter(todo => !todo.isFinished)} onDelete={deleteTodo} onToggleStatus={toggleTodoStatus} />
      <h2>Finished</h2>
      <TodoList items={todos.filter(todo => todo.isFinished)} onDelete={deleteTodo} onToggleStatus={toggleTodoStatus} />
    </div>
  );
}

export default App;
