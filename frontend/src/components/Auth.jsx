import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear any previous errors when switching modes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error before submitting

    // Basic form validation
    if (!email || !password) {
      setError('Email and password are required!');
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
      const url = isLogin
        ? 'http://localhost:3000/api/auth/login'
        : 'http://localhost:3000/api/auth/signup';

      const response = await axios.post(url, { email, password });

      console.log(isLogin ? 'Login successful:' : 'Sign Up successful:', response.data);
      // Optionally, redirect user after successful login/signup
    } catch (error) {
      setError('There was an error with the authentication!');
      console.error('Authentication error:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button onClick={toggleMode} className="toggle-mode-btn">
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Auth;
