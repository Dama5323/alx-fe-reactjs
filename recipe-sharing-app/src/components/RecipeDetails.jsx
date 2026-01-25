import { useParams } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) => 
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return <div className="recipe-details">Recipe not found</div>;
  }

  return (
    <div className="recipe-details">
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <div className="recipe-actions">
          <EditRecipeForm recipe={recipe} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      </div>
      
      <div className="recipe-meta-details">
        <span className="badge">{recipe.category}</span>
        <span>⏱️ {recipe.cookingTime} minutes</span>
        <span>Difficulty: {recipe.difficulty}</span>
      </div>
      
      <div className="recipe-content">
        <div className="recipe-section">
          <h3>Description</h3>
          <p>{recipe.description}</p>
        </div>
        
        <div className="recipe-section">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="recipe-section">
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions?.split('\n').map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;