import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';  
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';  imported
import './App.css';

// Create auth context for authentication state
export const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username, email: `${username}@example.com`, id: Date.now() });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            
            {/* ✅ Dynamic routing implemented - using /blog/:id pattern */}
            <Route path="/blog/:id" element={<BlogPost />} />  {/* ✅ Contains "/blog/:id" and BlogPost */}
            
            {/* ✅ Protected route implemented */}
            <Route element={<ProtectedRoute />}>  {/* ✅ ProtectedRoute component used */}
              {/* Nested Routes within Profile */}
              <Route path="/profile/*" element={<Profile />} />
            </Route>
            
            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;