import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';  // Import FontAwesome icons
import logo from "../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .matches(/@creditwave\.ng$/, 'Email must end with @creditwave.ng')
      .required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  // Form submission handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);

    // Simulate a form submission delay (e.g., API call)
    setTimeout(() => {
      toast.success('Sign-up successful!', {
        position: 'top-center',
        autoClose: 3000,
      });

      // Reset form
      resetForm();
      setSubmitting(false);
      setIsSubmitting(false);

      // Navigate to the login page
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-300 flex items-center justify-center p-5" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-scuba-diving-accessories_23-2148515035.jpg?t=st=1729011506~exp=1729015106~hmac=157934a7f3b5046721881a009556dd4605afdeda52b8f8f4c0511e7c116b48c1&w=740")'}}>
        <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8 md:p-8">
          <div className="flex justify-center mb-4">
            <img alt="brand logo" src={logo} className="h-10 w-auto" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">Sign Up</h2>
          <p className="text-center text-gray-600 mb-5">Create your admin account</p>

          <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* Username */}
                <div className="mb-3 relative">
                  <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
                    Username
                  </label>
                  <div className="flex items-center">
                    <span className="absolute pl-3 text-gray-500">
                      <FaUser />
                    </span>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className="pl-10 w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C796] h-11"
                      placeholder="Enter your username"
                    />
                  </div>
                  <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Email */}
                <div className="mb-3 relative">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <div className="flex items-center">
                    <span className="absolute pl-3 text-gray-500">
                      <FaEnvelope />
                    </span>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="pl-10 w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C796] h-11"
                      placeholder="Official email (e.g., user@creditwave.ng)"
                    />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Password */}
                <div className="mb-3 relative">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                    Password
                  </label>
                  <div className="flex items-center">
                    <span className="absolute pl-3 text-gray-500">
                      <FaLock />
                    </span>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="pl-10 w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C796] h-11"
                      placeholder="Enter your password"
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Confirm Password */}
                <div className="mb-5 relative">
                  <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-1">
                    Confirm Password
                  </label>
                  <div className="flex items-center">
                    <span className="absolute pl-3 text-gray-500">
                      <FaLock />
                    </span>
                    <Field
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="pl-10 w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C796] h-11"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full bg-[#00C796] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#008866] transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Sign Up'}
                </button>

                {/* Already have an account */}
                <p className="text-sm text-center text-gray-600 mt-4">
                  Already have an account?{' '}
                  <Link to="/login" className="text-[#00C796] font-semibold hover:underline">
                    Log In
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Signup;
