import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import { Typography } from "@mui/material";
import AnimatedText from "./Components/AnimatedText";

export default function Home() {
  return (
    <div className="">
      <HeroSection />

      <div className="flex w-[80%] m-auto ">
        <Typography className="w-1/2">
          Welcome to D'Square Event Centre Located in the heart of Idimu,
          Ikotun, D'Square Event Centre is where unforgettable celebrations come
          to life. With our spacious, elegant halls and modern facilities, we
          cater to all your event needs, from weddings and birthdays to
          corporate gatherings and more. At D'Square, we believe in making every
          moment extraordinary. That's why our motto is: "Think Celebration,
          Think D'Square." Let us help you create memories that last a lifetime.
          Explore our venue and services today! Contact us to book your event
          and experience celebration redefined.
        </Typography>
        
        <div>
          <video src="Gallery/Advert.mp4" controls
                autoPlay
                className="w-full max-w-full max-h-[50vh] rounded-xl p-1"  />
        </div>
      
      </div>
    </div>
  );
}
