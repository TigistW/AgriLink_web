import React from "react";
import human from "../assets/human.png";

import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section id="Home" className="md:mt-[80px] mb-[40px]">
      <div className="md:flex md:justify-between md:items-center md:h-full md:w-5/6 mx-auto">
        <div className="md:order-2 flex justify-center basis-1/2 z-10 mt-16 md:mb-16 md:mt-25 md:max-h-[620px] md:h-full">
          <div className="z-0">
            <img
              src={human}
              alt="heroimg"
              className="z-10 max-w-[400px] md:max-w-[500px] md:w-[350px] md:h-[450px] w-[280px] h-[280px] rounded-full"
            />
          </div>
        </div>
        <div className="z-30 basis-1/2 mt-12 md:ml-20 md:text-start text-center">
          <p className="md:font-bold md:leading-[65px] text-[35px] md:text-[75px] font-bold md:ml-[45px]">
            <span className="text-green">Agri</span>Link
          </p>
          <div className="md:mt-[30px]">
            <p className="text-light-green text-[20px] md:text-[40px]">
              Cultivating Tommorow, Today
            </p>
            <div className="mt-[40px]">
              <div className="mb-[20px]">
                <NavLink
                  to="/register"
                  className="text-white md:px-[20px] md:py-[15px] px-[15px] py-[10px] rounded-[10px] bg-green "
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
