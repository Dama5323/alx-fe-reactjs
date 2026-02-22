import React from 'react';
import TodoList from './components/TodoList';  // ✅ TodoList imported
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />  {/* ✅ TodoList component used */}
    </div>
  );
}

export default App;