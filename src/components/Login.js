// Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = () => {
    if (validateEmail(email) && validatePassword(password)) {
      onLogin(email);
      onClose();
    } else {
      setErrorMessage('Please enter a valid email and password (password should be at least 6 characters).');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-transparent mt-5">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              <button onClick={handleLogin} className="btn btn-primary btn-block mt-4">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
