'use client'

import React from 'react'
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineX,
  AiOutlineInstagram
} from "react-icons/ai";

const links = [
  { id: 1, title: "Home", url: '/' },
  { id: 2, title: "About", url: '/About' },
  { id: 3, title: "Gallery", url: '/Gallery' },
  { id: 4, title: "Contact", url: '/Contact' },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="text-gray-400" onClick={showMenu}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      <div
        className={`fixed top-24 left-0 h-full w-full bg-black flex flex-col items-center justify-center gap-8 uppercase text-[12px] transition-transform duration-1000 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {links.map((link) => (
          <Link href={link.url} key={link.id} onClick={showMenu}>
            {link.title}
          </Link>
        ))}

        {/* SOCIAL MEDIA */}
        <div className="flex gap-6 mt-20">
          <Link href="https://www.instagram.com/dsquarevents/">
            <AiOutlineInstagram size={15}  />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100090758267591&mibextid=ZbWKwL" target='_blank'>
            <AiFillFacebook size={15} />
          </Link>
          <Link href="">
            <AiOutlineX size={15}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
