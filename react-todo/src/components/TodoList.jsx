import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // ✅ Static array for initial todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write tests', completed: true },
    { id: 4, text: 'Master JavaScript', completed: false }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // ✅ Method for adding todos
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // ✅ Method for toggling todos
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // ✅ Method for deleting todos
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Calculate statistics
  const totalTodos = todos.length;
  const completedTodos = todos.filter(t => t.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      
      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="todo-form" data-testid="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
          data-testid="todo-input"
        />
        <button type="submit" className="add-btn" data-testid="add-button">
          Add Todo
        </button>
      </form>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          data-testid="filter-all"
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
          data-testid="filter-active"
        >
          Active
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
          data-testid="filter-completed"
        >
          Completed
        </button>
      </div>

      {/* Todo List */}
      <ul className="todo-list" data-testid="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className="todo-item" data-testid={`todo-item-${todo.id}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
              data-testid={`todo-checkbox-${todo.id}`}
            />
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => toggleTodo(todo.id)}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
              data-testid={`delete-button-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Statistics */}
      <div className="todo-stats" data-testid="todo-stats">
        <span>Total: {totalTodos}</span>
        <span>Completed: {completedTodos}</span>
        <span>Pending: {pendingTodos}</span>
      </div>

      {/* Empty state message */}
      {filteredTodos.length === 0 && (
        <p className="empty-message" data-testid="empty-message">
          No {filter === 'all' ? '' : filter} todos found!
        </p>
      )}
    </div>
  );
};

export default TodoList;