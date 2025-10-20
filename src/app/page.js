import Link from "next/link";
import HeroSection from "./Components/HeroSection";
import PackagesSection from "./Components/PackagesSection";
import { Typography, Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className="md:space-y-12">
      {/* Hero Section */}
      <HeroSection />

      <hr className="w-[90%] m-auto " />

      {/* Content Section */}
      <div className="w-[90%] flex flex-col md:flex-row gap-12 m-auto items-center mt-5">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col gap-6 items-center justify-between">
          <Typography className="text-left md:text-base text-sm  ">
            <span className="text-brandYellow font-semibold">D Square</span>{" "}
            event centre is the premier destination for unforgettable occasions.
            Our spacious and elegantly designed halls, coupled with
            state-of-the-art facilities, provide the perfect setting for every
            type of event—be it weddings, birthdays, corporate functions, or
            more.
          </Typography>

          <Typography
            className="text-left md:text-base text-sm leading-relaxed "
            variant="h6"
          >
            At D Square, we are committed to turning your visions into reality.
            Guided by our motto
            <span className="italic font-semibold text-gray-900">
              "Think Celebration, Think D Square."
            </span>{" "}
            we aim to create experiences that leave lasting impressions.
          </Typography>
          <Link href="/About" className="self-start">
            <Button className=" bg-brandYellow text-black px-4 py-3 md:p-4 text-xs uppercase font-semibold rounded-full shadow-sm hover:scale-105 hover:shadow-md transition-transform">
              More about us
            </Button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src="/Gallery/HeroImage3.jpeg"
            alt="Event Center"
            width={800}
            height={400}
            className="max-h-[400px] rounded-lg shadow-lg object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-lg"></div>
        </div>
      </div>

      <hr className="w-[90%] m-auto" />

      {/* Packages Section */}

      <PackagesSection />
    </div>
  );
}
