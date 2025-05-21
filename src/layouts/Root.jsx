import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

function Root() {

//   useEffect(() => {
//   if (location.pathname === '/') {
//     const saved = localStorage.getItem('home-theme') || 'light';
//     document.body.className = saved;
//   } else {
//     document.body.className = '';
//   }
// }, [location.pathname]);

  return (
    <div>
      <div className='max-w-11/12 mx-auto'><Navbar /></div>
      <div className='max-w-11/12 mx-auto'><Outlet /></div>
      <Footer />
    </div>
  );
}

export default Root;
