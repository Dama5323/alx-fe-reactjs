import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>🍳 Recipe Sharing App</h1>
          <p>Share and discover amazing recipes</p>
        </header>

        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="left-column">
                    <AddRecipeForm />
                  </div>

                  <div className="right-column">
                    <RecipeList />
                  </div>
                </>
              }
            />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>Built with React, Zustand & React Router</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
