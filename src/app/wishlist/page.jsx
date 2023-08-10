"use client"

import React from 'react';
import { useWishlistContext } from '@/context/WishlistContext';
import BookCard from '@/components/BookCard';
import Wrapper from '@/components/Wrapper';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlistContext();

  return (
    <Wrapper>
       

    <div className='mt-20'>
    
        
      <h1 className='popinsfont text-lg font-bold uppercase'> Your Products Wishlist</h1>
      <hr />

      <button className=' my-4 ' onClick={() => removeFromWishlist(product)}>
              Remove
            </button>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6">
        {wishlistItems.map((product) => (
          <div key={product._id}>
            <BookCard product={product} />
           
          </div>
        ))}
      </div>
    </div>

   </Wrapper>
  );
};

export default WishlistPage;
