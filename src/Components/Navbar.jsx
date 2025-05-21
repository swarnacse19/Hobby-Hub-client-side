import React, { use } from "react";
import { Link, NavLink } from "react-router";
// import { AuthContext } from "../provider/AuthProvider";
//import { ToastContainer, toast } from "react-toastify";
import hobbyHub from "../assets/hobbyHub.png";

function Navbar() {
  const links = (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/groups">All Groups</NavLink>
        <NavLink to="/createGroup">Create Group</NavLink>
        <NavLink to="/myGroups ">My Groups</NavLink>
    </>
  );
//   const { user, logOut } = use(AuthContext);
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         toast.success("Logout Successfully!");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   console.log(user);
  return (
    <div className="navbar">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-medium text-[18px] shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={hobbyHub} className="w-10" alt="" />
          <h2 className="text-2xl font-semibold">Hobby<span className="text-pink-700">Hub</span></h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-7 text-xl font-light">{links}</ul>
      </div>
      <div className="navbar-end">
      <div className="flex gap-3">
        {/* <img
          className="w-12 rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt="" title={user ? user.displayName : "Guest"}

        />
        {user ? (
          <button
          onClick={handleLogOut}
          className="btn bg-blue-600 text-white font-semibold"
        >
          Logout
        </button>
        ) : (
          <Link to="/login" className="btn bg-blue-600 text-white font-semibold">
            Login
          </Link>
        )} */} <button className="btn bg-white text-pink-700 border-2 border-pink-700 font-semibold hover:bg-pink-200">Login</button>
        <button className="btn bg-white text-green-700 border-2 border-green-700 font-semibold hover:bg-green-200">Register</button>
      </div>
      </div>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </div>
  );
}

export default Navbar;
