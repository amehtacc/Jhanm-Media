import React from 'react'
import SmallCard from './SmallCard'
import { diamond, flash, unlimited, paid, staisfation } from "../assets/images";

function Card() {
    const cardDetail = [
        {
            image:flash,
            title:'Extra fast delivery',
            description:'Get your videos delivered within 24-48 hours with our Extra Fast Delivery—speed without compromising quality!'
        },
        {
            image:unlimited,
            title:'Unlimited revisions',
            description:`Enjoy unlimited revisions with our service—your satisfaction is our priority until it's perfect!`
        },
        {
            image:paid,
            title:'Saved costs',
            description:'Save big with our affordable rates—get high-quality service that fits your budget and helps you cut costs!'
        },
        {
            image:diamond,
            title:'Exceptional quality',
            description:'Enjoy exceptional quality with every project—attention to detail and results that go beyond your expectations every time!'
        },
        {
            image:staisfation,
            title:'Staisfation guaranteed',
            description:`Your satisfaction is guaranteed—if you're not completely happy, we'll make it right and ensure your needs are met!`
        }
    ]
  return (
    <>
    {cardDetail.map((info) => (
        <div key={info.title} className='w-[144px] sm:w-[180px] md:w-[210px] lg:w-[290px] xl:w-[384px] h-[160px] sm:h-[196px] md:h-[226px] lg:h-[306px] xl:h-[400px] shadow-[0px_5px_100px_10px_rgba(18,21,37,1)] px-2 sm:px-3 lg:px-6 xl:px-8 py-4 sm:py-5 md:py-7 lg:py-10 xl:py-16 flex flex-col items-center gap-[10px] sm:gap-5 md:gap-5 lg:gap-7 xl:gap-10 rounded-xl bg-gradient-to-b from-[rgba(29,33,52,1)] to-[rgba(19,19,25,0.84)]'>
        <SmallCard
        image={info.image}
        />
        <h2 className='text-[10px] sm:text-xs md:text-sm lg:text-[18px] xl:text-2xl font-medium'>{info.title}</h2>
        <p className='text-[8px] md:text-[10px] lg:text-xs xl:text-sm text-center text-[#c3c2c2]'>{info.description}</p>
    </div>
    ))}
    </>
  )
}

export default Card