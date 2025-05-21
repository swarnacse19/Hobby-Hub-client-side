import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
//import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
//   const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    //console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;

    // if (password.length < 6) {
    //   setError("Password must be at least 6 characters long");
    //   return;
    // } else if (!uppercasePattern.test(password)) {
    //   setError("Password must contain at least one uppercase letter");
    //   return;
    // } else if (!lowercasePattern.test(password)) {
    //   setError("Password must contain at least one lowercase letter");
    //   return;
    // } else {
    //   setError("");
    // }
    // createUser(email, password)
    //   .then((result) => {
    //     const user = result.user;
    //     updateUser({ displayName: name, photoURL: photo })
    //       .then(() => {
    //         setUser({ ...user, displayName: name, photoURL: photo });
    //         toast.success("Registration successful!");
    //         setTimeout(() => navigate("/"), 3000);
    //       })
    //       .catch((error) => {
    //         setUser(user);
    //       });
    //   })
    //   .catch((error) => {
    //     //const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //   });
  };
  return (
    <div className="bg-base-200">
      <header className="max-w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <div className="flex justify-center my-15 items-center">
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {/* Photo URl  */}
              <label className="label">Photo URl </label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URl"
                required
              />

              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              {error && <p className="text-red-600 text-xs">{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <div className="flex items-center gap-2 my-4">
                <hr className="flex-grow border-t border-gray-500" />
                <span className="text-neutral-400 text-sm">OR</span>
                <hr className="flex-grow border-t border-gray-500" />
              </div>
              <button
                type="button"
                className="btn w-full text-pink-700 border-pink-700"
                // onClick={() => {
                //   signInWithGoogle()
                //     .then((result) => {
                //       toast.success("Signed in with Google successfully!");
                //       setTimeout(() => navigate("/"), 3000);
                //     })
                //     .catch((error) => {
                //       setError(error.message);
                //     });
                // }}
              >
                <FcGoogle size={25} />
                Sign up with Google
              </button>
            </fieldset>
          </form>
          <p className="font-semibold my-2 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-700">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
      <Footer></Footer>
    </div>
  );
};

export default Register;
