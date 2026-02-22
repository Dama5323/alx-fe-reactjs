import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Registration successful!");
    resetForm();
  };

  return (
    <div>
      <h2>User Registration Form</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>

          <div>
            <label>Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Register</button>

        </Form>
      </Formik>
    </div>
  );
};

export default formikForm;