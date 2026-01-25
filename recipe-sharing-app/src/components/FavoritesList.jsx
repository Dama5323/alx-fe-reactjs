import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => 
    state.favorites.map(id => 
      state.recipes.find(recipe => recipe.id === id)
    ).filter(Boolean)
  );

  return (
    <div className="favorites-list">
      <div className="section-header">
        <h2>⭐ My Favorite Recipes</h2>
        <span className="count-badge">{favorites.length} recipes</span>
      </div>
      
      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>You haven't added any favorites yet!</p>
          <p>Click the heart icon on recipes you love.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <div className="favorite-card">
                <div className="favorite-header">
                  <h3>{recipe.title}</h3>
                  <span className="remove-favorite">
                    ❤️
                  </span>
                </div>
                <p>{recipe.description}</p>
                <div className="recipe-meta">
                  <span>⏱️ {recipe.cookingTime} min</span>
                  <span className="badge">{recipe.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;