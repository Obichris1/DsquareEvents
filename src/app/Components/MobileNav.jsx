'use client'

import React from 'react'
import Link from "next/link";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillWechat,
    AiFillX,
    AiOutlineWhatsApp,
    AiOutlineX,
  } from "react-icons/ai";

const links = [{ id: 1, title: "Home",url:'/' },
    { id: 2, title: "About",url:'/About' },
    { id: 3, title: "Gallery",url:'/Gallery' },
    { id: 4, title: "Contact",url:'/Contact' }
    ];

const MobileNav = () => {

    

    const [isOpen, setIsOpen] = useState(false);

    const showMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <div>
      
        <div className="text-gray-400" onClick={showMenu} >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {isOpen && <div className="bg-black text-brown flex flex-col uppercase text-[12px] absolute left-0 top-24 w-full h-[calc(100vh-6rem)] gap-8 justify-center items-center z-10 transition-all ease-in-out duration-1000" >
        {links.map((link) =>
        <Link href={link.url} key={link.id} onClick={showMenu}>
            {link.title}

        </Link>

        
        )}

           {/* SOCIAL MEDIA  */}

           <div className="flex gap-3 mt-20">
            <Link href="">
              <AiFillFacebook />
            </Link>

            <Link href="">
              <AiOutlineWhatsApp />
            </Link>

            <Link href="">
              <AiOutlineX />
            </Link>
          </div>
        </div>

        
}

       
    </div>
  )
}

export default MobileNav
