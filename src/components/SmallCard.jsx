import React from 'react'

function SmallCard({
    image
}) {
  return (
    <div className='w-8 sm:w-12 lg:w-20 xl:w-24 h-8 sm:h-12 lg:h-20 xl:h-24 flex justify-center items-center rounded-lg md:rounded-xl lg:rounded-2xl shadow-[0px_0px_5px_2px_rgba(18,133,255,1)] bg-gradient-to-bl from-[rgba(29,33,52,1)] to-[rgba(19,19,25,0.84)]'>
        <img className='w-4 sm:w-6 lg:w-10 xl:w-12 h-4 sm:h-6 lg:h-10 xl:h-12' src={image} alt="" />
    </div>
  )
}

export default SmallCard