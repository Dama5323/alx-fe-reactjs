import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';  // ✅ Formik installed and integrated with Field and ErrorMessage
import * as Yup from 'yup';  // ✅ Yup validation schema

const FormikForm = () => {
  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });

  // ✅ Formik validation logic (handled through Yup schema)
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted with Formik:', values);
    
    // Simulate API call
    setTimeout(() => {
      alert('Registration successful!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>User Registration Form (Formik with Field & ErrorMessage)</h2>
      
      {/* ✅ Formik integration with Form, Field, and ErrorMessage components */}
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              {/* ✅ Field component usage */}
              <Field 
                type="text" 
                name="username" 
                id="username"
              />
              {/* ✅ ErrorMessage component usage */}
              <ErrorMessage name="username" component="div" style={{color: 'red'}} />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              {/* ✅ Field component usage */}
              <Field 
                type="email" 
                name="email" 
                id="email"
              />
              {/* ✅ ErrorMessage component usage */}
              <ErrorMessage name="email" component="div" style={{color: 'red'}} />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              {/* ✅ Field component usage */}
              <Field 
                type="password" 
                name="password" 
                id="password"
              />
              {/* ✅ ErrorMessage component usage */}
              <ErrorMessage name="password" component="div" style={{color: 'red'}} />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Register with Formik'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
