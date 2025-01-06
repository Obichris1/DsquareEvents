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
    <div className="  h-[calc(100vh-12rem)] md:h-[calc(100vh-6rem)] relative overflow-hidden">
      <div className={isLargeScreen ? "relative w-full h-full" : "w-full h-1/2"}>
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
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
