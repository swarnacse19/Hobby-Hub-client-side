import React from "react";
import Lottie from "lottie-react";
import animationData from "./Welcome.json";

function LottieSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-green-50 via-pink-50 to-teal-50 rounded-3xl shadow-sm px-4 md:px-14 my-24">

      {/* Lottie Animation */}
      <div className="w-full flex justify-center mb-8">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-[250px] md:w-[400px]"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to HobbyHub 🎨
        </h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed italic">
          Explore hobby groups around you and connect with people who share your
          passions. Discover, learn, and grow together through fun activities and
          shared creativity.
        </p>

        <button
          className="bg-black text-white font-semibold px-7 cursor-pointer py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105"
        >
          Explore Groups
        </button>
      </div>

    </section>
  );
}

export default LottieSection;
