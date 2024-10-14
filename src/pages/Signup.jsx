import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    // Basic email pattern validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    // Check for empty fields
    if (!username || !email || !password || !confirmPassword) {
      toast.error('All fields are required!', { position: 'top-right', autoClose: 3000 });
      return;
    }

    // Email format validation
    if (!validateEmail(email)) {
      toast.error('Invalid email format!', { position: 'top-right', autoClose: 3000 });
      return;
    }

    // Password length validation
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long!', { position: 'top-right', autoClose: 3000 });
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!', { position: 'top-right', autoClose: 3000 });
      return;
    }

    // If validation passes, disable the button and proceed
    setIsSubmitting(true);
    toast.success('Sign-up successful!', { position: 'top-right', autoClose: 2000 });

    // Simulate a small delay before navigating
    setTimeout(() => {
      setFormData({ username: '', email: '', password: '', confirmPassword: '' }); // Clear the form
      navigate('/login'); // Navigate to the login page
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-5 rounded-lg shadow-md">
          <div className="flex justify-center mt-4 mb-5">
            <img alt="our brand" src={logo} className="h-10 w-auto mt-5" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Online Application Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-600 font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795]"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-600 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795]"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-600 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C795]"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-[#00C795] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#008866] transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-[#00C795] font-semibold hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
