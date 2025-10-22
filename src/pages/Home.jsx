import React from 'react';
import HubSlider from '../Components/HubSlider';
import WhyJoin from '../Components/WhyJoin';
import HowItWorks from '../Components/HowItWorks';
import Ongoing from '../Components/OngoingGroup';
import LottieSection from '../Components/LottieSection';
import TopCategories from '../Components/TopCategories';
import CallToAction from '../Components/CallToAction';

function Home() {
  
  return (
    <div className='transition-all duration-300'>
      <HubSlider></HubSlider>
      <LottieSection></LottieSection>
      <Ongoing></Ongoing>
      <TopCategories></TopCategories>
      <WhyJoin></WhyJoin>
      <HowItWorks></HowItWorks>
      <CallToAction></CallToAction>
    </div>
  );
}

export default Home;
