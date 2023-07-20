"use client";
import { useState } from "react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome, AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { categories, navigationItems } from "./data";
import Link from "next/link";
import Image from "next/image";
import { VscHeart } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const MobileNav = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('home');
    const [submenuState, setSubmenuState] = useState({});
  
    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const handleSectionChange = (section) => {
      setCurrentSection(section);
    };
  
    const handleSubmenuToggle = (itemId) => {
      setSubmenuState((prevState) => ({
        ...prevState,
        [itemId]: !prevState[itemId],
      }));
    };

  return (

<>
<div className="topSocials h-9 bg-slate-900 flex justify-center">
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
    <div className="topbar flex items-center justify-between px-4 py-6">

    <div>
          {/* Background overlay */}
          {isMenuOpen && <div className="background-overlay" onClick={handleMenuToggle}></div>}
    
          {/* Button to toggle the menu */}
          <button className="text-2xl hover:text-gray-500" onClick={handleMenuToggle}>
            <FiMenu />
          </button>
    
          {/* Side menu */}
          <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
            {/* Sections */}
            <div className="sections  bg-gray-200 flex justify-between h-16 flex-row">
              <button
                className={`menu-option ${currentSection === 'home' ? 'active' : ''}hover:text-black active:text-black flex-grow  `}
                onClick={() => handleSectionChange('home')}
              >
                Home
              </button>
              <button
                className={`menu-option ${currentSection === 'categories' ? 'active' : ''}  hover:text-black active:text-black flex-grow text-gray-500 `}
                onClick={() => handleSectionChange('categories')}
              >
                Categories
              </button>
            </div>
    
            {/* Menu items */}
            <ul>
              {currentSection === 'home' && (
                <>
                  {navigationItems.map((item) => (
                    <div key={item.id}>
                      <li>
                        <button className="menu-item latofont text-sm flex" onClick={() => handleSubmenuToggle(item.id)}>
                          {item.title}
                          {item.submenu && (submenuState[item.id] ? <FiChevronUp /> : <FiChevronDown />)}
                        </button>
                      </li>
                      {item.submenu && submenuState[item.id] && (
                        <ul>
                          {item.submenu.map((subitem) => (
                            <li key={subitem.id}>
                              <Link href={subitem.url}>{subitem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </>
              )}
              {currentSection === 'categories' && (
                categories.map((category) => (
                  <li key={category.id}>
                    <Link href={category.url}>{category.title}</Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>





          {/* First div with logo */}
          <Link href="/">
            <div className="px-4 flex justify-center align-middle">
              <Image src="/logo.png" alt="Logo" width={200} height={40} />
            </div>
          </Link>

          {/* Second div with search bar and button */}

            <div className="relative">
              <div className="absolute top--2 left-4 w-3 h-3 bg-indigo-900 text-white flex items-center justify-center text-xs rounded-full">
                5 {/* Replace this number with the actual count */}
              </div>
              <VscHeart style={{ fontSize: "24px" }} />
            </div>

        </div>

{/* -----search bar=--- */}

<div className="search border-2">
        <div className="p-1 md:mt-0 flex flex-row md:form md:flex-grow md:items-center md:justify-between md:px-2 mx-2">
            <input
              type="text"
              placeholder="Search for Products"
              className="w-full border border-gray-300 px-3 py-1.5 h-10"
            />
            <button className="btn hover:bg-indigo-900 text-white px-2 py-2 h-10 w-10 text-lg font-bold uppercase">
              <FaSearch />
            </button>
          </div>

          </div>


{/* -------fixed bottom menu---------- */}

<div className="bottommenu ind">
      <nav className="fixed bottom-0 left-0 w-full bg-white p-2 flex justify-around items-center border-t border-gray-300 md:hidden">
        <a
          href="#"
          className="text-black hover:text-gray-600 transition-colors ease-in flex flex-col items-center"
        >
          <AiOutlineHome className="h-6 w-6" />
          <span className="text-xs latofont">Home</span>
        </a>
        <a
          href="#"
          className="text-black hover:text-gray-600 transition-colors ease-in flex flex-col items-center"
        >
          <AiOutlineShop className="h-6 w-6" />
          <span className="text-xs latofont">Shop</span>
        </a>
        <a
          href="#"
          className="text-black hover:text-gray-600 transition-colors ease-in flex flex-col items-center"
        >
          <LiaShoppingBagSolid className="h-6 w-6" />
          <span className="text-xs latofont">Cart</span>
        </a>
        <a
          href="#"
          className="text-black hover:text-gray-600 transition-colors ease-in flex flex-col items-center"
        >
          <GoLocation className="h-6 w-6" />
          <span className="text-xs latofont">Track</span>
        </a>
        <a
          href="#"
          className="text-black hover:text-gray-600 transition-colors ease-in flex flex-col items-center"
        >
          <AiOutlineUser className="h-6 w-6" />
          <span className="text-xs latofont">My Account</span>
        </a>
      </nav>
    </div>

    </>
  );
};

export default MobileNav;






