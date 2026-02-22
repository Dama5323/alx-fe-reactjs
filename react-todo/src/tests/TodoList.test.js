import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render Test
  test('renders todo list with initial todos', () => {
    render(<TodoList />);
    
    // Check if the component title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    
    // Check if the third todo is completed (has strikethrough class)
    const completedTodo = screen.getByText('Write tests');
    expect(completedTodo).toHaveClass('completed');
    
    // Check if stats are rendered correctly
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
  });

  // Test 2: Adding Todos
  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    // Get input and button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Simulate user input
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    expect(input.value).toBe('New Test Todo');
    
    // Submit the form
    fireEvent.click(addButton);
    
    // Check if new todo appears in the list
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    
    // Check if input is cleared after submission
    expect(input.value).toBe('');
    
    // Check if stats updated
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Pending: 3')).toBeInTheDocument();
  });

  // Test 3: Adding empty todo
  test('does not add empty todo when form is submitted', () => {
    render(<TodoList />);
    
    const initialTodos = screen.getAllByRole('listitem').length;
    
    // Get input and button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Check that no new todo was added
    expect(screen.getAllByRole('listitem').length).toBe(initialTodos);
    
    // Try with completely empty input
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);
    
    // Check that no new todo was added
    expect(screen.getAllByRole('listitem').length).toBe(initialTodos);
  });

  // Test 4: Toggling Todos
  test('toggles todo completion status when clicked', () => {
    render(<TodoList />);
    
    // Find the first todo text
    const firstTodo = screen.getByText('Learn React');
    
    // Initially not completed
    expect(firstTodo).not.toHaveClass('completed');
    
    // Click to toggle
    fireEvent.click(firstTodo);
    
    // Should now be completed
    expect(firstTodo).toHaveClass('completed');
    
    // Click again to toggle back
    fireEvent.click(firstTodo);
    
    // Should not be completed again
    expect(firstTodo).not.toHaveClass('completed');
    
    // Check stats updated correctly
    const completedCount = screen.getByText(/Completed:/);
    expect(completedCount.textContent).toMatch(/Completed: \d+/);
  });

  // Test 5: Toggling via checkbox
  test('toggles todo completion status when checkbox is clicked', () => {
    render(<TodoList />);
    
    // Find the first todo's checkbox (by test ID or role)
    const todos = screen.getAllByRole('listitem');
    const firstTodoCheckbox = within(todos[0]).getByRole('checkbox');
    const firstTodoText = within(todos[0]).getByText('Learn React');
    
    // Initially not completed
    expect(firstTodoText).not.toHaveClass('completed');
    expect(firstTodoCheckbox.checked).toBe(false);
    
    // Click checkbox to complete
    fireEvent.click(firstTodoCheckbox);
    
    // Should now be completed
    expect(firstTodoText).toHaveClass('completed');
    expect(firstTodoCheckbox.checked).toBe(true);
  });

  // Test 6: Deleting Todos
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Get initial count
    const initialTodos = screen.getAllByRole('listitem').length;
    
    // Find delete button for the first todo
    const todos = screen.getAllByRole('listitem');
    const firstTodoText = within(todos[0]).getByText('Learn React');
    const deleteButton = within(todos[0]).getByText('Delete');
    
    // Click delete button
    fireEvent.click(deleteButton);
    
    // Check if todo was removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Check if total count decreased
    expect(screen.getAllByRole('listitem').length).toBe(initialTodos - 1);
    
    // Check stats updated
    expect(screen.getByText(`Total: ${initialTodos - 1}`)).toBeInTheDocument();
  });

  // Test 7: Delete specific todo
  test('deletes the correct todo when multiple exist', () => {
    render(<TodoList />);
    
    // Add a new todo to test with
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'Specific Todo' } });
    fireEvent.click(addButton);
    
    // Find and delete the middle todo
    const todos = screen.getAllByRole('listitem');
    const targetTodo = todos.find(todo => 
      within(todo).queryByText('Build a Todo App')
    );
    
    if (targetTodo) {
      const deleteButton = within(targetTodo).getByText('Delete');
      fireEvent.click(deleteButton);
    }
    
    // Check that specific todo was deleted
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
    
    // Check that other todos remain
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Specific Todo')).toBeInTheDocument();
  });

  // Test 8: Form submission with Enter key
  test('adds todo when Enter key is pressed', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    
    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
  });

  // Test 9: Stats update correctly
  test('updates stats correctly after multiple operations', () => {
    render(<TodoList />);
    
    // Add a new todo
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'Stats Test Todo' } });
    fireEvent.click(addButton);
    
    // Toggle a todo
    const todoToToggle = screen.getByText('Learn React');
    fireEvent.click(todoToToggle);
    
    // Check stats
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    
    // Delete a todo
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    // Check stats again
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
  });
});