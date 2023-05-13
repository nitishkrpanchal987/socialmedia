import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/router';
import { useAuth } from '../../hooks/auth';
import Navbar from '../../components/Navbar';

const Layout = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {user, isLoading} = useAuth();

    
    useEffect(()=>{
      if(pathname.startsWith('/protected') && !user)
      {
        navigate(LOGIN);
      }
    }, [])

    if(isLoading) return "...Loading"
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Layout
