import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router"; 
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import hobbyHub from "../assets/hobb.png";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Tooltip } from "react-tooltip";

function Navbar() {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/groups">All Groups</NavLink>
      <NavLink to="/createGroup">Create Group</NavLink>
      <NavLink to="/myGroups">My Groups</NavLink>
    </>
  );

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("home-theme") || "light";
    setTheme(saved);
    document.body.className = saved;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("home-theme", newTheme);
    document.body.className = newTheme;
  };

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={`shadow-md fixed top-0 max-w-full left-0 right-0 z-50 ${theme === "light" ? "bg-white" : "bg-black"}`}>
          
          <div className="navbar max-w-7xl mx-auto px-4">
            
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2 font-medium text-[18px]"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-medium text-black text-[16px] shadow"
                >
                  {links}
                </ul>
              </div>
              <div className="flex items-center">
                <img src={hobbyHub} className="w-10" alt="" />
                <h2 className="hidden md:flex text-2xl font-semibold">
                  Hobby<span className="text-pink-700">Hub</span>
                </h2>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-7 text-[16px] font-medium">
                {links}
              </ul>
            </div>
            <div className="navbar-end">
              <div className="flex items-center gap-3">
                {user && (
                  <>
                    <img
                      data-tooltip-id="user-tooltip"
                      data-tooltip-content={user.displayName}
                      className="w-12 rounded-full cursor-pointer"
                      src={user.photoURL}
                      alt="User"
                    />
                    <Tooltip
                      id="user-tooltip"
                      place="bottom"
                      className="text-sm font-medium"
                    />
                  </>
                )}

                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-1 rounded-sm border-2 border-pink-700 font-semibold cursor-pointer transform transition duration-200 hover:scale-105"
                  >
                    Logout
                  </button>
                ) : (
                  <div>
                    <Link
                      to="/register"
                      className="inline-block px-4 py-1 rounded-sm border-2 border-pink-700 font-semibold cursor-pointer transform transition duration-200 hover:scale-105"
                    >
                      Register
                    </Link>
                  </div>
                )}
                <div onClick={toggleTheme} className="cursor-pointer">
                  {theme === "light" ? (
                    <MdDarkMode size={30} />
                  ) : (
                    <MdOutlineLightMode size={30} />
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <div className="h-[62px]"></div> 

    </>
  );
}

export default Navbar;