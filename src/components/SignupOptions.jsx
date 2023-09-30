import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <>
    <h1>We are so glad that you are here!</h1>
    <p>First of all, what do you want to do?</p>
    <div className="signup-container">
      <div className="signup-option">
        <h2>I am looking for work</h2>
        <p>Create a WebWorkWave Account</p>
        <Link to="/signup/job-seeker">
          <button className="user-type-button">Start looking for Jobs</button>
        </Link>
      </div>

      <p className="or-text">OR</p>

      <div className="signup-option">
        <h2>I am looking to hire</h2>
        <p>Create an Organization Accoun</p>
        <Link to="/signup/company">
          <button className="user-type-button">Start looking for a candidate</button>
        </Link>
      </div>
    </div>
    <div>
        Already have an account?
        <Link to="/" className='signin'>Sign in</Link>
      </div>
    </>
  );
}

export default Signup;
