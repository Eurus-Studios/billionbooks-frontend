// *******MOBILE MENU UNDER CONSTRUCTION******

"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";



const MobileNavbar = ({ navigationItems }) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuClick = () => {
    setShowSideMenu(!showSideMenu);
    setShowDropdown(false);
  };

  const handleCategoriesClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {/* Mobile top bar with logo and menu button */}
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <Link href="/">
            <div className="px-4">
              <Image src="/logo.png" alt="Logo" width={150} height={90} />
            </div>
          </Link>
        </div>
        <div>
          <button
            className="text-white"
            onClick={handleMenuClick}
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile side menu */}
      {showSideMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50"
          onClick={handleMenuClick}
        >
          <div className="flex flex-col h-full max-w-sm p-4 bg-white">
            {/* Top buttons */}
            <div className="flex justify-between mb-4">
              <button
                className={`py-2 px-4 rounded-l-lg ${
                  !showDropdown ? "bg-indigo-900 text-white" : "bg-white text-black"
                }`}
                onClick={handleCategoriesClick}
              >
                Menu
              </button>
              <button
                className={`py-2 px-4 rounded-r-lg ${
                  showDropdown ? "bg-indigo-900 text-white" : "bg-white text-black"
                }`}
                onClick={handleCategoriesClick}
              >
                Categories
              </button>
            </div>
            {/* Side menu content */}
            <ul className="space-y-2">
              {showDropdown &&
                navigationItems.map((item) => (
                  <li key={item.id} className="px-2">
                    <Link href={item.url} className="text-black">
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
