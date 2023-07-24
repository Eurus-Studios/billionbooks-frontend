import React from 'react';
import Wrapper from '@/components/Wrapper';
import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Allcategories } from '@/components/data';// Import the Allcategories array

const Categories = () => {
  return (
    <section>
      <div className="blackbg my-8 bg-black text-white">
        <div className="text-5xl pt-14 font-bold text-center popinsfont">Shop </div>

        <Wrapper>
        <ul className="navv ">
          {Allcategories.map((category) => (
            <li className='' key={category.id}>
              <Link className='flex flex-col justify-start p-4' href={category.url}>{category.title}
              <div className='text-xs latofont text-gray-400'>{category.producCount} products</div></Link>
               
            </li>
          ))}
        </ul>

        </Wrapper>
      </div>
      

      <Wrapper>
        <ProductCard />
      </Wrapper>
    </section>
  );
};

export default Categories;
