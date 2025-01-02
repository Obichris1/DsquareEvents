'use client'

import React from "react";
import Image from "next/image";
import { useState,useEffect } from "react";


const HeroSection = () => {

  const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: '/Gallery/HeroImage1.jpeg',
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in Lagos",
      image: '/Gallery/picture-5.jpg',
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: '/Gallery/picture-7.jpg',
    },
    {
      id: 4,
      title: "the best pizza to share with your family",
      image: '/Gallery/picture-11.jpg',
    },


  ];


  const [currentSlide,setCurrentSlide] = useState(0)

  useEffect(() =>{
      const interval = setInterval(() => setCurrentSlide(prev =>(prev === data.length - 1 ? 0 : prev + 1)),4000);


      return () => clearInterval(interval)
  },[])


  return (
    <div className="overflow-hidden h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)]">
      <div className='w-[50%] md:w-full h-full lg:h-full'>
           <Image src={data[currentSlide].image} alt='' fill  className=' md:object-cover'  />
        </div>  

      <div>

      </div>
    </div>


  );
};

export default HeroSection;
