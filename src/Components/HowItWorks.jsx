import React from "react";
import { FaCirclePlus, FaUserPlus } from "react-icons/fa6";
import { MdConnectWithoutContact, MdGroups } from "react-icons/md";


const HowItWorks = () => {
  const steps = [
    {
      title: "Join",
      description: "Create an account or log in to explore the community.",
      icon: FaUserPlus,
      bgColor: "from-pink-500 to-red-500", 
    },
    {
      title: "Discover",
      description:
        "Browse groups by hobby, skill, or location to find your fit.",
      icon: MdGroups,
      bgColor: "from-purple-500 to-indigo-500",
    },
    {
      title: "Contribute",
      description:
        "Join existing groups or start a new one based on your passion.",
      icon: FaCirclePlus,
      bgColor: "from-blue-500 to-cyan-500",
    },
    {
      title: "Connect",
      description: "Participate in meetups, workshops, and shared projects.",
      icon: MdConnectWithoutContact,
      bgColor: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 my-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          How It Works
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          A simple four-step process to get you started on your hobby journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-2xl transition-transform transform hover:scale-105 duration-300 relative overflow-hidden`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div
                className={`absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-30 blur-md bg-gradient-to-br ${step.bgColor}`}
              ></div>

              <div className="text-4xl font-bold mb-4 text-pink-600">
                0{index + 1}
              </div>

              <div
                className={`text-5xl mb-4 inline-block p-3 rounded-full bg-gradient-to-br ${step.bgColor} text-white shadow-lg`}
              >
                <step.icon />
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
