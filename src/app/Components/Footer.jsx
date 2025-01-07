import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import {
  AiFillFacebook,
  AiOutlineEnvironment,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineX,
  AiOutlineFacebook
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[black] mt-10">
      {/* Contact Us */}

      <div className="flex flex-col gap-10 mb-4 w-[90%] m-auto py-12">
      <div className="text-[#aaa5a5] text-xs md:text-sm flex flex-col gap-3 ">
      <Typography  className="font-bold uppercase text-[#aaa5a5] mb-4">Contact info</Typography>
        <span className="flex items-center gap-6">
          <AiOutlineEnvironment />{" "}
          <Link
            href="https://www.google.com/maps?q=37.7749,-122.4194"
            target="_blank"
            rel="noopener noreferrer"
          >
            235, Ariket Plaza Alake B/stop Ikotun-Idimu Road, Lagos
          </Link>
        </span>
        <span className="flex items-center gap-6">
          <AiOutlineMail />{" "}
          <Link href="mailto:example@example.com?subject=Inquiry&body=Hello, I have a question...">
            dolaposquare123@gmail.com
          </Link>
        </span>
        <span className="flex items-center gap-6">
          <AiOutlinePhone />
          <Link href="tel:+234 916 523 5934">+234 916 523 5934</Link>
      
        </span>
       </div>

          {/* SOCIAL MEDIA  */}

          <div className="flex gap-3 md:self-end">
            <Link href="" className="p-3 bg-[#aaa5a5] rounded-full text-white hover:bg-transparent">
              <AiFillFacebook />
            </Link>

            <Link href="" className="p-3 bg-[#aaa5a5] rounded-full text-white hover:bg-transparent">
              <AiOutlineInstagram />
            </Link>

            <Link href="" className="p-3 bg-[#aaa5a5] rounded-full text-white hover:bg-transparent">
              <AiOutlineX />
            </Link>
         
        </div>
      </div>

      <hr className="border-[#aaa5a5]" />
   
      <div className="py-4 w-[90%] m-auto text-white flex flex-col md:flex-row justify-between items-center gap-2 ">
    
        {/* Logo */}
        <div className="">
          <Link href="/">
            <img src="/Logo.jpg" alt="" width={150} />
          </Link>
        </div>

        {/* Text */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-1">
          <Typography className="text-xxs md:text-xs text-[#aaa5a5] text-center  ">&copy; 2024 D Square events center. | Designed by   </Typography>
            <Typography className="text-xxs text-[#aaa5a5] text-center  "><Link href=""> OXRIS SOLUTIONS</Link></Typography>
          
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Footer;
