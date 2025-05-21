import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';

function Root() {
  const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname !== '/') {
  //     document.body.className = ''; 
  //   }
  // }, [location.pathname]);

  useEffect(() => {
  if (location.pathname === '/') {
    const saved = localStorage.getItem('home-theme') || 'light';
    document.body.className = saved;
  } else {
    document.body.className = '';
  }
}, [location.pathname]);

  return (
    <div>
      <div className='max-w-11/12 mx-auto'><Navbar /></div>
      <div className='max-w-11/12 mx-auto'><Outlet /></div>
      <Footer />
    </div>
  );
}

export default Root;
