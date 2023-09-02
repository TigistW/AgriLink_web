import React from 'react'
import aboutImg from '../assets/aboutImg.png';

function Aboutus() {
  return (
    <div id='aboutus' className="md:mt-[85px] mt-[30px]">
      <h1 className="text-center text-[30px] md:text-[45px] font-bold text-green">
        About US
      </h1>
      <div
        className="md:flex md:justify-between md:items-center w-5/6 mx-auto"
      >
        <div className="flex justify-center md:justify-start basis-1/2 z-10 mt-16 md:mt-25 md:max-h-[620px] md:h-full">
          <div className="z-0">
            <img
              src={aboutImg}
              alt="Aboutimg"
              className="z-10 max-w-[400px] md:max-w-[600px] md:w-[500px] md:h-[350px] rounded-[5px] md:rounded-[10px] w-[300px]"
            />
          </div>
        </div>
        <div className="basis-1/2 mt-12 md:ml-20 md:text-start text-center">
          <p>
            Welcome to our farm investment platform, the easiest and fastest way
            to connect with the world of agriculture. At Cultify, we are
            dedicated to simplifying the investment process, providing you with
            a seamless experience that unlocks the lucrative opportunities found
            within the farming industry. Our user-friendly platform empowers you
            to explore and invest in farms with ease, allowing you to
            participate in the growth of this vital sector. Join us today and
            embark on a journey that combines simplicity, speed, and the promise
            of prosperous farm investments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus
