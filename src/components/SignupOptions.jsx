import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-option">
        <h2>I am looking for work</h2>
        <Link to="/signup/job-seeker">
          <button className="user-type-button">Start looking for Jobs</button>
        </Link>
      </div>

      <p className="or-text">OR</p>

      <div className="signup-option">
        <h2>I am looking to hire</h2>
        <Link to="/signup/company">
          <button className="user-type-button">Start looking for a candidate</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
