import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { IoLockClosedOutline,IoPersonCircleOutline } from "react-icons/io5";


function Login() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Login</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div style={{display: 'flex'}}>
              <span className="close-button" onClick={closeModal} size={30}>
                &times;
              </span>
            </div>
            <h2>Login to continue</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username:</label>
              <div className='login-input-form'>
                <IoPersonCircleOutline size={25} className='login-icon' />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder='johndoe@123'
                  className='login-input'
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <label htmlFor="password">Password:</label>
              
              <div className='login-input-form'>
                <IoLockClosedOutline size={25} className='login-icon'/>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password must be atleast 6 characters'
                  className='login-input'
                  required
                />
              </div>
              <Link to="/reset-password" className="forgot-password">
                Forgot Password?
              </Link>
              <input type="submit" value="Login" />
            </form>
            <div className="additional-options">
              Don't have an account?
              <Link to="/signup" className="signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;