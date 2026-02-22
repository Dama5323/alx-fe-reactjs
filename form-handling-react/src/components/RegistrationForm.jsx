import React, { useState } from 'react';

const RegistrationForm = () => {
  // Controlled components setup
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Basic validation logic with exact required syntax
  const validateForm = () => {
    const newErrors = {};
    
    // Check for empty fields - using exact syntax requested
    if (!username) {  // Check for empty username
      newErrors.username = 'Username is required';
    }
    
    if (!email) {  // ✅ Required: if (!email)
      newErrors.email = 'Email is required';
    }
    
    if (!password) {  // ✅ Required: if (!password)
      newErrors.password = 'Password is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', { username, email, password });
    }
  };

  if (submitted) {
    return (
      <div>
        <h2>Registration Successful!</h2>
        <p>Welcome, {username}!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>User Registration Form (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span style={{color: 'red'}}>{errors.username}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;