import React from 'react';
import HubSlider from '../Components/HubSlider';
import Lottie from 'lottie-react';
import animationData from './Welcome.json';

function Home() {
  
  return (
    <div className='transition-all duration-300'>

      {/* <div className='flex gap-2 justify-end my-4' onClick={toggleTheme}>   <span>Change Mode</span>    
          {theme === 'light' ? <MdDarkMode size={30}/> : <MdOutlineLightMode size={30}/>}
      </div> */}
      <HubSlider></HubSlider>

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
