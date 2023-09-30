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
        <h3>Create your employer account right now</h3>
        <form onSubmit={handleCompanySignup}>
          <label htmlFor="companyName">Company Name:</label>
          <div className='signup-input-form'>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              className='signup-input'
              placeholder='WebWorkWave Inc.'
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <label htmlFor="companyEmail">Email:</label>
          <div className='signup-input-form'>

            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={email}
              className='signup-input'
              placeholder='johndoe123@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label htmlFor="companyContact">Contact Number:</label>
          <div className='signup-input-form'>

            <input
              type="tel"
              id="companyContact"
              name="companyContact"
              value={contactNumber}
              className='signup-input'
              placeholder='09123456789'
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          <label htmlFor="companyPassword">Password:</label>
          <div className='signup-input-form'>

            <input
              type="password"
              id="companyPassword"
              name="companyPassword"
              value={password}
              className='signup-input'
              placeholder='Password must be atleast 6 characters'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <label htmlFor="companyConfirmPassword">Confirm Password:</label>
          <div className='signup-input-form'>

            <input
              type="password"
              id="companyConfirmPassword"
              name="companyConfirmPassword"
              value={confirmPassword}
              className='signup-input'
              placeholder='Password must match'
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className='signup-info'>
        <h1>Find a <span style={{color: "#3498db"}}>job fast</span> with <br/> WebWorkWave</h1>
        <img src="https://th.bing.com/th/id/OIP.W9jm3do9gp-Byyk7EZauewHaE8?pid=ImgDet&rs=1" className='signup-background' alt='background'/>
        <div className="additional-options">
          Looking for work instead? 
          <Link to="/signup/job-seeker" className="click">
            Click here.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupCompany;