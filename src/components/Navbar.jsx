"use client";
import { categories, navigationItems } from "./data";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VscHeart } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
 
  FaInstagram,
} from "react-icons/fa";


const Navbar = () => {



  const [isSticky, setIsSticky] = useState(false);

const handleScroll = () => {
  setIsSticky(true);
};

useEffect(() => {
  const handleScroll = () => {
    setIsSticky(true);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  
  return (
    <>
      <div className="topSocials h-8 bg-slate-900 flex justify-center">
      <div className="flex space-x-2.5 m-auto socials">
        
        <a href="#" className="text-white hover:text-gray-300 text-sm">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-sm">
          <FaTwitter />
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-sm">
          <FaEnvelope />
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-sm">
          <FaPinterest />
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-sm">
          <FaInstagram />
        </a>
       
      </div>
    </div>




    <div className={"container mx-auto max-w-7xl"}>
    <div className={`topbar md:flex md:items-center md:justify-between px-4 py-6 ${isSticky ? "sticky" : ""}`}>

          {/* First div with logo */}
          <Link href="/">
            <div className="px-4 flex justify-center align-middle">
              <Image src="/logo.png" alt="Logo" width={250} height={40} />
            </div>
          </Link>

          {/* Second div with search bar and button */}
          <div className="mt-4 md:mt-0 flex flex-row md:form md:flex-grow md:items-center md:justify-between md:px-2">
            <input
              type="text"
              placeholder="Search for Products"
              className="w-full border border-gray-300 px-4 py-2 h-11"
            />
            <button className="btn hover:bg-indigo-900 text-white px-2 py-2 h-11 w-10 text-lg font-bold uppercase">
              <FaSearch />
            </button>
          </div>

          {/* Third div with login/register, wishlist, and shopping bag */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="text-black">Login/Register</div>
            <div className="relative">
              <div className="absolute top--2 left-4 w-3 h-3 bg-indigo-900 text-white flex items-center justify-center text-xs rounded-full">
                5 {/* Replace this number with the actual count */}
              </div>
              <VscHeart style={{ fontSize: "24px" }} />
            </div>
            <div className="relative">
              <div className="absolute top--2 left-4  w-3 h-3 bg-indigo-900 text-white flex items-center justify-center text-xs rounded-full">
                1 {/* Replace this number with the actual count */}
              </div>
              <LiaShoppingBagSolid style={{ fontSize: "24px" }} />
            </div>

            <div className="price">$0</div>
          </div>
        </div>

        {/* Third div with side dropdown menu */}

        <div className="flex justify-start items-center border-t-2 border-b-2 ">
          <div className="browse">
            <FiMenu className="h-6 w-6 text-white" />
            <p className="latofont text-sm">BROWSE CATEGORIES</p>
            <img src="drop down.png" height="7px" width="7px" />
            <ul className="dropdown-content latofont">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={category.url}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row">
            {navigationItems.map((item) => (
              <div key={item.id} className="group relative">
                <Link
                  href={item.url}
                  className="text-black latofont text-xs hover:text-gray-600 px-4 py-2 font-bold"
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="brow">
                  <ul className="mt-1.5  hidden group-hover:block absolute  w-40 bg-white text-gray-400 shadow-md rounded-md">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.id}>
                        <Link
                          href={subitem.url}
                          className="block text-gray-800 py-2 px-4 hover:bg-gray-100 latofont text-sm"
                        >
                          {subitem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bottom navbar ends */}

      
    </>
  );
};

export default Navbar;
