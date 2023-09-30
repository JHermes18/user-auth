import React, { useState } from 'react';
import { IoMailOutline} from "react-icons/io5";
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
        <div className='forgot-input-form'>
          <IoMailOutline size={25} className='forgot-icon'/>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className='forgot-input'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Reset Password" />
      </form>
    </div>
  );
}

export default PasswordReset;