import React from 'react';
import { FaPlusCircle } from 'react-icons/fa'; 
import { Link } from 'react-router';

const CallToAction = () => {
    return (
        <div className='max-w-7xl mx-auto text-black px-4 my-20'>
             <section className="py-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-md">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                
                <div className="mb-6">
                    <FaPlusCircle className="mx-auto" size={60} />
                </div>

                
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                    Ready to Start Your Own Hobby Group?
                </h2>

                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Bring your passion to life! Create a group, connect with like-minded individuals, and organize events effortlessly.
                </p>

                
                <Link to="/createGroup"
                    className="inline-flex items-center justify-center 
                               px-10 py-4 border border-transparent text-lg 
                               font-semibold rounded-full shadow-lg cursor-pointer 
                               bg-gradient-to-r from-pink-600 to-purple-600 
                               text-white 
                               hover:from-pink-700 hover:to-purple-700 
                               transform hover:scale-105 transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    <FaPlusCircle className="mr-3" size={24} /> 
                    Create Your Group Now
                </Link>
                
            </div>
        </section>
        </div>
    );
};

export default CallToAction;