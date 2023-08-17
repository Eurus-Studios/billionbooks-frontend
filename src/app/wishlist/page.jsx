"use client"

import React from "react";
import { useWishlistContext } from "@/context/WishlistContext";
import BookCard from "@/components/BookCard";
import Wrapper from "@/components/Wrapper";
import { VscHeart } from "react-icons/vsc";
import Link from "next/link"; 

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlistContext();

  return (
    <Wrapper>
      <div className="mt-20">
        <h1 className="popinsfont text-lg font-bold uppercase">
          Your Products Wishlist
        </h1>
        <hr />

        {wishlistItems.length === 0 ? (
          <div className="mt-8 flex flex-col justify-center align-middle text-center">
            <VscHeart className="text-9xl font-bold self-center text-gray-200 my-3" />

            <div className="font-bold text-5xl mb-4"> Wishlist is empty.</div>
            <div className="mb-2 popinsfont">
              You don't have any products in the wishlist yet.
            </div>
            <div className="mb-4">
              You will find a lot of interesting products on our "Shop" page.
            </div>
            <Link href="/shop"> 
              <button className="my-2 mb-2 px-3 py-3 w-44 uppercase text-sm font-bold btn hover:bg-indigo-900 text-white btn self-center">
                Return to shop
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6">
              {wishlistItems.map((product) => (

                <div className="flex flex-col"> <button
                onClick={() => removeFromWishlist(product)}
                className=" m-2 px-2 py-1 bg-blue-500 text-white text-sm font-bold"
              >
                Remove
              </button>
              <div key={product.id} className="relative"></div>
                
                
                 
                  <BookCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default WishlistPage;
