import { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';

import UserContext from "../UserContext";
import { Card } from "react-bootstrap";

function Withdraw() {

    const context = useContext(UserContext);

    if (context.loggedInUser === null) {
        return (
            <div className='content'>
                <h2>Withdraw</h2>
            <div>
                You are not logged in.
            </div>
        </div>
        );
    }

    // Get the logged in user
    let user;
    for (const eachUser of context.users) {
        if (eachUser.email === context.loggedInUser) {
            user = eachUser;
        }
    }


    // Set up formik
    const formikProps = {
        initialValues: {
            amount: 0
        },

        validate: values => {
            const errors = {};
            
            if (!values.amount) {
                errors.amount = 'Required';
            }
            return errors;
        },
        
        onSubmit: (values, { resetForm }) => {

            // Update our user's balance
            for (let i = 0; i < context.users.length; i++) {
                const eachUser = context.users[i];
                if (eachUser.email === context.loggedInUser) {
                    context.users[i].balance -= values.amount;
                }
            }

            resetForm();
            alert(`Amount withdrawn! Balance is: ${user.balance}`);
            
        }
    };

    // Render the content
    return (
        <Card style={{ width: '18rem' }}>
        <div className='content'>
            <Card.Header as="h2">
                Withdraw
            </Card.Header>
            <div>
                <Card.Title>
                Your balance is: ${user.balance}.
                </Card.Title>
            </div>

            <Formik {...formikProps}>
                <Form>
                    <div className='form-group'>
                        <label htmlFor='amount'>Amount</label>
                        <Field type='number'
                            min='0' 
                            className='form-control' 
                            id='amount' 
                            name='amount' 
                        />
                        <ErrorMessage className='error' name='amount' component='div' />
                    </div>
                    
                    <br/>
                    <button type='submit' className='btn btn-primary'>Withdraw</button>
                </Form>

            </Formik>

        </div>
        </Card>
    );
}

export default Withdraw;