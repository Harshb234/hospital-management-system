// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle sending a password reset email via API
    alert(`Password reset instructions sent to ${email}`);
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Instructions</button>
      </form>
      <p>
        Remember your password? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
