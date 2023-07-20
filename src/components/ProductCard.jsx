"use client"

import React from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/navigation';
import productDetails from './data'; // Import the productDetails array from the data.js file

const ProductCard = () => {

  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/products/${productId}`);
  }

  return (
    <div onClick={handleClick} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 lg:mx-10 xl:mx-20 md:m-auto xl:grid-cols-6 px-2">
      {/* Map over the productDetails array to render each product */}
      {productDetails.map((product) => (
        <div key={product.id} className="relative">
          <Link href={`/products/${product.id}`}>
            {/* Use product.imageUrl inyystead of fixed image path */}
           
              <img src={product.imgUrl} alt="product image" />
           
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
  );
};


export default ProductCard;
