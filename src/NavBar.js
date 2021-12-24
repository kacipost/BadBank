import * as Bootstrap from 'react-bootstrap';
import './Navbar.css';


function NavBar() {
    return (
        <Bootstrap.Navbar bg="primary" variant="dark">
            <Bootstrap.Container>
                <Bootstrap.Navbar.Brand href="/#">BadBank</Bootstrap.Navbar.Brand>
                <Bootstrap.Nav className="me-auto">
                    <Bootstrap.Nav.Link className="my-navbar" href='/#'>Home</Bootstrap.Nav.Link>
                    <Bootstrap.Nav.Link className="my-navbar" href='/#/create-account'>Create Account</Bootstrap.Nav.Link>
                    <Bootstrap.Nav.Link className="my-navbar" href='/#/login'>Login</Bootstrap.Nav.Link>
                    <Bootstrap.Nav.Link className="my-navbar" href='/#/deposit'>Deposit</Bootstrap.Nav.Link>
                    <Bootstrap.Nav.Link className="my-navbar" href='/#/withdraw'>Withdraw</Bootstrap.Nav.Link>   
                    <Bootstrap.Nav.Link className="my-navbar" href='/#/all-data'>All Data</Bootstrap.Nav.Link>
                </Bootstrap.Nav>
            </Bootstrap.Container>
        </Bootstrap.Navbar>
    );
}

export default NavBar;