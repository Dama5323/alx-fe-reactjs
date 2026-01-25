import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      
      {/* Search and Filters */}
      <SearchBar />
      
      {/* Results Count */}
      <div className="results-info">
        {searchTerm && (
          <p>Showing results for: "{searchTerm}"</p>
        )}
        <p>Found {filteredRecipes.length} recipes</p>
      </div>
      
      {/* Recipes Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="no-results">
          <p>No recipes match your search criteria. Try different filters!</p>
        </div>
      ) : (
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className="recipe-card">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
                  <span>⏱️ {recipe.cookingTime} min</span>
                  <span className={`difficulty-badge ${recipe.difficulty.toLowerCase()}`}>
                    {recipe.difficulty}
                  </span>
                  <span className="category-badge">{recipe.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;