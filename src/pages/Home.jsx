import React, { useState, useEffect } from 'react';
import HubSlider from '../Components/HubSlider';
import Lottie from 'lottie-react';
import animationData from './Welcome.json';

function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('home-theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme; // apply to body
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('home-theme', newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className='transition-all duration-300'>
      <HubSlider></HubSlider>

      <div className='text-center my-4'>
        <button 
          onClick={toggleTheme} 
          className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition'>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <div className='mx-auto' style={{ maxWidth: 800, minHeight: 300 }}>
        <Lottie animationData={animationData} loop={true} />
        <p className='text-center font-medium text-green-700'>
          Explore hobby groups around you and get connected!
        </p>
      </div>
    </div>
  );
}

export default Home;
