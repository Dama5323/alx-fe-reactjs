import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
    setShowConfirm(false);
  };

  return (
    <div className="delete-button">
      {showConfirm ? (
        <div className="confirm-delete">
          <p>Are you sure you want to delete this recipe?</p>
          <div className="confirm-actions">
            <button onClick={handleDelete} className="confirm-btn">
              Yes, Delete
            </button>
            <button 
              onClick={() => setShowConfirm(false)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setShowConfirm(true)}
          className="delete-btn"
        >
          🗑️ Delete Recipe
        </button>
      )}
    </div>
  );
};

export default DeleteRecipeButton;