import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

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
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input type="submit" value="Login" />
            </form>
            <div className="additional-options">
              <Link to="/reset-password" className="forgot-password">
                Forgot Password?
              </Link>
              <Link to="/signup" className="signup">
                Don't have an account? Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;