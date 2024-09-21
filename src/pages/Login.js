// src/pages/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Load saved email from localStorage if "Remember Me" was checked
  React.useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication (you can integrate API calls here)
    if (email === 'admin@example.com' && password === 'password') {
      alert('Login successful');
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      navigate('/'); // Redirect to the homepage after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="remember-me">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Forgot your password? <Link to="/forgot-password">Click here</Link>
      </p>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
