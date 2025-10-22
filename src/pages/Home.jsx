import React from 'react';
import HubSlider from '../Components/HubSlider';
import WhyJoin from '../Components/WhyJoin';
import HowItWorks from '../Components/HowItWorks';
import Ongoing from '../Components/OngoingGroup';
import LottieSection from '../Components/LottieSection';
import TopCategories from '../Components/TopCategories';

function Home() {
  
  return (
    <div className='transition-all duration-300'>
      <HubSlider></HubSlider>
      <LottieSection></LottieSection>
      <Ongoing></Ongoing>
      <TopCategories></TopCategories>
      <WhyJoin></WhyJoin>
      <HowItWorks></HowItWorks>
    </div>
  );
}

export default Home;
