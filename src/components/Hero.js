import React from 'react';
import HeroImg from "../assets/Heroimg.jpg";
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <section
      id="Home"
      className="bg-light-blue md:flex md:justify-between md:items-center md:h-full gap-16 md:mt-[80px] mb-[40px]"
    >
      <div className="md:order-2 flex justify-center basis-1/2 z-10 mt-16 md:mb-16 md:mt-25 md:max-h-[620px] md:h-full">
        <div className="z-0">
          <img
            src={HeroImg}
            alt="heroimg"
            className="z-10 max-w-[400px] md:max-w-[600px] md:w-[500px] md:h-[500px] w-[280px] h-[280px] rounded-full"
          />
        </div>
      </div>
      <div className="z-30 basis-1/2 mt-12 md:ml-20 md:text-start text-center">
        <p className="md:font-bold md:leading-[65px] md:text-5xl font-bold">
          Invest in Farms with Ease,{" "}
          <span className="text-green">Seamlessly</span> Connecting You to
          Agriculture.
        </p>
        <p>
          Invest confidently in the agriculture industry. Explore our platform,
          find exciting farm investment opportunities, and enjoy the benefits of
          a thriving sector. Start growing your wealth through agricultural
          investments today.
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
    </section>
  );
}

export default Hero
