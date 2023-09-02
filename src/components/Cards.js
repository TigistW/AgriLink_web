import React from 'react'

function Cards({ image, title, paragraph }) {
  return (
    <div className='flex flex-col justify-center items-center md:py-[40px] md:px-5 md:w-[350px] bg-white rounded-[10px] py-[25px]'>
        <img src={image} alt="image"/>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-center'>{paragraph}</p>
    </div>
  )
}

export default Cards
