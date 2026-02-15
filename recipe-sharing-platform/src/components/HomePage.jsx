import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load recipe data from JSON file
    const fetchRecipes = async () => {
      try {
        const response = await import('../data.json');
        setRecipes(response.default);
        setLoading(false);
      } catch (err) {
        setError('Failed to load recipes. Please try again later.');
        setLoading(false);
        console.error('Error loading recipes:', err);
      }
    };

    // Simulate network delay for better UX
    setTimeout(fetchRecipes, 800);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600 text-lg">Loading delicious recipes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
          <p className="font-semibold">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Discover Delicious Recipes
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our collection of hand-picked recipes from around the world
        </p>
      </div>

      {/* Recipe Count */}
      <div className="mb-6 text-gray-600">
        Showing {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'}
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Empty State */}
      {recipes.length === 0 && !loading && (
        <div className="text-center py-16">
          <svg 
            className="mx-auto h-24 w-24 text-gray-400 mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
            />
          </svg>
          <p className="text-gray-500 text-xl">No recipes found.</p>
          <p className="text-gray-400 mt-2">Check back later for new recipes!</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;