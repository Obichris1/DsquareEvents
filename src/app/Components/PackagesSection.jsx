"use client";

import { Typography, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PackagesSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true); // Prevent re-animation
        }
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls, hasAnimated]);

  const packages = [
    {
      title: "Bronze",
      description: "Ideal for smaller gatherings and events.",
      features: [
        "4 Hours Uninterrupted Power Supply",
        "Standard Chairs",
        "350 or less Capacity",
      ],
      price: "",
    },
    {
      title: "Silver",
      description: "Perfect for mid-sized events and celebrations.",
      features: [
        "8 Hours Uninterrupted Power Supply",
        "Silver Chairs",
        "350 - 500 Capacity",
      ],
      price: "",
    },
    {
      title: "Gold",
      description: "Premium package for grand occasions and large events.",
      features: [
        "8 Hours Uninterrupted Power Supply",
        "Golden Chairs",
        "350 to Maximum Capacity",
      ],
      price: "",
    },
  ];
  

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-12" ref={sectionRef}>
      <div className="w-[90%] m-auto text-center space-y-8">
        <Typography
          className="text-2xl md:text-3xl font-bold"
          variant="h4"
        >
           <span className="text-brandYellow font-semibold">Active</span> Deals
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Typography
                className="text-lg font-semibold mb-2"
                variant="h6"
              >
                {pkg.title}
              </Typography>
              <Typography
                className="text-sm text-gray-600 mb-4"
                variant="body2"
              >
                {pkg.description}
              </Typography>
              <ul className="text-sm text-gray-600 space-y-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-brandYellow">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Typography
                className="text-lg md:text-xl font-bold text-gray-800 mt-4"
                variant="h5"
              >
                {pkg.price}
              </Typography>
              <Link href='/Contact' >
              <Button
                className="mt-4 px-4 py-2 md:px-4 md:py-3 bg-brandYellow font-semibold text-black text-xs  rounded-full hover:scale-105  transition-transform justify-start"
              >
                Book Now
              </Button></Link>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
