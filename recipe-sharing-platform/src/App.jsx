import React from 'react';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">RecipeShare</h1>
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors">
              Add Recipe
            </button>
          </div>
        </div>
      </nav>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;