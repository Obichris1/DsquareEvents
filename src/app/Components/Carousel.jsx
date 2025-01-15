'use client'
import React, { useState,useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

import "./Slider.css";

export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const data = [
    {
      src: "/Gallery/picture-10.jpg",
      alt: "Image 1 for carousel"
    },
    {
      src: "/Gallery/picture-9.jpg",
      alt: "Image 2 for carousel"
    },

    {
      src: "/Gallery/picture-13.jpg",
      alt: "Image 4 for carousel"
    },
    
    {
      src: "/Gallery/picture-8.jpg",
      alt: "Image 3 for carousel"
    },
  
  ]
  return (
    <div className="carousel">
      {/* <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" /> */}
      {data.map((item, idx) => {
        return (
          <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            idx === slide ? "opacity-100" : "opacity-0 "
          }`}>
          <Image
            src={item.src}
            alt={item.alt}
           
            width={500}
            height={500}
            className={slide === idx ? "slide object-contain h-full rounded-lg " : "slide slide-hidden"}
          />
          </div>
        );
      })}
      {/* <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      /> */}
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};