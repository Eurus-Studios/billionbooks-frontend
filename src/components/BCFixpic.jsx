"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PiShoppingCartLight } from 'react-icons/pi';
import { VscHeart } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';

const BCard = ({ product, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(product);
    } else {
      router.push(`/products/${product.id}`);
    }
  };

  return (
    <div key={product.id} className="relative group" onClick={handleClick}>
      <Link href={`/products/${product.id}`}>
        <div className="relative">
          <img src="/book3.jpg" alt="product img"/>
          {/* Icon bar */}
          <div className="absolute ichover bottom-2 left-3 h-10 bg-white opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all ease duration-300 justify-around flex  items-center">
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
  );
};

export default BCard;
