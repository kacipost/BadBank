import { useContext } from "react";
import { Container } from "react-bootstrap";

import UserContext from "../UserContext.js";

function AllData() {
    
    const context = useContext(UserContext);
    const users = context.users.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
            </tr>
        );
    });

    return (
        <Container>
        <div className="card">
        <div className="container-fluid" font-size="6em">
        <br />

        <h1>All Data</h1>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {users}
            </tbody>
        </table>    
        </div>
        </div>
        </Container>    
    );
}

export default AllData;