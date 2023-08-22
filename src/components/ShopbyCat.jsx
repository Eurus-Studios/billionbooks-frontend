"use client"
import React, { useState } from 'react';
import Wrapper from '@/components/Wrapper';
import { useRouter } from 'next/navigation';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { Allcategories } from '@/components/data';
// ... (your existing imports)

const Categories = ({ title }) => {
  const Router = useRouter();
  const [isNavOpen, setNavOpen] = React.useState(false); // State to track if the nav is open
  
  const handleCategory = (category) => {
    console.log("Category: ", category);
    Router.push(`/shop/${category?.title?.replace(" ", "-")}`);
  };

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <section>
      <div className="blackbg pb-10 my-8 bg-black text-white flex flex-col justify-center align-middle">
        <div className="shoptitle pt-12 font-bold text-center popinsfont">
          {title}
        </div>
        <div className="navv-toggle flex justify-center align-middle self-center flex-row uppercase m-auto" onClick={toggleNav}>
           
           <div className='flex hover:text-gray-300'> Categories{isNavOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
         </div>

        <Wrapper>
          <ul className={`navv m-auto px-9 ${isNavOpen ? 'open' : ''}`}>
            {Allcategories.map((category) => (
              <li
                className="flex flex-col justify-start p-4 uppercase font-bold hover:text-gray-300 latofont cursor-pointer"
                key={category.id}
                onClick={() => handleCategory(category)}
              >
                {category.title}
                <div className='text-xs latofont text-gray-400'>{category.producCount} products</div>
              </li>
            ))}
          </ul>
        
        </Wrapper>
      </div>
    </section>
  );
};

export default Categories;
