import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';  // Import useAuth hook
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  
  const { login } = useAuth();  // Use the custom hook
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page user tried to access or default to profile
  const from = location.state?.from?.pathname || '/profile';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate login (in real app, you'd validate with server)
    if (formData.password.length < 3) {
      setError('Password must be at least 3 characters');
      return;
    }

    // Login successful
    login(formData.username);
    
    // Redirect to the page they tried to visit
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Access Protected Routes</h2>
        <p className="demo-note">Demo: Use any username and password (min 3 chars)</p>
        
        {location.state?.from && (
          <div className="redirect-message">
            <p>🔒 You need to login to access: <strong>{location.state.from.pathname}</strong></p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-info">
          <h4>Protected Routes Demo:</h4>
          <ul>
            <li>✅ /profile - Profile Details (nested route)</li>
            <li>✅ /profile/settings - Profile Settings (nested route)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;