import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignupJobSeeker() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle job seeker registration here
  };

  return (
    <div className="signup-container">
      <div className="signup-option">
        <h2>I am looking for work</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {/* Add input fields for job seeker registration */}
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="jobSeekerEmail">Email:</label>
          <input
            type="email"
            id="jobSeekerEmail"
            name="jobSeekerEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
          <label htmlFor="jobSeekerPassword">Password:</label>
          <input
            type="password"
            id="jobSeekerPassword"
            name="jobSeekerPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="jobSeekerConfirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="jobSeekerConfirmPassword"
            name="jobSeekerConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {/* You can add more job seeker fields here */}
          <button type="submit">Sign Up</button>
        </form>
      </div>    
      <div className="additional-options">
        <Link to="/signup/company" className="looking-for-work">
          Looking for work instead? Click here.
        </Link>
      </div>
    </div>
  );
}

export default SignupJobSeeker;