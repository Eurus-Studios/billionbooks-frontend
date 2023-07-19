"use client"
import { useEffect, useState } from "react";
import MobileNavbar from "../mobilenavbar/mobnav";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VscHeart } from "react-icons/vsc";
import { FaSearch, FaBagShopping } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";

const navigationItems = [
  {
    id: 1,
    title: "DASHBOARD",
    url: "/dashboard",
  },
  {
    id: 2,
    title: "SHOP BY CATEGORIES",
    url: "/shop",
  },
  {
    id: 3,
    title: "YOUR ORDERS",
    url: "/orders",
  },
  {
    id: 4,
    title: "PAGES",
    url: "/pages",
  },
  {
    id: 5,
    title: "LOGIN",
    url: "/login",
  },
  {
    id: 6,
    title: "HELP DESK",
    url: "/help",
  },
  {
    id: 7,
    title: "MY WALLET",
    url: "/wallet",
  },
];

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 968); // 
    };

    // Attach the event listener on mount and remove it on unmount
    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function to set the initial value

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
      <div className="topSocials h-6 bg-slate-900"></div>
      <div className="container mx-auto max-w-7xl ">
        <div className="topbar flex items-center justify-between px-4 py-6">
          {/* First div with logo */}
          <Link href="/">
            <div className="px-4">
              <Image src="/logo.png" alt="Logo" width={250} height={40} />
            </div>
          </Link>

          {/* Second div with search bar and button */}
          <div className="flex form flex-grow items-center justify-between px-2">
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
          <div className="flex items-center px-2 space-x-4">
            <div className="text-black">Login/Register</div>
            <div className="relative">
              <div className="absolute top--2 left-4 w-3 h-3 bg-indigo-900 text-white flex items-center justify-center text-xs rounded-full">
                5 {/* Replace this number with the actual count */}
              </div>
              <VscHeart style={{ fontSize: '24px' }} />
            </div>
            <div className="relative">
              <div className="absolute top--2 left-4  w-3 h-3 bg-indigo-900 text-white flex items-center justify-center text-xs rounded-full">
                1 {/* Replace this number with the actual count */}
              </div>
              <LiaShoppingBagSolid style={{ fontSize: '24px' }}/>
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
          
            <li><a href="#">Any books at 999</a></li>
            <li><a href="#">Book boxes</a></li>
            <li><a href="#">E-books</a></li>
            <li><a href="#">Bestsellers</a></li>
            <li><a href="#">Hardcover</a></li>
            <li><a href="#">Hindi books</a></li>
            <li><a href="#">Bookmarks</a></li>
            <li><a href="#">Book sleeves</a></li>
            <li><a href="#">Fiction</a></li>
            <li><a href="#">Non Fiction</a></li>
            <li><a href="#">Novel</a></li>
            <li><a href="#">Business & Economics</a></li>
            <li><a href="#">Premium Bookset Collection</a></li>
          </ul>
        
      </div>


  <div>
    {navigationItems.map((item) => (
      <Link
        key={item.id}
        href={item.url}
        className="text-black latofont text-xs hover:text-gray-600 px-4 py-2 font-bold"
      >
        {item.title}
      </Link>
    ))}
  </div>
</div>

        </div>
        {/* bottom navbar ends */}



      {isMobile && <MobileNavbar navigationItems={navigationItems} />}

    </>
  );
};

export default Navbar;



