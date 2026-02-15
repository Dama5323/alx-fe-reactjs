import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now
    const mockRecipes = [
      {
        id: 1,
        title: "Spaghetti Carbonara",
        summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
        image: "https://via.placeholder.com/300x200",
        prepTime: "25 mins",
        difficulty: "Medium"
      },
      {
        id: 2,
        title: "Chicken Tikka Masala",
        summary: "Chunks of grilled chicken in a smooth buttery & creamy tomato based gravy.",
        image: "https://via.placeholder.com/300x200",
        prepTime: "45 mins",
        difficulty: "Medium"
      },
      {
        id: 3,
        title: "Classic Pancakes",
        summary: "Fluffy, golden breakfast pancakes perfect for weekend mornings.",
        image: "https://via.placeholder.com/300x200",
        prepTime: "20 mins",
        difficulty: "Easy"
      },
      {
        id: 4,
        title: "Caesar Salad",
        summary: "Crisp romaine lettuce, crunchy croutons, and shaved parmesan cheese.",
        image: "https://via.placeholder.com/300x200",
        prepTime: "15 mins",
        difficulty: "Easy"
      }
    ];

    setTimeout(() => {
      setRecipes(mockRecipes);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Discover Recipes</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{recipe.prepTime}</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">{recipe.difficulty}</span>
              </div>
              <button className="mt-4 w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg transition-colors">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;