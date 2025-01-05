"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/Gallery/HeroImage1.jpeg",
    },
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
    <div className="h-screen w-screen relative overflow-hidden">
      {data.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="w-full h-full object-fill"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
