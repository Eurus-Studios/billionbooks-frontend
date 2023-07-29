"use client"
import React from 'react';
import Wrapper from '@/components/Wrapper';
import { useRouter } from 'next/navigation';

import { Allcategories } from '@/components/data';

const Categories = ({ title }) => {
  const Router = useRouter();
  const handleCategory = (category) => {
    console.log("Category: ", category);
    Router.push(`/shop/${category?.title?.replace(" ", "-")}`);
  };

  return (
    <section>
      <div className="blackbg pb-10 my-8 bg-black text-white flex flex-col justify-center align-middle">
        <div className="shoptitle pt-12 font-bold text-center popinsfont">
          {title}
        </div>

        <Wrapper>
          <ul className="navv m-auto px-9 ">
            {Allcategories.map((category) => (
              <li
                className="flex flex-col justify-start p-4 uppercase font-bold latofont cursor-pointer"
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
