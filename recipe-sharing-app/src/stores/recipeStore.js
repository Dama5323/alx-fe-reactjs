import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRecipeStore = create(
  persist(
    (set, get) => ({
      recipes: [
        { 
          id: 1, 
          title: 'Spaghetti Carbonara', 
          description: 'Classic Italian pasta dish with eggs, cheese, and pancetta',
          ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Pancetta', 'Black Pepper'],
          instructions: 'Cook pasta, mix eggs and cheese, combine with pancetta',
          cookingTime: 30,
          difficulty: 'Medium',
          category: 'Pasta'
        },
        { 
          id: 2, 
          title: 'Chicken Curry', 
          description: 'Spicy chicken curry with aromatic spices',
          ingredients: ['Chicken', 'Onion', 'Garlic', 'Curry Powder', 'Coconut Milk'],
          instructions: 'Sauté onions, add chicken, simmer with spices',
          cookingTime: 45,
          difficulty: 'Easy',
          category: 'Curry'
        },
        { 
          id: 3, 
          title: 'Vegetable Stir Fry', 
          description: 'Fresh vegetables stir-fried in soy sauce',
          ingredients: ['Broccoli', 'Bell Peppers', 'Carrots', 'Soy Sauce', 'Ginger'],
          instructions: 'Stir-fry vegetables, add sauce, serve hot',
          cookingTime: 20,
          difficulty: 'Easy',
          category: 'Vegetarian'
        },
        { 
          id: 4, 
          title: 'Chocolate Lava Cake', 
          description: 'Decadent chocolate cake with a molten center',
          ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour'],
          instructions: 'Melt chocolate, mix ingredients, bake until edges are set',
          cookingTime: 25,
          difficulty: 'Medium',
          category: 'Dessert'
        },
        { 
          id: 5, 
          title: 'Beef Tacos', 
          description: 'Flavorful beef tacos with fresh toppings',
          ingredients: ['Ground Beef', 'Taco Shells', 'Lettuce', 'Tomato', 'Cheese'],
          instructions: 'Cook beef with seasoning, assemble tacos with toppings',
          cookingTime: 20,
          difficulty: 'Easy',
          category: 'Mexican'
        },
        { 
          id: 6, 
          title: 'Caesar Salad', 
          description: 'Classic salad with crisp romaine and creamy dressing',
          ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan', 'Caesar Dressing'],
          instructions: 'Toss lettuce with dressing, top with croutons and cheese',
          cookingTime: 15,
          difficulty: 'Easy',
          category: 'Salad'
        }
      ],
      
      // Favorites
      favorites: [],
      addFavorite: (recipeId) => 
        set((state) => ({ 
          favorites: [...new Set([...state.favorites, recipeId])] 
        })),
      removeFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.filter(id => id !== recipeId)
        })),
      toggleFavorite: (recipeId) =>
        set((state) => {
          const isFavorite = state.favorites.includes(recipeId);
          if (isFavorite) {
            return { favorites: state.favorites.filter(id => id !== recipeId) };
          } else {
            return { favorites: [...state.favorites, recipeId] };
          }
        }),
      isFavorite: (recipeId) => {
        const state = get();
        return state.favorites.includes(recipeId);
      },
      
      // Recommendations
      recommendations: [],
      generateRecommendations: () =>
        set((state) => {
          // Generate recommendations based on favorite categories
          const favoriteRecipes = state.recipes.filter(recipe => 
            state.favorites.includes(recipe.id)
          );
          
          // Get categories from favorites
          const favoriteCategories = favoriteRecipes
            .map(recipe => recipe.category)
            .filter(Boolean);
          
          // Recommend recipes from same categories that aren't already favorites
          const recommended = state.recipes
            .filter(recipe => 
              !state.favorites.includes(recipe.id) &&
              favoriteCategories.includes(recipe.category)
            )
            .slice(0, 3); // Limit to 3 recommendations
          
          return { recommendations: recommended };
        }),
      
      // Search and Filter (from Task 2)
      searchTerm: '',
      selectedCategory: '',
      maxCookingTime: 120,
      difficultyFilter: '',
      setSearchTerm: (term) => set({ searchTerm: term }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setMaxCookingTime: (time) => set({ maxCookingTime: parseInt(time) || 120 }),
      setDifficultyFilter: (difficulty) => set({ difficultyFilter: difficulty }),
      
      // Getters
      get filteredRecipes() {
        const { 
          recipes, 
          searchTerm, 
          selectedCategory, 
          maxCookingTime,
          difficultyFilter 
        } = get();
        
        return recipes.filter(recipe => {
          const matchesSearch = searchTerm === '' || 
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
          
          const matchesCategory = !selectedCategory || recipe.category === selectedCategory;
          const matchesTime = recipe.cookingTime <= maxCookingTime;
          const matchesDifficulty = !difficultyFilter || recipe.difficulty === difficultyFilter;
          
          return matchesSearch && matchesCategory && matchesTime && matchesDifficulty;
        });
      },
      
      get categories() {
        const { recipes } = get();
        const categories = new Set(recipes.map(recipe => recipe.category).filter(Boolean));
        return Array.from(categories);
      },
      
      // CRUD Actions (from Task 1)
      addRecipe: (newRecipe) => 
        set((state) => ({ 
          recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
        })),
        
      updateRecipe: (id, updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map(recipe =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          )
        })),
        
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter(recipe => recipe.id !== id),
          favorites: state.favorites.filter(favId => favId !== id)
        })),
    }),
    {
      name: 'recipe-storage',
      partialize: (state) => ({ 
        recipes: state.recipes,
        favorites: state.favorites 
      })
    }
  )
);

export default useRecipeStore;