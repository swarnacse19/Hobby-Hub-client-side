import React from 'react';
import HubSlider from '../Components/HubSlider';
import Lottie from 'lottie-react';
import animationData from './Welcome.json';

function Home() {
  return (
    <div>
      <HubSlider></HubSlider>
      <div className='mx-auto' style={{ width: 800, height: 300 }}>
        <Lottie animationData={animationData} loop={true}/>
        <p className='text-center font-medium text-green-700'>Explore hobby groups around you and get connected!</p>
      </div>
    </div>
  );
}

export default Home;