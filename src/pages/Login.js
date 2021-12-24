import { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Card } from "react-bootstrap";

import UserContext from "../UserContext";

function checkLogin(email, password, users) {
    for (const user of users) {
        if (
            user.email === email &&
            user.password === password
            ) {
                return true;
            }
    }
    return false;
}

function Login() {

    const context = useContext(UserContext);

    const formikProps = {
        initialValues: {
            email: '',
            password: ''
        },
        validate: values => {
            const errors = {};
            if (!values.email) {
                errors.email= 'Required';
            }
            if (!values.password) {
                errors.password = 'Required';
            }
            
            const isLoginValid = checkLogin (
                values.email,
                values.password,
                context.users
            );
            if (!isLoginValid) {
                errors.login = 'Invalid Login';
            }

            return errors;
        },
        onSubmit: (values, { resetForm }) => {
            context.loggedInUser = values.email;
            resetForm();
            alert(`Welcome back, ${values.email}!`);
        }
    };

    return (
        <Card style={{ width: '24rem'}}>
        <div className='content'>
            <Card.Header as="h2">Login</Card.Header>

            <Formik {...formikProps}>
                <Form>
                    <div className='form-group'>
                        <label htmlFor='username'>Email</label>
                        <Field className='form-control' id='email' name='email' placeholder='Enter email address' />
                        <ErrorMessage className='error' name='email' component='div' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <Field className='form-control' id='password' name='password' placeholder='********' />
                        <ErrorMessage className='error' name='password' component='div' />
                    </div>

                    <br/>
                    <button type='submit' className='btn btn-primary'>Login</button>


                </Form>
            </Formik>

        </div>
        </Card>
    );
}

export default Login;