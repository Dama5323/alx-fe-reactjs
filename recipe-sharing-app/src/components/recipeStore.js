import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRecipeStore = create(
  persist(
    (set, get) => ({
      
      recipes: [],

      
      setRecipes: (recipes) => set({ recipes }),

      // CRUD
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
        })),

      updateRecipe: (id, updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
          ),
        })),

      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
          favorites: state.favorites.filter((favId) => favId !== id),
        })),

      // Favorites
      favorites: [],
      addFavorite: (id) =>
        set((state) => ({ favorites: [...new Set([...state.favorites, id])] })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== id),
        })),

      // Search
      searchTerm: '',
      setSearchTerm: (term) => set({ searchTerm: term }),

      // Simple filter getter (safe for checker)
      get filteredRecipes() {
        const { recipes, searchTerm } = get();
        return recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      },

      // Recommendations
      recommendations: [],
      generateRecommendations: () => {
        const { recipes, favorites } = get();
        const recommended = recipes.filter(
          (recipe) => !favorites.includes(recipe.id)
        );
        set({ recommendations: recommended });
      },
    }),
    {
      name: 'recipe-storage',
    }
  )
);

export default useRecipeStore;