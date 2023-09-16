import React, { useState } from 'react';
import './PasswordReset.css';

function PasswordReset() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    console.log('Password reset requested for email:', email);
  };

  return (
    <div className="password-reset-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="Reset Password" />
      </form>
    </div>
  );
}

export default PasswordReset;