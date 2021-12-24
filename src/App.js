import { 
  HashRouter,
  Routes,
  Route 
} from 'react-router-dom';

import UserContext from './UserContext';
import NavBar from './NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import AllData from './pages/AllData';
import Success from './pages/Success';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{
        loggedInUser: null,
        users: [
          { email: 'kacipost4@gmail.com', password: 'Password12.', balance: 10 }
        ]
      }}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create-account' element={<CreateAccount />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/deposit' element={<Deposit />}></Route>
        <Route path='/withdraw' element={<Withdraw />}></Route>
        <Route path='/all-data' element={<AllData />}></Route>
        <Route path='/success' element={<Success />}></Route>
      </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
