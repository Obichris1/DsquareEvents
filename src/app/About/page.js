"use client"

import React from "react";
import TypewriterEffect from "../Components/Typewriter";
import AboutSection from "../Components/AboutSection";



const page = () => {
  const animatedText = "A few things about us";

  

  return (
    <div className="w-[90%] m-auto space-y-8">
      {/* Typewriter Heading*/}
      <TypewriterEffect text={animatedText} />
      <hr className="" />

      <AboutSection />

    

     
    </div>
  );
};

export default page;
