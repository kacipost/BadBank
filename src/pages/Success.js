import React from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Card from "react-bootstrap/Card";

function Success() {
  return (
    <Card style={{ width: '34rem' }}>
    <div>
      <Card.Header as="h3">
        Congratulations, you have created an account. 
      </Card.Header>
        
        <Card.Title>
          To create another account, please click the button below.
        </Card.Title>
        <Link to='/create-account'>
          <Button variant="primary">Create Another Account</Button>
        </Link>
    </div>
    </Card>
  );
}

export default Success;