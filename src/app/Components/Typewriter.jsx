'use client'

import React, { useState, useEffect } from "react";

const TypewriterEffect = ({text}) => {
  // const text = "Think celebrations, Think D'square";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  console.log(text);
  

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed in milliseconds

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
        {displayedText.split(" ").map((word, wordIndex) => {
          // Highlight specific words dynamically
          if (word === "us") {
            return (
              <span key={wordIndex} className="text-[#EBB709] font-bold">
                {word}{" "}
              </span>
            );
          }
          if (word === "D'square" ) {
            return (
              <span key={wordIndex} className="text-[#EBB709] font-bold">
                {word}
              </span>
            );
          }
          return `${word} `;
        })}
        {/* <span className="border-r-2 border-gray-800 animate-pulse"></span> */}
      </h1>
    </div>
  );
};

export default TypewriterEffect;
