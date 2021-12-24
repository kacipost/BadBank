import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useContext } from 'react';
import FormField from '../pages/FormField';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
import { Card } from 'react-bootstrap';


const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .email()
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    })
});

function CreateAccount({ onSubmit }) {

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  
  
  const nameProps = formik.getFieldProps("name");
  const emailProps = formik.getFieldProps("email");
  const passwordProps = formik.getFieldProps("password");
  const confirmPasswordProps = formik.getFieldProps("confirmPassword");
  const navigate = useNavigate();
  const context = useContext(UserContext);
  


  function handleCreate() {
    context.users.push({
      email: emailProps.value,
      password: passwordProps.value,
      balance: 100});
      navigate('/success')
  };  

  return (
    <Card style={{ width: '24rem' }}>
    <Card.Header as="h2">Create Account</Card.Header>
    <form onSubmit={formik.handleSubmit}>
      <FormField
        label="Name"
        type="text"
        placeholder="Enter your name"
        {...nameProps}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <FormField
        label="Email"
        type="email"
        placeholder="Enter your email"
        {...emailProps}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <FormField
        label="Password"
        type="password"
        placeholder="Enter your password"
        {...passwordProps}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <FormField
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        {...confirmPasswordProps}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div>{formik.errors.confirmPassword}</div>
      ) : null}
      <button type="submit" onClick={handleCreate} disabled={!(formik.isValid && formik.dirty)}>Create Account</button>
    </form>
    </Card>
  );
}

export default CreateAccount;