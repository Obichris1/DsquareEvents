'use client'
import React from "react";
import Link from "next/link";
import { useState,useEffect } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillWechat,
  AiFillX,
  AiOutlineWhatsApp,
  AiOutlineX,
  AiOutlineInstagram
} from "react-icons/ai";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div  className={`sticky p-8 top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black " : "bg-black "
    }`}>
      {/* DESKTOP NAVIGATION */}
      <div className="hidden lg:flex justify-between items-center">
        <div className="">
          <Link href="/">
           
            <img src="/Logo.jpg" alt="" width={200} />
          </Link>
        </div>

       
          <div className="flex gap-12 text-[12px] mr-36 uppercase navlinks">
            <Link className="" href="/">
              Home
            </Link>
            <Link className="" href="/About">
              About Us
            </Link>

            <Link className="" href="/Gallery">
              Gallery
            </Link>

            <Link className="" href="/Contact">
              Contact Us
            </Link>
          </div>

          {/* SOCIAL MEDIA  */}

          <div className="flex gap-3">
            <Link href="">
              <AiFillFacebook />
            </Link>

            <Link href="">
              <AiOutlineInstagram />
            </Link>

            <Link href="">
              <AiOutlineX />
            </Link>
         
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="flex items-center justify-between lg:hidden">
        <div className="">
          <Link href="/">
            
            <img src="/Logo.jpg" alt="" width={200} />
          </Link>
        </div>
        <div className="">
          <MobileNav />

       
        </div>
      </div>
    </div>
  );
};

export default Navbar;