import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';
import SignupOptions from './components/SignupOptions';
import SignupJobSeeker from './components/SignupJobSeeker';
import SignupCompany from './components/SignupCompany';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to My App</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/signup" element={<SignupOptions />} />
          <Route path="/signup/job-seeker" element={<SignupJobSeeker />} />
          <Route path="/signup/company" element={<SignupCompany />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;