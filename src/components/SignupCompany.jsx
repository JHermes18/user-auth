import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignupCompany() {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCompanySignup = (e) => {
    e.preventDefault();
    // Handle company registration here
  };

  const handleJobSeekerSignup = (e) => {
    e.preventDefault();
    // Handle job seeker registration here
  };

  return (
    <div className="signup-container">
      <div className="signup-option">
        <h2>I am looking to hire</h2>
        <form onSubmit={handleCompanySignup}>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <label htmlFor="companyEmail">Email:</label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="companyContact">Contact Number:</label>
          <input
            type="tel"
            id="companyContact"
            name="companyContact"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <label htmlFor="companyPassword">Password:</label>
          <input
            type="password"
            id="companyPassword"
            name="companyPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="companyConfirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="companyConfirmPassword"
            name="companyConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="additional-options">
        <Link to="/signup/job-seeker" className="looking-for-work">
          Looking for work instead? Click here.
        </Link>
      </div>
    </div>
  );
}

export default SignupCompany;