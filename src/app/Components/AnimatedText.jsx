import React from "react";
// import { motion } from "framer-motion";

const SlideInText = () => {
  const slideInVariants = {
    hidden: { x: "-100%", opacity: 0 }, // Start off-screen
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }, // Slide in
  };

  return (
    // <motion.div
    //   initial="hidden"
    //   animate="visible"
    //   variants={slideInVariants}
    //   style={{ fontSize: "24px", fontWeight: "bold", margin: "20px 0" }}
    // >
    //   Slide-in Animation with Framer Motion!
    // </motion.div>
    <></>
  );
};

export default SlideInText;
