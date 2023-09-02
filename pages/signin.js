import React from "react";
import { NavLink, Link } from 'react-router-dom';
import loginImg from '../assets/login.jpg';
import logo from "../assets/logo.png";


function Signin() {
  return (
    <div className="">
      <nav className="bg-white z-40">
        <div className="w-5/6 mx-auto flex justify-between">
          <div className="md:ml-[40px] md:w-[200px] w-[120px]  md:py-5 p-4">
            <img src={logo} alt="logoimg" />
          </div>
          <NavLink to='/' className="p-4 md:p-6 font-semibold">Home</NavLink>
        </div>
      </nav>
      <div className="flex items-center justify-center">
        <div className="md:h-[660px] h-screen w-full">
          <img src={loginImg} alt="backImg" className="h-full w-full" />
        </div>
        <div className="bg-white bg-opacity-75 p-8 rounded-lg absolute md:w-[500px]">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome to <span className="text-light-green">CULTIFY</span>
          </h2>
          <h3 className="text-[35px] font-semibold mb-4 text-green text-center">
            Login
          </h3>
          <form action="" method="">
            <div className="mb-4 md:leading-10">
              <label htmlFor="email" className="block text-gray-700">
                Enter your email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4 md:leading-10">
              <label htmlFor="password" className="block text-gray-700">
                Enter your password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="leading-[50px]  md:flex md:items-center md:justify-between mb-4">
              <Link
                to=""
                className="text-sm block mt-2 cursor-pointer text-dark-grey"
              >
                Forgot password
              </Link>
              <p className="text-gray-600">
                No account?{" "}
                <Link to="#" className="text-green">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="flex justify-center items-center md:mt-[7px]">
              <button
                type="submit"
                className="text-white md:px-[60px] md:py-[10px] px-[15px] py-[10px] rounded-[10px] bg-green "
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
