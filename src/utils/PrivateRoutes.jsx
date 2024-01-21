
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
const isAuthenticated= useSelector(state=> state.auth.isAuthenticated)
console.log('Auth in Private Route', isAuthenticated)
return(
  isAuthenticated ? <Outlet/>:<Navigate to="/"/>
)};



export default PrivateRoutes;
