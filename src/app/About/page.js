"use client"

import React from "react";
import TypewriterEffect from "../Components/Typewriter";
import { Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion"; 


const page = () => {
  const animatedText = "A few things about us";

  // Framer Motion Variants for Scroll Animations
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-[90%] m-auto flex flex-col gap-8 md:w-[90%]">
      {/* Typewriter Heading */}
      <TypewriterEffect text={animatedText} />
      <hr className="mt-5" />

      {/* Section 1: Why Choose D'Square */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
        className="flex flex-col md:flex-row items-center justify-center gap-12 text-gray-500"
        >
        <div className="md:w-[50%] flex flex-col gap-4">
          <Typography variant="h5" className="font-bold mb-2">
            Why Choose <span className="text-[#EBB709]">D'Square?</span>
          </Typography>
          <div className=" rounded-lg">
            
              <Typography className="text-[14px] leading-7">
                With a spacious 700-seating capacity, our facility is designed
                to provide comfort and style for gatherings of all sizes. Enjoy
                modern amenities, including changing rooms, air conditioning,
                and fully equipped hygienic restrooms that cater to your guests'
                needs.
              </Typography>
        
          </div>
        </div>

        <motion.div variants={slideInRight}>
          <Image
            src="/Gallery/Gallery5.jpeg"
            width={500}
            height={500}
            alt="Event Center"
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Section 2: Dedicated Photoshoot Corner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
        className="flex flex-col md:flex-row items-center justify-center gap-12 text-gray-500"
      >
        <motion.div variants={slideInLeft}>
          <Image
            src="/Gallery/Gallery8.jpeg"
            width={500}
            height={500}
            alt="Photoshoot Corner"
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="md:w-[50%] flex flex-col gap-4">
          <Typography variant="h5" className="font-bold mb-2">
            Dedicated <span className="text-[#EBB709]">Photoshoot Corner</span>
          </Typography>
          <div className="">
       
              <Typography className="text-[14px] leading-7">
                Create unforgettable memories with our elegant photoshoot
                corner, designed for timeless photographs. Equipped with 24/7
                power supply and reliable backup systems, you can enjoy your
                special day without interruption.
              </Typography>
      
          </div>
        </div>
      </motion.div>

      {/* Section 3: Modern Amenities */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
        className="flex flex-col md:flex-row items-center justify-center gap-12 text-gray-500"
      >
        <div className="md:w-[50%] flex flex-col gap-4">
          <Typography variant="h5" className="font-bold mb-2">
            Modern <span className="text-[#EBB709]">Amenities</span>
          </Typography>
          <div className="">
       
              <Typography className="text-[14px] leading-7">
                Our venue features state-of-the-art amenities such as secure car
                parking, CCTV surveillance, and easy accessibility from major
                roads, ensuring convenience and safety for all attendees.
              </Typography>
\
          </div>
        </div>

        <motion.div variants={slideInRight}>
          <Image
            src="/Gallery/Gallery5.jpeg"
            width={500}
            height={500}
            alt="Modern Amenities"
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default page;
