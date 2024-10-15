import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaUser, FaEnvelope, FaRegEdit } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSupport = () => {
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  // Form submit handler
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    // Simulate form submission (e.g., sending to an API)
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        position: "top-center",
        autoClose: 2000,
      });
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center p-5" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-scuba-diving-accessories_23-2148515035.jpg?t=st=1729011506~exp=1729015106~hmac=157934a7f3b5046721881a009556dd4605afdeda52b8f8f4c0511e7c116b48c1&w=740")' }}>
      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-8 md:p-10">
        <h1 className="text-3xl font-bold text-[#384642] mb-4 text-center">
          Contact Support
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Having trouble with your loan application? Contact our support team and we'll get back to you as soon as possible.
        </p>

        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border-[#00C796]"
                    placeholder="Enter your full name"
                  />
                </div>
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border-[#00C796]"
                    placeholder="Enter your email"
                  />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Subject Field */}
              <div className="mb-3">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <div className="relative">
                  <FaRegEdit className="absolute left-3 top-3 text-gray-400" />
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border-[#00C796]"
                    placeholder="Enter the subject"
                  />
                </div>
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Message Field */}
              <div className="mb-5">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="resize-none w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#00C796]"
                  placeholder="Describe your issue"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#00C796] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#009a7a] transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Contact Information */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">Or reach us directly at:</p>
          <p className="font-semibold text-[#384642]">support@creditwave.com</p>
          <p className="font-semibold text-[#384642]">+1 (800) 123-4567</p>
        </div>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactSupport;
