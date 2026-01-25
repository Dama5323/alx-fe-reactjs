import { useState } from 'react';
import useRecipeStore from '../stores/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients?.join(', ') || '');
  const [instructions, setInstructions] = useState(recipe.instructions || '');
  const [cookingTime, setCookingTime] = useState(recipe.cookingTime || 30);
  const [difficulty, setDifficulty] = useState(recipe.difficulty || 'Medium');
  const [category, setCategory] = useState(recipe.category || '');
  
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    updateRecipe(recipe.id, {
      title,
      description,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
      cookingTime: parseInt(cookingTime),
      difficulty,
      category
    });
    
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button 
        onClick={() => setIsEditing(true)}
        className="edit-btn"
      >
        ✏️ Edit Recipe
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <h3>Edit Recipe</h3>
      
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          required
        />
      </div>

      <div className="form-group">
        <label>Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="3"
        />
      </div>

      <div className="form-group">
        <label>Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows="5"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Cooking Time (minutes)</label>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            min="1"
          />
        </div>

        <div className="form-group">
          <label>Difficulty</label>
          <select 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Pasta, Curry, Dessert"
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="save-btn">
          Save Changes
        </button>
        <button 
          type="button" 
          onClick={() => setIsEditing(false)}
          className="cancel-btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;