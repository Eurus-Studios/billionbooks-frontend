"use client";

import { AiOutlineMenu } from "react-icons/ai";

import BookCardHorizon from "./BookCardHorizan";
import BookCard from "./BookCard";
import { BiFilter } from "react-icons/bi";


import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import productDetails from './data';
import { PiShoppingCartLight } from 'react-icons/pi';
import { VscHeart } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';
import Wrapper from './Wrapper';
import FilterMenu from './FilterMenu';

const Allproducts = ({ category }) => {
  const router = useRouter();
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [showHorizon, setShowHorizon] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setFilterVisible(false);
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max });
    setFilterVisible(false);
  };
  const toggleHorizonView = () => {
    setShowHorizon(!showHorizon);
  };

  const handleClick = (product) => {
    router.push(`/products/${product.id}`);
  };

  let filteredProducts = category
    ? productDetails.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : productDetails;

  if (filteredProducts.length === 0) {
    // If no products found with the matching category, use the slug as title and filter by title
    filteredProducts = productDetails.filter(
      (product) => product.title.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (sortOption === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (priceRange.min > 0 && priceRange.max > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );
  }

  

  return (
    <Wrapper>
 
 <div className="flex justify-between items-center mb-4">
     <div className="shoppath my-8">
         Home / Shop / {category && <strong>{category}</strong>}
       </div>
        <div className="flex flex-row ">
         {" "}
          <div className="flex mt-2 justify-between align-middle">
            {" "}
           <AiOutlineMenu
              className="text-2xl my-auto mx-1 cursor-pointer"
              onClick={toggleHorizonView} // Toggle the horizon view on menu button click
            />
             <button
            onClick={toggleFilter}
            className=" text-lg popinsfont hover:text-gray-700 flex"
          >
           <BiFilter className="text-2xl mx-1 my-auto"/> Filter
          </button>
          </div>
         
        </div>
      </div>


      {filteredProducts.length === 0 ? (
        <div className="bluebg py-6  px-4 text-2xl text-gray-500">
          No products were found for "{category}"
        </div>
      ) : ( 

        <>
      
      <FilterMenu
  isVisible={filterVisible}
  onToggle={toggleFilter}
  onSortChange={handleSortChange}
  onPriceRangeChange={handlePriceRangeChange}
/>

      
<div className="flex flex-wrap items-center mt-2">
  {sortOption && (
    <div className="bg-blue-100  text-blue-700 px-2 py-1 mr-2 rounded-md my-10">
      Sort: {sortOption === 'lowToHigh' ? 'Low to High' : 'High to Low'}
      <button
        onClick={() => setSortOption('')}
        className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        <span className="text-xs text-center">x</span>
      </button>
    </div>
  )}
  {priceRange.min > 0 && priceRange.max > 0 && (
    <div className="bg-blue-100 my-10 text-blue-700 px-2 py-1 mr-2 rounded-md">
      Price: {priceRange.min} - {priceRange.max}
      <button
        onClick={() => setPriceRange({ min: 0, max: 0 })}
        className="ml-2  text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        <div className="text-xs mb-1">x</div>
      </button>
    </div>
  )}
</div>





      <div
            className={`${
              showHorizon
                ? "flex flex-col"
                : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6"
            }`}
          >
            {filteredProducts?.length
              ? filteredProducts?.map((product) =>
                  showHorizon ? (
                    <div key={product.id}>
                      <BookCardHorizon
                        product={product}
                        onClick={handleClick}
                      />
                    </div>
                  ) : (
                    <div key={product.id}>
                      <BookCard product={product} onClick={handleClick} />
                    </div>
                  )
                )
              : "NO PRODUCTS"}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Allproducts;
