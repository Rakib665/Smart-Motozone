import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const RequiredAuth = ({ children }) => {
    let [user,loading] = useAuthState(auth);
    let location = useLocation();

    if(loading){
      return <Loading></Loading>
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
};

export default RequiredAuth;