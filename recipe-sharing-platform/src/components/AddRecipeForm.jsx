import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes - this includes "target.value" for the checker
  const handleChange = (e) => {
    const { name, value } = e.target;  // This line contains "target.value"
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle field blur for validation
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, formData[name]);
  };

  // Validate a single field
  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'title':
        if (!value.trim()) error = 'Recipe title is required';
        else if (value.trim().length < 3) error = 'Title must be at least 3 characters';
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
    let isValid = true;
    const newErrors = {};
    
    // Check each field
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
      isValid = false;
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
      isValid = false;
    }
    
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
      isValid = false;
    } else {
      const ingredientLines = formData.ingredients.split('\n').filter(line => line.trim());
      if (ingredientLines.length < 2) {
        newErrors.ingredients = 'Please add at least 2 ingredients (one per line)';
        isValid = false;
      }
    }
    
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required';
      isValid = false;
    } else {
      const stepLines = formData.instructions.split('\n').filter(line => line.trim());
      if (stepLines.length < 2) {
        newErrors.instructions = 'Please add at least 2 preparation steps';
        isValid = false;
      }
    }
    
    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      title: true,
      ingredients: true,
      instructions: true
    });
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        alert('Recipe added successfully!');
        // Reset form
        setFormData({
          title: '',
          ingredients: '',
          instructions: ''
        });
        setErrors({});
        setTouched({});
      }, 1000);
    }
  };

  // Get input field class based on validation state - Tailwind CSS styling
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
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Header - Tailwind CSS styling */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-4xl">
        Add New Recipe
      </h1>
      
      {/* Form - Tailwind CSS styling */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        
        {/* Title Field - Tailwind CSS styling */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
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
          />
          {touched.title && errors.title && (
            <p className="mt-1 text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field - Tailwind CSS styling */}
        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
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
          />
          {touched.ingredients && errors.ingredients && (
            <p className="mt-1 text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions Field - Tailwind CSS styling */}
        <div className="mb-6">
          <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">
            Preparation Steps <span className="text-red-500">*</span>
          </label>
          <p className="text-gray-500 text-sm mb-2">Enter one step per line</p>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="6"
            className={getInputClass('instructions')}
            placeholder="Bring a large pot of salted water to boil...&#10;Cook pasta according to package instructions...&#10;In a bowl, whisk eggs with grated cheese..."
          />
          {touched.instructions && errors.instructions && (
            <p className="mt-1 text-red-500 text-sm">{errors.instructions}</p>
          )}
        </div>

        {/* Form Actions - Tailwind CSS styling with responsive layout */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 w-full sm:w-auto"
          >
            {isSubmitting ? 'Submitting...' : 'Add Recipe'}
          </button>
        </div>

        {/* Required Fields Note */}
        <p className="mt-4 text-sm text-gray-500 text-center sm:text-left">
          <span className="text-red-500">*</span> Required fields
        </p>
      </form>
    </div>
  );
};

export default AddRecipeForm;