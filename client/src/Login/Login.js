import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661687561711-6357ab1d1f75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-start justify-center pl-16 w-1/2 text-white">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92EbNg_Z7rBlIoENCzgQDZSADsXPwYQz83w&s" alt="Logo" className="mb-96 w-28 h-28 " />
          <h1 className="text-4xl text-cyan-400 font-bold mb-4 animate-slide-in-left">Unlock Your Potential with Our Online Courses</h1>
          <p className="text-xl animate-fade-in">Discover a world of knowledge and skills to elevate your career and personal growth. Join our community today!</p>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md mr-16 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-6 text-center animate-fade-in">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                 <a
                  href="#"
                  className="font-bold text-lg text-blue-500 ml-56 hover:text-blue-800 mb-4"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 text-xl    w-full rounded focus:outline-none focus:shadow-outline transition-transform duration-300 transform hover:scale-105 mb-4"
                >
                  Login
                </button>
               

                <Link to="/signup"><p className="mt-2 text-red-500 font-semibold"> Already Login? Please Signup.</p></Link>
              </div>
            </form>
            <div className="my-4 text-center">
              <button
                type="button"
                className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold   px-4 w-full rounded focus:outline-none focus:shadow-outline transition-transform duration-300 transform hover:scale-105"
              >
                <img src="https://icon2.cleanpng.com/20180326/dhq/kisspng-google-logo-google-home-google-now-google-plus-5ab9b2a5ee5e37.4776417115221193339764.jpg" alt="Google Logo" className="w-16 bg-white h-12 mr-2" />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
