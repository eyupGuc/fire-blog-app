import React, { useContext } from 'react'
import { Outlet ,Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRouter = () => {
  const{currentUser}=useContext(AuthContext)
  
  return currentUser.email ?<Outlet/> :<Navigate to="/login" replace />;
   
  
}

export default PrivateRouter