"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import productDetails from './data';

import { PiShoppingCartLight } from "react-icons/pi";
import { VscHeart } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import Wrapper from './Wrapper';

const ProductCard = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("bestsellers");

  const handleClick = (product) => {
    router.push(`/products/${product.id}`);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? productDetails.filter((product) => product.category === selectedCategory)
    : productDetails;

  return (
    <Wrapper>
      <h1 className="popinsfont mt-5 text-xl text-center font-bold my-4">FEATURED  CATEGORIES</h1>
       <div className="text-center pb-4 text-sm latofont">Best Selling Books and handmade bookish Merchandise</div>
      <div className="flex justify-center space-x-4 mb-4">
        {/* Menu sections */}
        <button
          className={`relative  font-bold popinsfont text-base uppercase  p-2 af`}
          onClick={() => handleCategoryClick("bestsellers")}
        >
          Bestsellers
          {selectedCategory === "bestsellers" && <div className="border-line"></div>}
        </button>
        <button
          className={`relative p-2   font-bold popinsfont text-base uppercase af `}
          onClick={() => handleCategoryClick("bookcombos")}
        >
          Book Combos
          {selectedCategory === "bookcombos" && <div className="border-line"></div>}
        </button>
        <button
          className={`relative  font-bold popinsfont text-base uppercase  p-2 af `}
          onClick={() => handleCategoryClick("booksleeves")}
        >
          Book Sleeves
          {selectedCategory === "booksleeves" && <div className="border-line"></div>}
        </button>
        <button
          className={`relative  font-bold popinsfont text-base uppercase  p-2 af `}
          onClick={() => handleCategoryClick("bookmarks")}
        >
          Bookmarks
          {selectedCategory === "bookmarks" && <div className="border-line"></div>}
        </button>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6 ">
       

        {filteredProducts.map((product) => (
          <div key={product.id} className="relative group" onClick={() => handleClick(product)}>
            <Link href={`/products/${product.id}`}>
              <div className="relative">
                <img src={product.imgUrl} alt="product image" />
                {/* Icon bar */}
                <div className="absolute ichover bottom-2 left-3 h-10 bg-white opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all ease duration-300 justify-around flex  items-center">
                  <div className="flex items-center justify-around h-full">
                    <div className="p-4 cursor-pointer flex flex-col text-xl hover:text-gray-500">
                      <PiShoppingCartLight />
                      {/* <div className="ictitle text-xs bg-black text-white ">Add to Cart</div> */}
                    </div>
                    <div className="p-4 cursor-pointer flex flex-col text-xl hover:text-gray-500">
                      <VscHeart/>
                      {/* <div className="ictitle text-xs bg-black text-white p-2">Add to Wishlist</div> */}
                    </div>
                    <div className="p-4 text-xl cursor-pointer hover:text-gray-500">
                      <BsSearch />
                      {/* <div className="ictitle text-xs bg-black text-white">Quick view</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="absolute top-3 left-0 bg-blue-900 text-white px-2 py-1 text-xs font-bold darkbg latofont">
              -52%
            </div>
            <div className="pt-2 text-center text-black text-base popin hover:text-opacity-70">
              {product.title}
            </div>
            <div className="text-base latofont text-center font-bold">
              <span className="text-sm text-gray-400 line-through font-light pr-1">₹505</span>
              ₹{product.price}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ProductCard;