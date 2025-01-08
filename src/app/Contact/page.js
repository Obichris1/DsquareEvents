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
            href="https://www.google.com/maps?q=37.7749,-122.4194"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#333] text-sm"
          >
           235, Ariket Plaza Alake B/stop Ikotun-Idimu Road, Lagos
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
