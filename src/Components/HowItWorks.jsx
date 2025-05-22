import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-10 bg-base-200 text-black my-7">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-pink-700">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="btn border border-black px-7 py-2 text-center rounded-xl">Sign Up / Log In</div>
          <div className="btn border border-black px-7 py-2 text-center rounded-xl">Browse Groups</div>
          <div className="btn border border-black px-7 py-2 text-center rounded-xl">Join or Create Group</div>
          <div className="btn border border-black px-7 py-2 text-center rounded-xl">Attend Meetups</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
