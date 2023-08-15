"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PiShoppingCartLight } from 'react-icons/pi';
import { VscHeart } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';
import QuickView from '@/components/Quickview'; // Import the new QuickView component

const BookCardHorizon = ({ product, onClick }) => {
  const router = useRouter();
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);

  const handleQuickViewOpen = (event) => {
    event.stopPropagation();
    setQuickViewOpen(true);
  };

  const handleQuickViewClose = () => {
    setQuickViewOpen(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick(product);
    } else {
      router.push(`/products/${product.id}`);
    }
  };

  return (
    <div key={product.id} className="relative m-3  group flex gap-4 flex-row" onClick={handleClick}>

        <div>
      <Link href={`/products/${product.id}`}>
        <div className="relative">
          <Image src="/bm1.jpeg"  alt="product image" width={300} height={300} />
          
          {/* Icon bar */}
          <div className="absolute ichover bottom-2 left-3 h-10 bg-white opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all ease duration-300 justify-around flex items-center">
            <div className="flex items-center justify-around h-full">
              <div className="p-4 cursor-pointer flex flex-col text-xl hover:text-gray-500">
                <PiShoppingCartLight />
              </div>
              <div className="p-4 cursor-pointer flex flex-col text-xl hover:text-gray-500">
                <VscHeart />
              </div>
              <div
                className="p-4 text-xl cursor-pointer hover:text-gray-500"
                onClick={handleQuickViewOpen}
              >
                <BsSearch />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute top-3 left-0 bg-blue-900 text-white px-2 py-1 text-xs font-bold darkbg latofont">
        -52%
      </div>
      
      

      </div>

      <div className='flex flex-col '>
      <div className="pt-2 text-lg text-black popin hover:text-opacity-70">
        {product.title}
      </div>
        <div className="text-xl latofont font-bold">
        <span className="text-sm text-gray-400 line-through font-light pr-1">₹505</span>
       <span className='latofont'>₹{product.price}</span> 
      </div>

      <div className="flex flex-col">
            <ul className="list-disc space-y-4 pl-3.5 point">
             <li className="font-bold">Shipping To all over India</li>
               <li className="font-bold">Eco-Friendly Packaging</li>
               <li className="font-bold">Read Free Summary Of This Book</li>
               <li className="font-bold">This is First Copy, Learn More.</li>
               <li className="font-bold">
                 100% Replacement Guaranteed, Read Refund Policy
               </li>
               <li className="font-bold">
                 Have any Query?, You can ask Through WhatsApp Chat Directly.
               </li>
             </ul>

             <button
                  
                  className={"my-2 px-4 py-2 w-36 uppercase text-sm font-bold btn w-26 hover:bg-indigo-900 text-white btn"}
                >
                  Add To Cart
                </button>
           </div>
      </div>

      {/* Quick view */}
      {isQuickViewOpen && (
        <div className="dark-bag">
          <div className="quick-view-overlay" onClick={handleQuickViewClose} />
          <div className="quick-view-box">
            <QuickView product={product} onClose={handleQuickViewClose} />
          </div>
        </div>
      )}

      <hr className='my-3' />
    </div>
  );
};

export default BookCardHorizon;
