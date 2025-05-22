import React from 'react';
import HubSlider from '../Components/HubSlider';
import Lottie from 'lottie-react';
import animationData from './Welcome.json';
import WhyJoin from '../Components/WhyJoin';
import HowItWorks from '../Components/HowItWorks';
import Ongoing from '../Components/OngoingGroup';

function Home() {
  
  return (
    <div className='transition-all duration-300'>

      <HubSlider></HubSlider>

      <div className='mx-auto' style={{ maxWidth: 800, minHeight: 300 }}>
        <Lottie animationData={animationData} loop={true} />
        <p className='text-center font-medium text-green-700'>
          Explore hobby groups around you and get connected!
        </p>
      </div>
      <Ongoing></Ongoing>
      <WhyJoin></WhyJoin>
      <HowItWorks></HowItWorks>
    </div>
  );
}

export default Home;
