import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import human from "../assets/human.png";
// import { AiFillGoogleCircle } from "react-icons/ai";

function Signin() {
  return (
    <div className="overflow-auto">
      <Navbar />
      <div className="">
        <div className="md:w-5/6 mx-auto md:mt-[140px] flex items-center justify-center">
          <div className="bg-[#d5cece] p-8 rounded-lg md:w-[450px] md:mt-0 mt-[80px]">
            <h2 className="text-2xl font-bold mb-2 text-center">
              Welcome to AgriLink
            </h2>
            <h3 className="text-[35px] font-semibold mb-2 text-green text-center">
              Login
            </h3>
            <form action="" method="" className="md:leading-3">
              <div className="mb-2 md:leading-10">
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
              <div className="mb-[2px] md:leading-10">
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
                <Link to="" className="text-sm block mt-2 cursor-pointer">
                  Forgot password
                </Link>
              </div>
              <div className="flex justify-center items-center md:mt-[7px]">
                <button
                  type="submit"
                  className="text-white md:px-[60px] md:py-[15px] px-[15px] py-[10px] rounded-[10px] bg-green  w-full"
                >
                  Sign In
                </button>
              </div>
              <div className="md:mt-3 md:leading-[30px]">
                <p className="text-center">
                  or, <span className="font-bold">sign in</span> with
                </p>
                <div className="text-center">
                  <Link to="#" className="text-dark-grey">
                    Google
                  </Link>
                </div>
                <p className="text-gray-600 text-center">
                  Don't have an account yet?{" "}
                  <Link to="/signup" className="text-green">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className={`ss:flex flex-col hidden`}>
            <div className="z-30 basis-1/2 mt-12 md:ml-20 md:text-start text-center">
              <p className="md:leading-[65px] sm:text-[25px] md:ml-[120px] text-green font-semibold">
                Welcome To
              </p>
              <p className="md:font-bold sm:leading-[65px] md:text-[75px] sm:text-[45px] font-bold md:ml-[45px]">
                <span className="text-green">Agri</span>Link
              </p>
              <div className="md:mt-[30px]">
                <p className="md:text-[25px] sm:text-[18px] md:ml-[35px]">
                  Cultivating Tommorow, Today
                </p>
              </div>
            </div>
            <div className="md:mt-[20px] z-0">
              <img
                src={human}
                alt="heroimg"
                className="md:ml-[180px] max-w-[300px] md:max-w-[150px] md:w-[500px] md:max-h-[180px] w-[280px] h-[280px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
