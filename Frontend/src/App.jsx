import React from 'react'
import Right from './home/right/right'
import Left from './home/left/left'
import Logout from './home/left1/logout'
import Signup from './components/signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider';
import {Routes , Route, Navigate} from 'react-router-dom';

const App = () => {
   const  { authUser  , setAuthUser } = useAuth();
   console.log(authUser);
  return ( 
<>
  <Routes>
     <Route path="/" element={
        authUser ? (
        <div className="flex h-screen">
        <Logout></Logout>
        <Left></Left>
        <Right></Right>
      </div> 
      ) : ( <Navigate to={"/login"} /> )
     }/>

     <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login />}/>
     <Route path="/signup" element={authUser ? <Navigate to="/"/> : <Signup />}/>
  </Routes>
</>
  );
}

export default App;


