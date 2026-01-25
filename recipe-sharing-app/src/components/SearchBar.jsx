import useRecipeStore from '../stores/recipeStore';

const SearchBar = () => {
  const { 
    searchTerm, 
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    maxCookingTime,
    setMaxCookingTime,
    difficultyFilter,
    setDifficultyFilter,
    categories 
  } = useRecipeStore();

  return (
    <div className="search-filters">
      {/* Main Search */}
      <div className="search-group">
        <input
          type="text"
          placeholder="Search recipes by name, description, or ingredients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Advanced Filters */}
      <div className="filter-group">
        <div className="filter-item">
          <label>Category</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label>Max Cooking Time: {maxCookingTime} min</label>
          <input
            type="range"
            min="5"
            max="120"
            step="5"
            value={maxCookingTime}
            onChange={(e) => setMaxCookingTime(e.target.value)}
          />
        </div>

        <div className="filter-item">
          <label>Difficulty</label>
          <select 
            value={difficultyFilter} 
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="">Any Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button 
          onClick={() => {
            setSearchTerm('');
            setSelectedCategory('');
            setMaxCookingTime(120);
            setDifficultyFilter('');
          }}
          className="clear-filters-btn"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default SearchBar;