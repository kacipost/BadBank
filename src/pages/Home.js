import { useContext } from 'react';

import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';
import Logo from '../images/bank.png';
import { Link } from 'react-router-dom';

import UserContext from '../UserContext';

function Home() {

    const context = useContext(UserContext);

    let message;

    // Handle is user is not logged in
    if (context.loggedInUser === null) {
        message = (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Title>BadBank</Card.Title>
              <Card.Text>
                Welcome to BadBank. Please Login.
              </Card.Text>
              <Link to='/login'>
              <Button variant="primary">Login</Button>
              </Link>
            </Card.Body>
          </Card>
        );
    } 
    
    // Handle if user is logged in
    else {

        // Get a reference to the logged in user
        let user;
        for (const eachUser of context.users) {
            if (eachUser.email === context.loggedInUser) {
                user = eachUser;
            }
        }

        // Update the message with the user's information
        message = (
            <Card className="text-center" style={{ width: '26rem' }}>
            <Card.Title>
              <h2>Home</h2>
              </Card.Title>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Title>BadBank</Card.Title>
              <Card.Text>
              Welcome back, {user.email}!
                <br/>
                Your balance is ${user.balance}.
              </Card.Text>
              <Link to='/deposit'>
              <Button variant="primary">Deposit</Button>
              </Link>
              <Link to='/withdraw'>
              <Button variant="secondary">Withdraw</Button>
              </Link>
            </Card.Body>
          </Card>
        );
    }

    return (
        <div className='content'>
            {message}
        </div>
    );
}

export default Home;