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
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[black] mt-10">
      {/* Contact Us */}

      <div className="flex flex-col gap-10 mb-4 w-[90%] m-auto py-12">
      <div className="text-[#aaa5a5] text-xs md:text-sm flex flex-col gap-3 ">
      <Typography  className="font-bold uppercase text-[#aaa5a5]  mb-4">Contact info</Typography>
        <span className="flex items-center gap-6">
          <AiOutlineEnvironment />{" "}
          <Link
            href="https://www.google.com/maps/place/D+SQUARE+EVENT+CENTRE/@6.5667163,3.2459785,14z/data=!4m10!1m2!2m1!1s235,+Ariket+Plaza+Alake+B%2Fstop+Ikotun-Idimu+Road,+Lagos!3m6!1s0x103b9180f7b913c9:0x17f9c2fa189f65e7!8m2!3d6.5622673!4d3.2736744!15sCjcyMzUsIEFyaWtldCBQbGF6YSBBbGFrZSBCL3N0b3AgSWtvdHVuLUlkaW11IFJvYWQsIExhZ29zWjciNTIzNSBhcmlrZXQgcGxhemEgYWxha2UgYiBzdG9wIGlrb3R1biBpZGltdSByb2FkIGxhZ29zkgEYZXZlbnRfbWFuYWdlbWVudF9jb21wYW55mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5sTlV4RGNFTlJFQUXgAQD6AQQIABAy!16s%2Fg%2F11p_7ckh03?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3Dogle.com/maps?q=37.7749,-122.4194"
            target="_blank"
            rel="noopener noreferrer"
          >
            235, Ariket Plaza Alake B/stop Ikotun-Idimu Road, Lagos
          </Link>
        </span>
        <span className="flex items-center gap-6">
          <AiOutlineMail />{" "}
          <Link href="mailto:dolaposquare123@gmail.com?subject=Inquiry&body=Hello, I have a question...">
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

          <Link href="https://www.instagram.com/dsquarevents/" target="_blank" className="p-3 bg-[#aaa5a5] rounded-full text-white hover:bg-transparent">
              <AiOutlineInstagram />
            </Link>
            
            <Link href="https://www.facebook.com/profile.php?id=100090758267591&mibextid=ZbWKwL" target="_blank"  className="p-3 bg-[#aaa5a5] rounded-full text-white hover:bg-transparent">
              <AiFillFacebook />
            </Link>

          

            <Link href="https://x.com/DEventcent23511" target="_blank" className="p-3 bg-[#aaa5a5] rounded-full text-white hover:bg-transparent">
              <AiOutlineX />
            </Link>
         
        </div>
      </div>

      <hr className="border-[#aaa5a5]" />
   
      <div className="py-4 w-[90%] m-auto text-white flex flex-col md:flex-row justify-between items-center gap-2 ">
    
        {/* Logo */}
        <div className="">
          <Link href="/">
            <Image src="/Logo.jpg" alt="" width={150} height={150}/>
          </Link>
        </div>

        {/* Text */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-1">
          <Typography className="text-xs text-[#aaa5a5] text-center  ">&copy; 2024 D Square events center. | Designed by   </Typography>
            <Typography className="text-xs text-[10px] text-[#aaa5a5] text-center  "><Link href="https://obinnaportfolio.netlify.app/" target="_blank"> OXRIS SOLUTIONS</Link></Typography>
          
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Footer;
