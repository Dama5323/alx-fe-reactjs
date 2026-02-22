import React, { useState } from 'react';

const RegistrationForm = () => {
  // Controlled components setup with individual useState hooks
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Basic validation logic - check that no fields are left empty
  const validateForm = () => {
    const newErrors = {};
    
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    
    if (!password.trim()) {
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
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}  // ✅ Required: value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span style={{color: 'red'}}>{errors.username}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}  // ✅ Required: value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}  // ✅ Required: value={password}
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