import React from 'react';
import Methods from './Methods';
import howImg from '../assets/howImg.png';
import { NavLink} from 'react-router-dom';

function Howitworks() {
  const files = [
    {
      title: "Explore",
      explanation: "Discover diverse farm investment opportunities.",
    },
    {
      title: "Research",
      explanation:
        "Access detailed information about farms, returns, and risks.",
    },
    {
      title: "Invest",
      explanation: "Choose your desired farm and invest securely.",
    },
    {
      title: "Track",
      explanation: "Monitor your investments and farm progress.",
    },
    {
      title: "Manage",
      explanation:
        "Easily manage your profile and make adjustments. Join us today and experience the seamless process of investing in farms.",
    },
  ];
  return (
    <div className="md:mt-[85px] mt-[40px]">
      <h1 className="text-center text-[30px] md:text-[45px] font-bold text-green">
        How It Works
      </h1>
      <div className="md:flex md:justify-center md:items-center w-5/6 mx-auto">
        <div className="flex justify-center md:justify-end basis-1/2 z-10 mt-16 md:mt-25 md:max-h-[620px] md:h-full">
          <div className="z-0">
            <img
              src={howImg}
              alt="Aboutimg"
              className="z-10 max-w-[400px] md:max-w-[600px] md:w-[500px] md:h-[420px] rounded-[5px] md:rounded-[10px] w-[300px]"
            />
          </div>
        </div>
        <div className="z-30 basis-1/2 mt-12 md:ml-20 md:text-start text-center md:leading-[55px] leading-[30px]">
          {files.map((item) => (
            <Methods title={item.title} explanation={item.explanation} />
          ))}
          <div className="md:flex justify-center items-center mt-[40px]">
            <NavLink
              to="/register"
              className="text-white md:px-[20px] md:py-[0px] px-[15px] py-[10px] rounded-[10px] bg-green"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitworks
