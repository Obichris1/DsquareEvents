import React from "react";
import ContactForm from "../Components/ContactForm";
import { Typography, Paper } from "@mui/material";
import MapEmbed from "../Components/MapEmbed";
import Link from "next/link";

import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiFillPhone,
  AiFillEnvironment,
} from "react-icons/ai";

const page = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col gap-12 mt-10">
      <div className="flex items-center flex-col justify-center gap-3 text-center text-black">
        <p className="font-bold text-sm ">VENUE INFO</p>
        <div className="flex gap-3 items-center justify-center">
          <AiFillEnvironment className="text-sm" />{" "}
          <Link
            href="https://www.google.com/maps/place/D+SQUARE+EVENT+CENTRE/@6.5667163,3.2459785,14z/data=!4m10!1m2!2m1!1s235,+Ariket+Plaza+Alake+B%2Fstop+Ikotun-Idimu+Road,+Lagos!3m6!1s0x103b9180f7b913c9:0x17f9c2fa189f65e7!8m2!3d6.5622673!4d3.2736744!15sCjcyMzUsIEFyaWtldCBQbGF6YSBBbGFrZSBCL3N0b3AgSWtvdHVuLUlkaW11IFJvYWQsIExhZ29zWjciNTIzNSBhcmlrZXQgcGxhemEgYWxha2UgYiBzdG9wIGlrb3R1biBpZGltdSByb2FkIGxhZ29zkgEYZXZlbnRfbWFuYWdlbWVudF9jb21wYW55mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5sTlV4RGNFTlJFQUXgAQD6AQQIABAy!16s%2Fg%2F11p_7ckh03?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D  "
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#333] text-sm"
          >
            <p>235, Ariket Plaza Alake B/stop Ikotun-Idimu Road, Lagos</p>
          </Link>
        </div>
      </div>

      <div className="flex items-center flex-col justify-center gap-3 text-center">
        <Typography className="font-bold text-sm md:text- ">CONTACT</Typography>
        <div className="flex gap-3 items-center justify-center">
          <AiFillPhone className="text-sm" />{" "}
          <Link
            href="tel:+234 916 523 5934"
            className="mr-4 text-[#333]  text-sm"
          >
            0916 523 5934
          </Link>
        </div>
      </div>

      <hr />

      <Typography className="text-center font-bold text-xl md:text-3xl ">
        Get In Touch <span className="text-brandYellow">With Us</span>
      </Typography>

      <ContactForm />

      <MapEmbed />
    </div>
  );
};

export default page;
