import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import { Typography,Button } from "@mui/material";
import AnimatedText from "./Components/AnimatedText";

export default function Home() {
  return (
    <div className="space-y-12">
      <HeroSection />

      <hr className=""  />

      <div className=" mt-8 w-[90%] flex flex-col md:flex-row gap-8 md:gap-12 m-auto ">
        <div className="md:w-1/2 flex flex-col gap-6 ">
        <Typography className="text-left text-xs md:text-sm   ">
          <span className="text-[#EBB709]">D'Square</span> event Centre Located in the heart of Idimu,
          Ikotun, D'Square Event Centre is where unforgettable celebrations come
          to life. With our spacious, elegant halls and modern facilities, we
          cater to all your event needs, from weddings and birthdays to
          corporate gatherings and more. At D'Square, we believe in making every
          moment extraordinary. That's why our motto is: "Think Celebration,
          Think D'Square." Let us help you create memories that last a lifetime.
          Explore our venue and services today! Contact us to book your event
          and experience celebration redefined.
        </Typography>

        <Typography className="w-full text-left text-xs md:text-sm  ">
           At D'Square, we believe in making every
          moment extraordinary. That's why our motto is: "Think Celebration,
          Think D'Square." Let us help you create memories that last a lifetime.
          Explore our venue and services today! Contact us to book your event
          and experience celebration redefined.
        </Typography>

        
      <Button className="mt-20 px-6 md:px-4 py-3 md:text-lg self-start bg-[#EBB709] text-black hover:scale-110 text-sm">More about us</Button>
        </div>
        

        
        
        <div className="w-full md:w-1/2">
          <Image src="/Gallery/HeroImage3.jpeg"
          alt=""
         
               width={500}
               height={500}
                className="object-cover "  />
        </div>
      
      </div>
    </div>
  );
}
