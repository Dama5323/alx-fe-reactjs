import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Advanced Routing Demo</h1>
      <p className="subtitle">
        This application demonstrates advanced routing techniques using React Router
      </p>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>📍 Nested Routes</h3>
          <p>Profile section contains nested routes for details and settings, allowing for organized sub-sections.</p>
          <Link to="/profile" className="feature-link">View Profile →</Link>
        </div>
        
        <div className="feature-card">
          <h3>🔒 Protected Routes</h3>
          <p>Profile pages require authentication. Unauthorized users are redirected to login.</p>
          <Link to="/profile" className="feature-link">Try Protected Route →</Link>
        </div>
        
        <div className="feature-card">
          <h3>🔄 Dynamic Routes</h3>
          <p>Blog posts use dynamic routing with URL parameters (e.g., /post/1, /post/2).</p>
          <Link to="/post/1" className="feature-link">View Sample Post →</Link>
        </div>
      </div>

      <div className="demo-section">
        <h2>Quick Demo Links</h2>
        <div className="demo-links">
          <Link to="/post/1" className="demo-link">Post 1</Link>
          <Link to="/post/2" className="demo-link">Post 2</Link>
          <Link to="/post/3" className="demo-link">Post 3</Link>
          <Link to="/post/4" className="demo-link">Post 4 (404)</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;