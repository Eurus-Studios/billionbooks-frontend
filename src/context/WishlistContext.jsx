"use client"
import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistStateContext = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    setWishlistItems((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = (product) => {
    setWishlistItems((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== product._id)
    );
  };

  const isProductInWishlist = (product) => {
    return wishlistItems.some((item) => item._id === product._id);
  };

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isProductInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => useContext(WishlistContext);
