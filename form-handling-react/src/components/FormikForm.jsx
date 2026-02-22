import React from 'react';
import { useFormik } from 'formik';  
import * as Yup from 'yup';  

const FormikForm = () => {
  // ✅ Formik integration with validation logic
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    // ✅ Yup validation schema
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
    }),
    onSubmit: (values) => {
      console.log('Form submitted with Formik:', values);
      alert('Registration successful!');
    },
  });

  return (
    <div>
      <h2>User Registration Form (Formik)</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <span style={{color: 'red'}}>{formik.errors.username}</span>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span style={{color: 'red'}}>{formik.errors.email}</span>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span style={{color: 'red'}}>{formik.errors.password}</span>
          )}
        </div>

        <button type="submit">Register with Formik</button>
      </form>
    </div>
  );
};

export default FormikForm;