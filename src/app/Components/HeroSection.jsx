"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeroSection = () => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const data = [
  
    {
      id: 2,
      title: "we deliver your order wherever you are in Lagos",
      image: "/Gallery/picture-5.jpg",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/Gallery/picture-7.jpg",
    },
    {
      id: 4,
      title: "the best pizza to share with your family",
      image: "/Gallery/picture-13.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" h-[calc(100vh-25rem)] bg-red-400 md:h-[calc(100vh-6rem)] relative overflow-hidden">
      <div className={isLargeScreen ? "relative w-full h-full" : "w-full  "}>
        {data.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {isLargeScreen ? (
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
            ) : (
              <div>
                <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
              
                className=""

                
              />

</div>


      {/* Text Overlay */}
      {/* <div className="relative w-[70%] m-auto top-48 z-10 flex flex-col justify-center items-center h-full px-6 text-center text-black bg-white ">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Royal Oaks Events Limited
        </h1>
        <p className="text-lg md:text-2xl font-light mt-4">
          Event Centre <span className="text-[#EBB709] font-semibold">&</span>{" "}
          Party rentals in Lekki, Lagos, Nigeria.
        </p>
      </div> */}
</div>

              
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
