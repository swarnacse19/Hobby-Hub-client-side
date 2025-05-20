import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
    <div className='flex justify-center items-center min-h-screen'>
      <div className='text-center'>
        <img className='mx-auto' src="https://i.ibb.co.com/qYw36jgD/error.png" alt="" />
      <h1 className='font-bold text-2xl text-red-500'>404 - Page not found</h1>
      <button
            onClick={() => navigate("/")}
            className="bg-green-500 text-white px-6 py-2 rounded-full mt-4"
          >
            Go to home
          </button>
      </div>
    </div>
    </>
  );
}

export default ErrorPage;