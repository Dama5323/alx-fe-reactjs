import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // ✅ Test 1: Initial Render Test
  test('renders todo list with initial todos', () => {
    render(<TodoList />);
    
    // Check if the component title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
    
    // Check if the todo that should be completed has strikethrough class
    const completedTodo = screen.getByText('Write tests');
    expect(completedTodo).toHaveClass('completed');
    
    // Check if form elements are present
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list')).toBeInTheDocument();
    
    // Check if stats are rendered correctly
    const stats = screen.getByTestId('todo-stats');
    expect(stats).toHaveTextContent('Total: 4');
    expect(stats).toHaveTextContent('Completed: 1');
    expect(stats).toHaveTextContent('Pending: 3');
  });

  // ✅ Test 2: Adding Todos
  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    // Get initial todo count
    const initialTodos = screen.getAllByRole('listitem').length;
    
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
    
    // Check if todo count increased
    expect(screen.getAllByRole('listitem').length).toBe(initialTodos + 1);
    
    // Check if stats updated
    const stats = screen.getByTestId('todo-stats');
    expect(stats).toHaveTextContent('Total: 5');
    expect(stats).toHaveTextContent('Pending: 4');
  });

  // ✅ Test 3: Adding Empty Todo
  test('does not add empty todo when form is submitted', () => {
    render(<TodoList />);
    
    const initialTodos = screen.getAllByRole('listitem').length;
    
    // Get input and button
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    // Try to add empty todo (spaces only)
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

  // ✅ Test 4: Toggling Todos (by clicking on text)
  test('toggles todo completion status when text is clicked', () => {
    render(<TodoList />);
    
    // Find the first todo text (which is not already completed)
    const todoText = screen.getByText('Learn React');
    
    // Initially not completed
    expect(todoText).not.toHaveClass('completed');
    
    // Click to toggle
    fireEvent.click(todoText);
    
    // Should now be completed
    expect(todoText).toHaveClass('completed');
    
    // Click again to toggle back
    fireEvent.click(todoText);
    
    // Should not be completed again
    expect(todoText).not.toHaveClass('completed');
  });

  // ✅ Test 5: Toggling Todos (by clicking on checkbox)
  test('toggles todo completion status when checkbox is clicked', () => {
    render(<TodoList />);
    
    // Find the first todo item
    const todoItems = screen.getAllByRole('listitem');
    const firstTodo = todoItems[0];
    
    // Get checkbox and text within this todo
    const checkbox = within(firstTodo).getByRole('checkbox');
    const todoText = within(firstTodo).getByText('Learn React');
    
    // Initially not checked
    expect(checkbox.checked).toBe(false);
    expect(todoText).not.toHaveClass('completed');
    
    // Click checkbox to complete
    fireEvent.click(checkbox);
    
    // Should now be checked
    expect(checkbox.checked).toBe(true);
    expect(todoText).toHaveClass('completed');
  });

  // ✅ Test 6: Deleting Todos
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);
    
    // Get initial count
    const initialTodos = screen.getAllByRole('listitem').length;
    
    // Find delete button for a specific todo
    const todoItems = screen.getAllByRole('listitem');
    const targetTodo = todoItems[0];
    const todoText = within(targetTodo).getByText('Learn React');
    const deleteButton = within(targetTodo).getByText('Delete');
    
    // Click delete button
    fireEvent.click(deleteButton);
    
    // Check if todo was removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Check if total count decreased
    expect(screen.getAllByRole('listitem').length).toBe(initialTodos - 1);
    
    // Check stats updated
    const stats = screen.getByTestId('todo-stats');
    expect(stats).toHaveTextContent(`Total: ${initialTodos - 1}`);
  });

  // ✅ Test 7: Delete Specific Todo
  test('deletes the correct todo when multiple exist', () => {
    render(<TodoList />);
    
    // Add a new todo to test with
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    
    fireEvent.change(input, { target: { value: 'Specific Todo To Delete' } });
    fireEvent.click(addButton);
    
    // Verify the new todo was added
    expect(screen.getByText('Specific Todo To Delete')).toBeInTheDocument();
    
    // Find and delete the specific todo
    const todoItems = screen.getAllByRole('listitem');
    const targetTodo = todoItems.find(todo => 
      within(todo).queryByText('Build a Todo App')
    );
    
    expect(targetTodo).toBeDefined();
    
    if (targetTodo) {
      const deleteButton = within(targetTodo).getByText('Delete');
      fireEvent.click(deleteButton);
    }
    
    // Check that specific todo was deleted
    expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
    
    // Check that other todos remain
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Specific Todo To Delete')).toBeInTheDocument();
  });

  // ✅ Test 8: Form Submission with Enter Key
  test('adds todo when Enter key is pressed', () => {
    render(<TodoList />);
    
    const initialTodos = screen.getAllByRole('listitem').length;
    const input = screen.getByTestId('todo-input');
    
    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(initialTodos + 1);
  });

  // ✅ Test 9: Filter Functionality
  test('filters todos correctly', () => {
    render(<TodoList />);
    
    // Click active filter
    const activeFilter = screen.getByTestId('filter-active');
    fireEvent.click(activeFilter);
    
    // Should only show active todos (not completed)
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
    expect(screen.queryByText('Write tests')).not.toBeInTheDocument(); // This one is completed
    
    // Click completed filter
    const completedFilter = screen.getByTestId('filter-completed');
    fireEvent.click(completedFilter);
    
    // Should only show completed todos
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    
    // Click all filter
    const allFilter = screen.getByTestId('filter-all');
    fireEvent.click(allFilter);
    
    // Should show all todos
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
  });

  // ✅ Test 10: Empty State Message
  test('shows empty message when no todos match filter', () => {
    render(<TodoList />);
    
    // Mark all todos as completed
    const todoItems = screen.getAllByRole('listitem');
    todoItems.forEach(item => {
      const checkbox = within(item).getByRole('checkbox');
      if (!checkbox.checked) {
        fireEvent.click(checkbox);
      }
    });
    
    // Click active filter (should show no todos)
    const activeFilter = screen.getByTestId('filter-active');
    fireEvent.click(activeFilter);
    
    // Should show empty message
    expect(screen.getByTestId('empty-message')).toBeInTheDocument();
    expect(screen.getByText('No active todos found!')).toBeInTheDocument();
  });

  // ✅ Test 11: Stats Update Correctly
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
    const stats = screen.getByTestId('todo-stats');
    expect(stats).toHaveTextContent('Total: 5');
    expect(stats).toHaveTextContent('Completed: 2');
    expect(stats).toHaveTextContent('Pending: 3');
    
    // Delete a todo
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    // Check stats again
    expect(stats).toHaveTextContent('Total: 4');
  });
});