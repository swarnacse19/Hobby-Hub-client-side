import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { LiaCommentDotsSolid } from 'react-icons/lia';
import { SiBookstack } from 'react-icons/si';

const WhyJoin = () => {
  return (
    <section className="py-10 bg-base-200 my-10 text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-pink-700">Why Join HobbyHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <FaHandshakeSimple color='orange' size={45}/>
              <h3 className="card-title">Meet Like-minded People</h3>
              <p>Connect with people who share your interests.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <LiaCommentDotsSolid size={45}/>
              <h3 className="card-title">Engage in Conversations</h3>
              <p>Discuss hobbies and ideas with friendly groups.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <SiBookstack size={45} color='orange'/>
              <h3 className="card-title">Learn & Grow</h3>
              <p>Improve your skills with community support.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <BiWorld size={45} color='blue'/>
              <h3 className="card-title">Build Communities</h3>
              <p>Create local groups and events in your area.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
