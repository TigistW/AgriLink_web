import React from "react";
import { NavLink, Link } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import logo from "../assets/logo.png";

function Register() {
  return (
    <div className="">
      <nav className="bg-white z-40">
        <div className="w-5/6 mx-auto flex justify-between">
          <div className="md:ml-[40px] md:w-[200px] w-[120px]  md:py-5 p-4">
            <img src={logo} alt="logoimg" />
          </div>
          <NavLink to="/" className="p-4 md:p-6 font-semibold">
            Home
          </NavLink>
        </div>
      </nav>
      <div className="flex items-center justify-center">
        <div className="md:h-[660px] h-screen w-full">
          <img src={loginImg} alt="backImg" className="h-full w-full" />
        </div>
        <div className="bg-white bg-opacity-75 p-8 rounded-lg absolute md:w-[500px] h-[600px]">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Welcome to <span className="text-light-green">CULTIFY</span>
          </h2>
          <h3 className="text-[35px] font-semibold mb-2 text-green text-center">
            Register
          </h3>
          <form action="" method="">
            <div className="md:flex md:gap-10 md:mb-[10px] mb-[10px]">
              <div className="md:mb-[0px]">
                <label
                  htmlFor="contactNumber"
                  className="block text-gray-700 mb-2"
                >
                  First name
                </label>
                <input
                  type="email"
                  id="contact"
                  placeholder="user name"
                  className="border border-gray-300 rounded-md p-2 w-full md:h-[50px]"
                />
              </div>
              <div className="">
                <label
                  htmlFor="contactNumber"
                  className="block text-gray-700 mb-2"
                >
                  Last name
                </label>
                <input
                  type="email"
                  id="contact"
                  placeholder="last name"
                  className="border border-gray-300 rounded-md p-2 w-full md:h-[50px]"
                />
              </div>
            </div>
            <div className="md:mb-[10px] mb-[10px]">
              <label
                htmlFor="contactNumber"
                className="block text-gray-700 mb-2"
              >
                Contact number
              </label>
              <input
                type="email"
                id="contact"
                placeholder="contact number"
                className="border border-gray-300 rounded-md p-2 w-full md:h-[50px]"
              />
            </div>
            <div className="md:mb-[10px] mb-[10px]">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Enter your email address
              </label>
              <input
                type="password"
                id="email"
                placeholder="example@gmail.com"
                className="border border-gray-300 rounded-md p-2 w-full md:h-[50px]"
              />
            </div>
            <div className="md:mb-[10px] mb-[10px]">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Enter your password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-md p-2 w-full md:h-[50px]"
              />
            </div>
            <div className="flex gap-5 md:gap-0 md:flex-col">
              <div className=" md:flex md:items-center md:justify-end md:mb-[15px] ">
                <p className="text-gray-600">
                  Have an account?{" "}
                  <Link to="#" className="text-green">
                    Login
                  </Link>
                </p>
              </div>
              <div className="flex justify-center items-center md:mt-[7px] ">
                <button
                  type="submit"
                  className="text-white md:px-[60px] md:py-[10px] px-[5px] py-[5px] rounded-[10px] bg-green "
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
