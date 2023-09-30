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
        <h3>Be WebWorkWave's Candidate</h3>
        <form onSubmit={handleSignup}>
          <div className='signup-name-header-form'>
            <div>
            <label htmlFor="firstName">First Name:</label>
            <div className='signup-input-form'>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                className='signup-input'
                placeholder='John'
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <div className='signup-input-form'>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  className='signup-input'
                  placeholder='Doe'
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <label htmlFor="jobSeekerEmail">Email:</label>
          <div className='signup-input-form'>

            <input
              type="email"
              id="jobSeekerEmail"
              name="jobSeekerEmail"
              value={email}
              className='signup-input'
              placeholder='johndoe123@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <div className='signup-input-form'>

            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={contactNumber}
              className='signup-input'
              placeholder='09123456789'
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          <label htmlFor="jobSeekerPassword">Password:</label>
          <div className='signup-input-form'>

            <input
              type="password"
              id="jobSeekerPassword"
              name="jobSeekerPassword"
              value={password}
              className='signup-input'
              placeholder='Password must be atleast 6 characters'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <label htmlFor="jobSeekerConfirmPassword">Confirm Password:</label>
          <div className='signup-input-form'>

            <input
              type="password"
              id="jobSeekerConfirmPassword"
              name="jobSeekerConfirmPassword"
              value={confirmPassword}
              className='signup-input'
              placeholder='Password must match'
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {/* You can add more job seeker fields here */}
          <button type="submit">Sign Up</button>
        </form>
      </div>    
      <div className='signup-info'>
        <h1>Find a <span style={{color: "#3498db"}}>job fast</span> with <br/> WebWorkWave</h1>
        <img src="https://th.bing.com/th/id/OIP.W9jm3do9gp-Byyk7EZauewHaE8?pid=ImgDet&rs=1" className='signup-background' alt='background'/>
        <div className="additional-options">
          Looking for work instead? 
          <Link to="/signup/company" className="click">
            Click here.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupJobSeeker;