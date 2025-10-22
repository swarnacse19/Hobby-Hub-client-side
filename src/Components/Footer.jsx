import React from "react";
import hobbyHub from "../assets/hobbyHub.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8 md:flex-row justify-between text-sm">
          <div className="flex flex-col items-start gap-4 mb-5">
            <div className="flex items-center gap-2">
              
              <img src={hobbyHub} className="w-12 h-12 border-2 border-pink-700 rounded-full shadow-lg" alt="HobbyHub Logo" />
              
              <h2 className="text-3xl font-bold text-white">Hobby<span className="text-pink-600">Hub</span></h2>
            </div>
            
            <p className="mt-4 max-w-xl text-gray-400">
              Discover, connect, and grow with HobbyHub. Your community for passion and creativity.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3> 
            <ul className="space-y-3"> 
              <li className="flex items-center gap-3"> 
                <FaEnvelope className="text-pink-600 text-lg" /> 
                <span>swarna@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-pink-600 text-lg" />
                <span>+1 (432) 789-1089</span>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors duration-300"> 
                <FaFacebookF size={22} /> 
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors duration-300">
                <FaTwitter size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors duration-300">
                <FaInstagram size={22} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors duration-300">
                <FaGithub size={22} />
              </a>
            </div>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm mt-16 border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} HobbyHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;