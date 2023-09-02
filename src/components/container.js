import React from 'react'
import { Link } from 'react-router-dom';

function Container({ image, title, price, links, duration, roi, location, start, end }) {
  return (
    <div className="bg-white flex gap-4 md:w-[400px] md:h-[280px] border-2 border-dark-grey rounded-[15px]">
      <div className="basis-1/2">
        <img src={image} alt="image" className='h-full'/>
      </div>
      <div className="basis-1/2 flex-col md:py-3 leading-[25px]">
        <p className="text-green font-bold md:text-[20px]">{title}</p>
        <p>{price}</p>
        <p>{duration}</p>
        <p>{roi}</p>
        <p>{location}</p>
        <p>{start}</p>
        <p>{end}</p>
        <Link to="#" className="hover:text-green">
          {links}
        </Link>
      </div>
    </div>
  );
}

export default Container
