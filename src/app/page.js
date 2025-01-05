import HeroSection from "./Components/HeroSection";
import PackagesSection from "./Components/PackagesSection";
import { Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" md:space-y-16">
      {/* Hero Section */}
      <HeroSection />

      <hr className="w-[90%] m-auto" />

      {/* Content Section */}
      <div className="w-[90%] flex flex-col md:flex-row gap-12 m-auto items-center">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <Typography
            className="text-left text-base md:text-lg leading-relaxed font-light text-gray-800"
            variant="h6"
          >
            Located in the heart of Idimu, Ikotun,{" "}
            <span className="text-brandYellow font-semibold">D'Square</span> Event
            Centre is where unforgettable celebrations come to life. With our
            spacious, elegant halls and modern facilities, we cater to all your
            event needs, from weddings and birthdays to corporate gatherings and
            more.
          </Typography>

          <Typography
            className="text-left text-base md:text-lg leading-relaxed font-light text-gray-800"
            variant="h6"
          >
            At D'Square, we believe in making every moment extraordinary. Our
            motto is:{" "}
            <span className="italic font-semibold text-gray-900">
              "Think Celebration, Think D'Square."
            </span>{" "}
            Let us help you create memories that last a lifetime. Explore our
            venue and services today!
          </Typography>

          <Button
            className="self-start bg-brandYellow text-black px-4 py-2 text-xs font-medium rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          >
            More about us
          </Button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src="/Gallery/HeroImage3.jpeg"
            alt="Event Center"
            width={800}
            height={600}
            className="max-h-[400px] rounded-lg shadow-lg object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg"></div>
        </div>
      </div>

      <hr className="w-[90%] m-auto" />

      {/* Packages Section */}
      
      <PackagesSection />
    </div>
  );
}
