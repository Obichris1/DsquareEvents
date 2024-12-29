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
      image: '/Gallery/HeroImage3.jpeg',
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: '/Gallery/HeroImage2.jpg',
    },
    {
      id: 4,
      title: "the best pizza to share with your family",
      image: '/Gallery/Gallery9.jpg',
    },


  ];


  const [currentSlide,setCurrentSlide] = useState(0)

  useEffect(() =>{
      const interval = setInterval(() => setCurrentSlide(prev =>(prev === data.length - 1 ? 0 : prev + 1)),4000);


      return () => clearInterval(interval)
  },[])


  return (
    <div className=" overflow-hidden h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      <div className='w-full h-1/2 relative lg:h-full'>
           <Image src={data[currentSlide].image} alt='' fill  className='object-contain'  />
        </div>  

      <div>

      </div>
    </div>


  );
};

export default HeroSection;
