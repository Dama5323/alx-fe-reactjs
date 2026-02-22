import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormStyles.css';

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Mock API call
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        });
        
        if (response.ok) {
          console.log('Form submitted successfully:', values);
          alert('Registration successful!');
          resetForm();
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="form-container">
      <h2>User Registration (Formik)</h2>
      <form onSubmit={formik.handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className={formik.touched.username && formik.errors.username ? 'error' : ''}
          />
          {formik.touched.username && formik.errors.username && (
            <span className="error-message">{formik.errors.username}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={formik.touched.email && formik.errors.email ? 'error' : ''}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="error-message">{formik.errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={formik.touched.password && formik.errors.password ? 'error' : ''}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="error-message">{formik.errors.password}</span>
          )}
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default FormikForm;