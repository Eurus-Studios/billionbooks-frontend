"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import productDetails from './data';
import { PiShoppingCartLight } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';
import BookCard from './BookCard'; // Import the BookCard component

const ProductCard = () => {
  const router = useRouter();
 
  const [selectedCategory, setSelectedCategory] = useState("BESTSELLERS");
  const [activeMenu, setActiveMenu] = useState("BESTSELLERS"); 

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
    <Wrapper>
        <h1 className="popinsfont mt-5 text-xl text-center font-bold my-4">FEATURED  CATEGORIES</h1>
      <div className="text-center pb-4 text-sm latofont">Best Selling Books and handmade bookish Merchandise</div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`relative af text-gray-600 hover:text-black transition-colors font-bold popinsfont text-base uppercase p-2 ${
            activeMenu === "BESTSELLERS" || !selectedCategory ? "activeaf" : ""
          }`}
          onClick={() => handleCategoryClick("BESTSELLERS")}
        >
          BESTSELLERS
          {selectedCategory === "BESTSELLERS" && <div className="border-line"></div>}
        </button>
        <button
          className={`relative af text-gray-600 hover:text-black transition-colors font-bold popinsfont text-base uppercase p-2 ${
            activeMenu === "bookcombos" ? "activeaf" : ""
          }`}
          onClick={() => handleCategoryClick("bookcombos")}
        >
          Book Combos
          {selectedCategory === "bookcombos" && <div className="border-line"></div>}
        </button>
        <button
          className={`relative af text-gray-600 hover:text-black transition-colors font-bold popinsfont text-base uppercase p-2 ${
            activeMenu === "booksleeves" ? "activeaf" : ""
          }`}
          onClick={() => handleCategoryClick("booksleeves")}
        >
          Book Sleeves
          {selectedCategory === "booksleeves" && <div className="border-line"></div>}
        </button>
        <button
          className={`relative af text-gray-600 hover:text-black transition-colors font-bold popinsfont text-base uppercase p-2 ${
            activeMenu === "bookmarks" ? "activeaf" : ""
          }`}
          onClick={() => handleCategoryClick("bookmarks")}
        >
          Bookmarks
          {selectedCategory === "bookmarks" && <div className="border-line"></div>}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6 ">
       
        {filteredProducts.map((product) => (
          <BookCard key={product.id} product={product} onClick={handleClick} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductCard;