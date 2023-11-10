import React, { useState } from 'react';

const SignUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    dob: '',
    mobile: '',
    reEnterPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.reEnterPassword) {
      newErrors.reEnterPassword = 'Passwords do not match';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      console.log('Form is valid:', formData);
      onClose();
    } else {
      console.log('Form contains validation errors.');
    }
  };

  return (
    <div className="signup-modal" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '5px', width: '100%', margin: 'auto', color: 'white' }}>
      <h2 className="text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '1px solid white', color: 'white' }}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '1px solid white', color: 'white' }}
          />
          {errors.username && <div className="text-danger">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '1px solid white', color: 'white' }}
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="reEnterPassword" className="form-label">
            Re-enter Password
          </label>
          <input
            type="password"
            id="reEnterPassword"
            className="form-control"
            placeholder="Re-enter your password"
            value={formData.reEnterPassword}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '1px solid white', color: 'white' }}
          />
          {errors.reEnterPassword && <div className="text-danger">{errors.reEnterPassword}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '1px solid white', color: 'white' }}
          />
          {errors.dob && <div className="text-danger">{errors.dob}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            className="form-control"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleInputChange}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderBottom: '1px solid white', color: 'white' }}
          />
          {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
        </div>
        <button type="submit" className="btn btn-primary btn-block" style={{ backgroundColor: 'white', color: '#007bff', border: 'none' }}>
          Sign Up
        </button>
      </form>
      <div className="text-center mt-3">
        <span className="close-button" onClick={onClose} style={{ cursor: 'pointer' }}>
          Close
        </span>
      </div>
    </div>
  );
};

export default SignUp;
