import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../pages/Loading';

function Root() {
  const { state } = useNavigation();

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
      <div className='max-w-11/12 mx-auto'>
      {state == "loading" ? <Loading></Loading> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
}

export default Root;
