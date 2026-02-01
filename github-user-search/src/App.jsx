import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Search />
      </div>
      <footer className="mt-12 text-center text-gray-600 text-sm">
        <p>GitHub User Search Application | Using GitHub API</p>
        <p className="mt-2">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            GitHub API Documentation
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;