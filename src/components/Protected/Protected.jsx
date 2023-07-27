import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const Protected = ({children}) => {

    const {activeUser,loading}=useContext(AuthContext);
    const location=useLocation();
  if(loading){
    return <h1>Loading....</h1>
  }


    if(activeUser?.email){
        return children;
    }
    return <Navigate to="/login"  
    state={{from:location}} 
    replace/>
    
};

export default Protected;