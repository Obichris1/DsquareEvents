import React from 'react'
import { Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { Carousel } from "../Components/Carousel";


// Framer Motion Variants for Scroll Animations
const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };


const AboutSection = () => {
  return (
    <div className='flex flex-col gap-8'>
          {/* Section 1: Why Choose D'Square */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
        className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
        <div className="md:w-[50%] flex flex-col gap-4">
          <Typography variant="h6" className="font-bold mb-2 text-[17px] md:text-xl">
            Why Choose <span className="text-brandYellow">D'Square?</span>
          </Typography>
          <div className=" rounded-lg">
            
              <Typography className="text-[14px] leading-7 ">
                With a spacious 600-seating capacity, our facility is designed
                to provide comfort and style for gatherings of all sizes. 
                From weddings and corporate events to intimate gatherings, our versatile space is designed to adapt to your unique needs.
                Located at the heart of Ikotun-Idimu, our facility offers easy accessibility from major
                roads, ensuring convenience and safety for all attendees. 
              </Typography>
        
          </div>
        </div>

        <motion.div variants={slideInRight}>
          <Image
            src="/Gallery/picture-11.jpg"
            width={500}
            height={500}
            alt="Event Center"
            className="object-cover rounded-md shadow-md"
          />
        </motion.div>
      </motion.div>

      {/* Section 2: Dedicated Photoshoot Corner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
        className="flex flex-col md:flex-row items-center justify-center gap-12 "
      >
        <motion.div variants={slideInLeft}>
          <Image
            src="/Gallery/picture-2.jpg"
            width={500}
            height={500}
            alt="Photoshoot Corner"
            className="object-cover rounded-sm shadow-md"
          />
        </motion.div>

        <div className="md:w-[50%] flex flex-col gap-4">
          <Typography variant="h6" className="font-bold mb-2 text-[17px] md:text-xl">
            Dedicated <span className="text-brandYellow">Photoshoot Corner</span>
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
        className="flex flex-col md:flex-row items-center justify-center gap-12 "
      >
        <div className="md:w-[50%] flex flex-col gap-4">
          <Typography variant="h6" className="font-bold mb-2 text-[17px] md:text-xl">
            Modern <span className="text-brandYellow">Amenities</span>
          </Typography>
          <div className="">
       
              <Typography className="text-[14px] leading-7">
                Our venue features state-of-the-art amenities such as secure car
                parking, CCTV surveillance,Enjoy
                modern amenities, including changing rooms, air conditioning,
                and fully equipped hygienic restrooms that cater to your guests'
                needs. 
              </Typography>

          </div>
        </div>

        <motion.div variants={slideInRight}>
            <Carousel />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutSection