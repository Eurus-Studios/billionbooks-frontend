"use client"

import React from 'react';
import Wrapper from '@/components/Wrapper';
import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Allcategories } from '@/components/data';
import Allproducts from '@/components/Allproducts';

const Categories = () => {
  return (
    <section>
      <div className="blackbg my-8 bg-black text-white flex flex-col justify-center align-middle">
        <div className="shoptitle pt-12 font-bold  text-center popinsfont">Shop </div>

        <Wrapper>

          


        <ul className="navv m-auto px-9 ">
          {Allcategories.map((category) => (
            <li className='' key={category.id}>
              <Link className='flex flex-col justify-start p-4 uppercase font-bold latofont' href={category.url}>{category.title}
              <div className='text-xs latofont text-gray-400'>{category.producCount} products</div></Link>
               
            </li>
          ))}
        </ul>

        </Wrapper>
      </div>
      

      <Wrapper>
        <Allproducts />
      </Wrapper>
    </section>
  );
};

export default Categories;
