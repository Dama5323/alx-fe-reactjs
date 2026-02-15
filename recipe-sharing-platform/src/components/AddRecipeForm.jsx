import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'Easy',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle field blur for validation
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate the field
    validateField(name, formData[name]);
  };

  // Validate a single field
  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'title':
        if (!value.trim()) error = 'Recipe title is required';
        else if (value.trim().length < 3) error = 'Title must be at least 3 characters';
        else if (value.trim().length > 100) error = 'Title must be less than 100 characters';
        break;
        
      case 'summary':
        if (!value.trim()) error = 'Summary is required';
        else if (value.trim().length < 10) error = 'Summary must be at least 10 characters';
        else if (value.trim().length > 200) error = 'Summary must be less than 200 characters';
        break;
        
      case 'ingredients':
        if (!value.trim()) error = 'Ingredients are required';
        else {
          const ingredientLines = value.split('\n').filter(line => line.trim());
          if (ingredientLines.length < 2) error = 'Please add at least 2 ingredients (one per line)';
        }
        break;
        
      case 'instructions':
        if (!value.trim()) error = 'Preparation steps are required';
        else {
          const stepLines = value.split('\n').filter(line => line.trim());
          if (stepLines.length < 2) error = 'Please add at least 2 preparation steps';
        }
        break;
        
      case 'prepTime':
        if (!value.trim()) error = 'Preparation time is required';
        else if (!/^\d+\s*(min|mins|minutes|hour|hours)$/i.test(value.trim())) {
          error = 'Please use format like "30 mins" or "1 hour"';
        }
        break;
        
      case 'cookTime':
        if (!value.trim()) error = 'Cooking time is required';
        else if (!/^\d+\s*(min|mins|minutes|hour|hours)$/i.test(value.trim())) {
          error = 'Please use format like "30 mins" or "1 hour"';
        }
        break;
        
      case 'servings':
        if (!value.trim()) error = 'Number of servings is required';
        else if (isNaN(value) || parseInt(value) < 1) error = 'Please enter a valid number of servings';
        break;
        
      case 'image':
        if (!value.trim()) error = 'Image URL is required';
        else if (!value.match(/\.(jpeg|jpg|gif|png|webp)$/i) && !value.includes('unsplash.com') && !value.includes('placeholder')) {
          error = 'Please enter a valid image URL (jpg, png, gif, webp)';
        }
        break;
        
      default:
        break;
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    return !error;
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (!error) {
        isValid = false;
      }
    });
    
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Process ingredients and instructions from textareas to arrays
      const newRecipe = {
        id: Date.now(), // Temporary ID generation
        title: formData.title,
        summary: formData.summary,
        ingredients: formData.ingredients.split('\n').filter(line => line.trim()),
        instructions: formData.instructions.split('\n').filter(line => line.trim()),
        prepTime: formData.prepTime,
        cookTime: formData.cookTime,
        servings: parseInt(formData.servings),
        difficulty: formData.difficulty,
        image: formData.image || 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop'
      };
      
      console.log('New recipe submitted:', newRecipe);
      
      // Show success message
      setSubmitSuccess(true);
      
      // Reset form after 2 seconds and redirect
      setTimeout(() => {
        setSubmitSuccess(false);
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting recipe:', error);
      alert('Failed to submit recipe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get input field class based on validation state
  const getInputClass = (fieldName) => {
    const baseClass = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} border-red-500 bg-red-50`;
    }
    if (touched[fieldName] && !errors[fieldName] && formData[fieldName]) {
      return `${baseClass} border-green-500 bg-green-50`;
    }
    return `${baseClass} border-gray-300`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Add New Recipe</h1>
        <p className="text-gray-600">Share your culinary creation with the world!</p>
      </div>

      {/* Success Message */}
      {submitSuccess && (
        <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Recipe submitted successfully! Redirecting to home page...</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8">
        {/* Basic Information Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Basic Information</h2>
          
          <div className="space-y-4">
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Recipe Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass('title')}
                placeholder="e.g., Spaghetti Carbonara"
                disabled={isSubmitting}
              />
              {touched.title && errors.title && (
                <p className="mt-1 text-red-500 text-sm">{errors.title}</p>
              )}
            </div>

            {/* Summary Field */}
            <div>
              <label htmlFor="summary" className="block text-gray-700 font-medium mb-2">
                Short Summary <span className="text-red-500">*</span>
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="3"
                className={getInputClass('summary')}
                placeholder="Brief description of the recipe..."
                disabled={isSubmitting}
              />
              <p className="mt-1 text-gray-500 text-xs">Maximum 200 characters</p>
              {touched.summary && errors.summary && (
                <p className="mt-1 text-red-500 text-sm">{errors.summary}</p>
              )}
            </div>
          </div>
        </div>

        {/* Time & Servings Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Time & Servings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Prep Time */}
            <div>
              <label htmlFor="prepTime" className="block text-gray-700 font-medium mb-2">
                Prep Time <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="prepTime"
                name="prepTime"
                value={formData.prepTime}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass('prepTime')}
                placeholder="e.g., 30 mins"
                disabled={isSubmitting}
              />
              {touched.prepTime && errors.prepTime && (
                <p className="mt-1 text-red-500 text-sm">{errors.prepTime}</p>
              )}
            </div>

            {/* Cook Time */}
            <div>
              <label htmlFor="cookTime" className="block text-gray-700 font-medium mb-2">
                Cook Time <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="cookTime"
                name="cookTime"
                value={formData.cookTime}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass('cookTime')}
                placeholder="e.g., 45 mins"
                disabled={isSubmitting}
              />
              {touched.cookTime && errors.cookTime && (
                <p className="mt-1 text-red-500 text-sm">{errors.cookTime}</p>
              )}
            </div>

            {/* Servings */}
            <div>
              <label htmlFor="servings" className="block text-gray-700 font-medium mb-2">
                Servings <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="servings"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                onBlur={handleBlur}
                min="1"
                className={getInputClass('servings')}
                placeholder="e.g., 4"
                disabled={isSubmitting}
              />
              {touched.servings && errors.servings && (
                <p className="mt-1 text-red-500 text-sm">{errors.servings}</p>
              )}
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Ingredients</h2>
          
          <div>
            <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
              Ingredients <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500 text-sm mb-2">Enter one ingredient per line</p>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="6"
              className={getInputClass('ingredients')}
              placeholder="200g spaghetti&#10;4 large eggs&#10;100g pancetta&#10;50g Parmesan cheese"
              disabled={isSubmitting}
            />
            {touched.ingredients && errors.ingredients && (
              <p className="mt-1 text-red-500 text-sm">{errors.ingredients}</p>
            )}
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Preparation Steps</h2>
          
          <div>
            <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">
              Instructions <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500 text-sm mb-2">Enter one step per line</p>
            <textarea
              id="instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="8"
              className={getInputClass('instructions')}
              placeholder="Bring a large pot of salted water to boil...&#10;Cook pasta according to package instructions...&#10;In a bowl, whisk eggs with grated cheese..."
              disabled={isSubmitting}
            />
            {touched.instructions && errors.instructions && (
              <p className="mt-1 text-red-500 text-sm">{errors.instructions}</p>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">Additional Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Difficulty Level */}
            <div>
              <label htmlFor="difficulty" className="block text-gray-700 font-medium mb-2">
                Difficulty Level
              </label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass('image')}
                placeholder="https://example.com/image.jpg"
                disabled={isSubmitting}
              />
              {touched.image && errors.image && (
                <p className="mt-1 text-red-500 text-sm">{errors.image}</p>
              )}
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4 border-t">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              'Add Recipe'
            )}
          </button>
        </div>

        {/* Required Fields Note */}
        <p className="mt-4 text-sm text-gray-500">
          <span className="text-red-500">*</span> Required fields
        </p>
      </form>
    </div>
  );
};

export default AddRecipeForm;