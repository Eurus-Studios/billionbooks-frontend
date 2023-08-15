"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import productDetails from './data';

import { PiShoppingCartLight } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';
import BookCard from './BookCard';

const FSection = () => {

  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("bookset");
  const [activeMenu, setActiveMenu] = useState("bookset");


   const handleClick = (product) => {
    router.push(`/products/${product.id}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveMenu(category);
  };

  const filteredProducts = selectedCategory
    ? productDetails.filter((product) => product.category === selectedCategory)
    : productDetails;

  return (
    <Wrapper >
      <section className="my-20">
      <h1 className="  popinsfont text-xl text-center font-bold ">FEATURED  CATEGORIES</h1>
      <div className="text-center pb-4 text-sm latofont">National & International Best Selling Collections</div>
     
     

      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`relative af text-gray-600 hover:text-black transition-colors font-bold popinsfont text-base uppercase p-2 ${
            activeMenu === "bookset" || !selectedCategory ? "activeaf" : ""
          }`}
          onClick={() => handleCategoryClick("bookset")}
        >
          bookset
          {selectedCategory === "bookset" && <div className="border-line"></div>}
        </button>
        
        <button
          className={`relative af text-gray-600 hover:text-black transition-colors font-bold popinsfont text-base uppercase p-2 ${
            activeMenu === "hardcover" ? "activeaf" : ""
          }`}
          onClick={() => handleCategoryClick("hardcover")}
        >
          hardcovers
          {selectedCategory === "hardcover" && <div className="border-line"></div>}
        </button>
        <button
          className={`relative af text-gray-600 hover:text-black transition-colors font-bold popinsfont text-base uppercase p-2 ${
            activeMenu === "MERCHANDISE" ? "activeaf" : ""
          }`}
          onClick={() => handleCategoryClick("MERCHANDISE")}
        >
          MERCHANDISE
          {selectedCategory === "MERCHANDISE" && <div className="border-line"></div>}
        </button>
      </div>


    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6 ">

   
     

    {filteredProducts.map((product) => (
          <BookCard key={product.id} product={product} onClick={handleClick} />
        ))}
    </div>

    </section>
  </Wrapper>
  )
}

export default FSection