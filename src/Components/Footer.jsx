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
    <footer className="bg-black text-white w-full pt-20 pb-7 mt-10">
      <div className="max-w-6xl md:mx-auto px-4 grid gap-8 md:grid-cols-3 text-sm">
        <div className="flex mb-5 items-center gap-2">
          <img src={hobbyHub} className="w-10 border border-white rounded-[50%]" alt="" />
                    <h2 className="text-2xl font-semibold">Hobby<span className="text-pink-800">Hub</span></h2>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center gap-2 mb-1">
            <FaEnvelope className="text-white" />
            <span>swarna@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <FaPhone className="text-white" />
            <span>+1 (432) 789-1089</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" >
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" >
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" >
              <FaInstagram size={20} />
            </a>
            <a href="https://github.com" target="_blank">
             <FaGithub size={20} color="white" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white text-sm mt-14 border-t border-white pt-5">
        © 2025 . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
