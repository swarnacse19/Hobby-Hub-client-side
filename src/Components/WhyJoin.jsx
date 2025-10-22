import React from "react";
import { BiWorld } from "react-icons/bi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { SiBookstack } from "react-icons/si";

const WhyJoin = () => {
  
  const features = [
    {
      icon: FaHandshakeSimple,
      title: "Meet Like-minded People",
      description:
        "Find your tribe! Connect with others who share your specific interests and passions.",
      iconColor: "text-pink-600",
    },
    {
      icon: LiaCommentDotsSolid,
      title: "Engage in Conversations",
      description:
        "Discuss hobbies, exchange ideas, and share knowledge within active, friendly groups.",
      iconColor: "text-blue-500",
    },
    {
      icon: SiBookstack,
      title: "Learn & Grow",
      description:
        "Access resources, tutorials, and community support to improve your skills and expertise.",
      iconColor: "text-yellow-500",
    },
    {
      icon: BiWorld,
      title: "Build Communities",
      description:
        "Easily create and manage local or online groups, organize events, and expand your network.",
      iconColor: "text-green-500",
    },
  ];

  return (
    <section className="py-20 my-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Why Join <span className="text-pink-600">HobbyHub?</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          We provide the essential tools and community support to turn your
          passion into connection and growth.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              
              className="p-6 rounded-xl bg-gradient-to-br from-green-50 via-pink-50 to-teal-50 shadow
                                transition-all duration-300 transform hover:scale-[1.03]"
            >
              <div className="card-body items-center text-center p-0">
               
                <div
                  className={`p-4 mb-4 rounded-full ${feature.iconColor} shadow-lg`}
                >
                  <feature.icon size={36} />
                </div>

                
                <h3 className="text-xl font-bold text-black mb-2">
                  {feature.title}
                </h3>

                
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
