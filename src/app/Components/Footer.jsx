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
    <div className="bg-[black] mt-20 ">
      {/* Contact Us */}
      <div className="flex flex-col gap-10 mb-12 w-[90%] m-auto py-4">
      <div className="text-[#aaa5a5] text-sm flex flex-col gap-3 ">
        <span className="flex items-center gap-6">
          <AiOutlineEnvironment />{" "}
          <Link
            href="https://www.google.com/maps?q=37.7749,-122.4194"
            target="_blank"
            rel="noopener noreferrer"
          >
            235 Ikotun - Idimu Rd, Egbe, Lagos 102213, Lagos
          </Link>
        </span>
        <span className="flex items-center gap-6">
          <AiOutlineMail />{" "}
          <Link href="mailto:example@example.com?subject=Inquiry&body=Hello, I have a question...">
            d'square@gmail.com
          </Link>
        </span>
        <span className="flex items-center gap-6">
          <AiOutlinePhone />
          <Link href="tel:+234 898 6372">+234 812 961 4462</Link>
      
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
   
      <div className="py-4 w-[90%] m-auto text-white flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Logo */}
        <div className="">
          <Link href="/">
            <img src="/Logo.jpg" alt="" width={150} />
          </Link>
        </div>

        {/* Text */}
        <div className="flex items-center justify-center">
          <Typography className="text-xs text-[#aaa5a5] text-center flex ">&copy; 2024 D Square events center. | Designed by O'Xris Solutions </Typography>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Footer;
