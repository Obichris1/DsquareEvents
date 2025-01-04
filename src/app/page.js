import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import { Typography,Button } from "@mui/material";
import AnimatedText from "./Components/AnimatedText";

export default function Home() {
  return (
    <div className="space-y-4 md:space-y-12">
      <HeroSection />

      <hr className=""  />

      <div className="w-[90%] flex flex-col  md:flex-row gap-8 md:gap-12 m-auto ">
        <div className="md:w-1/2 flex flex-col gap-12  ">
        <Typography className="text-left text-xs lg:text-sm leading-relaxed   ">
          Located in the heart of Idimu, Ikotun, <span className="text-[#EBB709] font-semibold">D'Square</span>  Event Centre is where unforgettable celebrations come
          to life. With our spacious, elegant halls and modern facilities, we
          cater to all your event needs, from weddings and birthdays to
          corporate gatherings and more. At D'Square, we believe in making every
          moment extraordinary. That's why our motto is: "Think Celebration,
          Think D'Square." Let us help you create memories that last a lifetime.
          Explore our venue and services today! Contact us to book your event
          and experience celebration redefined.
        </Typography>

        <Typography className="w-full text-left text-xs lg:text-sm leading-relaxed  ">
           At D'Square, we believe in making every
          moment extraordinary. That's why our motto is: "Think Celebration,
          Think D'Square." Let us help you create memories that last a lifetime.
          Explore our venue and services today! 
        </Typography>

        
      <Button className=" px-4 py-3 self-start bg-[#EBB709] text-black hover:scale-110 text-xs rounded-full font-semibold">More about us</Button>
        </div>
        

        
        
        <div className="w-full md:w-1/2">
          <Image src="/Gallery/HeroImage3.jpeg"
          alt=""
         
               width={800}
               height={200}
                className="max-h-[350px] md:max-h-[400px]"  />
        </div>
      
      </div>
    </div>
  );
}
