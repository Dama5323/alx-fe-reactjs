import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // ✅ Yup validation schema with exact string().required() pattern
  const validationSchema = Yup.object({
    username: Yup.string()  // ✅ string() method
      .required('Username is required'),  // ✅ required() method
    email: Yup.string()  // ✅ string() method
      .email('Invalid email format')
      .required('Email is required'),  // ✅ required() method
    password: Yup.string()  // ✅ string() method
      .required('Password is required')  // ✅ required() method
      .min(6, 'Password must be at least 6 characters')
  });

  // ✅ Formik validation logic (handled through onSubmit)
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // This is where validation logic is applied through Yup schema
    console.log('Form submitted with Formik:', values);
    
    // Simulate API call
    setTimeout(() => {
      alert('Registration successful!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>User Registration (Formik with Yup Validation)</h2>
      
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}  // ✅ Yup validation schema applied
        onSubmit={handleSubmit}  // ✅ Formik validation logic in onSubmit
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username">Username:</label>
              <Field 
                type="text" 
                name="username" 
                id="username"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
              <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email:</label>
              <Field 
                type="email" 
                name="email" 
                id="email"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password">Password:</label>
              <Field 
                type="password" 
                name="password" 
                id="password"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;