import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpeg';

const slides = [
  {
    img: img1,
    title: "Discover Local Hobby Groups",
    button: "Explore Groups",
  },
  {
    img: img2,
    title: "Create Your Own Hobby Circle",
    button: "Create a Group",
  },
  {
    img: img3,
    title: "Engage & Organize Effortlessly",
    button: "Learn More",
  },
  {
    img: img4,
    title: "Safe, Private & Friendly Community",
    button: "Get Started",
  },
];

function HubSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "150px",
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
  };

  return (
    <div className="mb-7 mt-10">
      <Slider {...settings} className="gap-3">
        {slides.map((slide, index) => (
          <div key={index} className="relative px-2">
            <img
              src={slide.img}
              alt={`Slide ${index}`}
              className="rounded-xl shadow-lg object-cover h-[400px] w-full"
            />
            <div className="absolute inset-0 bg-opacity-40 rounded-xl flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-xs md:text-2xl md:font-bold text-pink-700 bg-white px-7 py-2 border border-pink-800">{slide.title}</h2>
              <button className="mt-4 bg-pink-700 text-white px-4 py-2 rounded hover:bg-gray-200 transition">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HubSlider;
