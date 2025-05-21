import React from "react";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router";
import hobbyHub from "../assets/hobbyHub.png";

function Footer() {
  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/groups">All Groups</Link>
      <Link to="/createGroup">Create Group</Link>
      <Link to="/myGroups ">My Groups</Link>
    </>
  );

  return (
    <div className="h-[423px] py-25 px-20 flex justify-center items-center bg-pink-500 text-white">
      <div>
        <div className="flex justify-center mb-5 items-center gap-2">
          <img src={hobbyHub} className="w-10 border border-white rounded-[50%]" alt="" />
                    <h2 className="text-2xl font-semibold">Hobby<span className="text-pink-800">Hub</span></h2>
        </div>
        <div className="flex flex-col lg:flex-row text-center gap-5 list-none font-semibold">{links}</div>
        <div className="flex gap-5 justify-center mt-4">
          <a href="https://facebook.com" target="_blank">
            <FaFacebookF
              className= "rounded-2xl pt-1 bg-white"
              size={30} color="blue"
            />
          </a>
          <a href="https://twitter.com" target="_blank">
            <BsTwitterX size={30} color="white" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin size={35} color="white" />
          </a>
          <a href="https://github.com" target="_blank">
            <FaGithub size={35} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
