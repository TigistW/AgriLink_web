import React from "react";
// import { HiMenuAlt3} from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cornImg from "../assets/cornImg.png";

function Ginger() {
  return (
    <div className="">
      <nav className="bg-white z-40">
        <div className="w-5/6 mx-auto flex justify-between">
          <div className="md:ml-[40px] md:w-[200px] w-[120px]  md:py-5 p-4">
            <img src={logo} alt="logoimg" />
          </div>
          <button>
            <FaBars size={25} />
          </button>
        </div>
      </nav>
      <div className="md:flex border-2">
        <div className="bg-green text-white md:w-1/5 md:py-5 md:px-3 md:h-[660px] md:rounded-tr-[40px]">
          <div className="md:leading-[70px] md:py-10 text-center flex flex-col md:h-[600px] text-[17px] md:text-[20px]">
            <Link to="/dashboard">Dashboard</Link>
            <Link>Investment</Link>
            <Link className="bg-light-green">Farm Projects</Link>
            <Link>Profile</Link>
          </div>
        </div>
        <div className="py-5 md:px-10 md:w-4/5 bg-light-blue">
          <div className="flex">
            <Link
              to="/farm"
              className="font-bold text-green text-[17px] hover:text-dark-grey"
            >
              Explore Farm Projects
            </Link>
            {">"}
            <Link className="font-bold text-green text-[17px] hover:text-dark-grey">
              The ginger Project
            </Link>
            {" >"}
          </div>
          <div className="md:mt-5 rounded-[20px] flex flex-col border-2 border-green border-b-0 bg-white mt-4">
            <div className="md:flex h-[350px]">
              <div className="basis-7/10">
                <img src={cornImg} alt="sideimage" className="h-full" />
              </div>
              <div className="md:mt-0 mt-3 md:leading-[35px] basis-3/10 md:p-7">
                <h1 className="text-center font-bold text-[20px]">
                  THE GINGER PROJECT
                </h1>
                <div className="md:px-0 px-3">
                  <p>PRICE PER UNIT - #5000</p>
                  <p>DURATION - 6 month</p>
                  <p>RIO - 10%</p>
                  <p>LOCATION - Oyo</p>
                  <p>START DATE - 1-2-2023</p>
                  <p>END DATE - 2-3-2023</p>
                </div>
              </div>
            </div>
            <div className="md:mt-7 mt-10 md:px-3">
              <h2 className="md:px-0 px-3 font-bold text-[20px]">
                DESCRIPTION
              </h2>
              <p className="md:px-0 px-3">
                Invest in our exceptional farm land in Oyo state! This prime
                agricultural opportunity spans from 1-2-3333 to 12-33-4443, a
                duration of 5 months. With a guaranteed 10% Return on Investment
                (ROI), this investment promises substantial profits. You have
                the flexibility to choose your preferred return type: either
                monetary returns or a share of the farm's abundant produce.
                Priced at just 5000 per unit, this farm land presents a
                compelling opportunity to capitalize on the booming agricultural
                sector. Secure your investment today and watch your returns grow
                on this fertile land!
              </p>
              <div className="md:mt-5 mt-5 flex md:justify-end">
                <div className="md:px-0 px-4 flex flex-col md:flex-row md:justify-between w-full md:w-3/5">
                  <button
                    onClick={() => {}}
                    className="p-2 px-8 bg-dark-grey border-2 border-green rounded-[10px] hover:text-white"
                  >
                    Invest now
                  </button>
                  <Link className="text-dark-grey hover:text-black underline mt-2 md:mt-0">
                    Terms and Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ginger;
