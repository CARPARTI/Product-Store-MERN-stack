import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

//This makes our bookstore inaccessible without signing in
const PrivateRoute = () => {
  const user = sessionStorage.getItem('user');


    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute