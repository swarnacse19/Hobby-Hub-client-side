import React from 'react';
import HubSlider from '../Components/HubSlider';
import WhyJoin from '../Components/WhyJoin';
import HowItWorks from '../Components/HowItWorks';
import Ongoing from '../Components/OngoingGroup';
import LottieSection from '../Components/LottieSection';

function Home() {
  
  return (
    <div className='transition-all duration-300'>
      <HubSlider></HubSlider>
      <LottieSection></LottieSection>
      <Ongoing></Ongoing>
      <WhyJoin></WhyJoin>
      <HowItWorks></HowItWorks>
    </div>
  );
}

export default Home;
