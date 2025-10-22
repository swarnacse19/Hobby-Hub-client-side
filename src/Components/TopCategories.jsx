import React from "react";
import {
  FaPaintBrush,
  FaCode,
  FaCamera,
  FaMusic,
  FaBookOpen,
  FaHiking,
  FaGraduationCap,
  FaChess,
} from "react-icons/fa";

const TopCategories = () => {
  
  const categories = [
    {
      name: "Painting",
      icon: FaPaintBrush,
      count: 120,
      color: "text-red-500",
      bgColor: "bg-red-100/50",
    },
    {
      name: "Coding & Dev",
      icon: FaCode,
      count: 95,
      color: "text-blue-500",
      bgColor: "bg-blue-100/50",
    },
    {
      name: "Photography",
      icon: FaCamera,
      count: 78,
      color: "text-green-500",
      bgColor: "bg-green-100/50",
    },
    {
      name: "Music",
      icon: FaMusic,
      count: 110,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100/50",
    },
    {
      name: "Reading Clubs",
      icon: FaBookOpen,
      count: 62,
      color: "text-purple-500",
      bgColor: "bg-purple-100/50",
    },
    {
      name: "Outdoor Sports",
      icon: FaHiking,
      count: 145,
      color: "text-teal-500",
      bgColor: "bg-teal-100/50",
    },
    {
      name: "Skill Learning",
      icon: FaGraduationCap,
      count: 88,
      color: "text-pink-600",
      bgColor: "bg-pink-100/50",
    },
    {
      name: "Board Games",
      icon: FaChess,
      count: 45,
      color: "text-indigo-500",
      bgColor: "bg-indigo-100/50",
    },
  ];

  return (
    
    <section className="py-20 my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Browse Top Categories
          </h2>
          <p className="text-gray-500 text-lg">
            Find groups easily by exploring our most popular hobby categories.
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 
                                transition-all duration-300 transform 
                                hover:shadow-xl hover:-translate-y-1 cursor-pointer 
                                flex flex-col items-center text-center ${category.bgColor}`}
            >
              
              <div
                className={`p-4 mb-4 rounded-full ${category.color} bg-white shadow-md`}
              >
                <category.icon size={36} />
              </div>

              
              <h3 className="text-xl font-semibold text-gray-700 mb-1">
                {category.name}
              </h3>

              
              <p className="text-sm text-gray-700">{category.count} Groups</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
