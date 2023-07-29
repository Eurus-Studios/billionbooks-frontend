"use client"

import React, { useState } from 'react';
import Link from 'next/link';
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

 

  const handleClick = (product) => {
    router.push(`/products/${product.id}`);
  };

  let filteredProducts = category
    ? productDetails.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : productDetails;

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
        <div className="shoppath my-8">Home / Shop {category && <strong>{category}</strong>}</div>
        <button
  onClick={toggleFilter}
  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
>
  Filter
</button>

      </div>
      
      <FilterMenu
  isVisible={filterVisible}
  onToggle={toggleFilter}
  onSortChange={handleSortChange}
  onPriceRangeChange={handlePriceRangeChange}
/>

      
      <div className="flex flex-wrap items-center mt-2">
        {sortOption && (
          <div className="bg-blue-100 text-blue-700 px-2 py-1 mr-2 rounded-md my-10">
            Sort: {sortOption === 'lowToHigh' ? 'Low to High' : 'High to Low'}
            <button
              onClick={() => setSortOption('')}
              className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              &#10006;
            </button>
          </div>
        )}
        {priceRange.min > 0 && priceRange.max > 0 && (
          <div className="bg-blue-100 text-blue-700 px-2 py-1 mr-2 rounded-md">
            Price: {priceRange.min} - {priceRange.max}
            <button
              onClick={() => setPriceRange({ min: 0, max: 0 })}
              className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              &#10006;
            </button>
          </div>
        )}
      </div>





      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6 ">
        {/* Mapping and displaying filtered products */}
        {filteredProducts.map((product) => (
          <div key={product.id} className="relative group" onClick={() => handleClick(product)}>
            <Link href={`/products/${product.id}`}>
              <div className="relative">
                <img src={product.imgUrl} alt="product image" />
                {/* Icon bar */}
                <div className="absolute ichover bottom-2 left-3 h-10 bg-white opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all ease duration-300 justify-around flex items-center">
                  <div className="flex items-center justify-around h-full">
                    <div className="p-4 cursor-pointer flex flex-col text-xl hover:text-gray-500">
                      <PiShoppingCartLight />
                    </div>
                    <div className="p-4 cursor-pointer flex flex-col text-xl hover:text-gray-500">
                      <VscHeart />
                    </div>
                    <div className="p-4 text-xl cursor-pointer hover:text-gray-500">
                      <BsSearch />
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

export default Allproducts;
