"use client"

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import Link from 'next/link';
import Router from 'next/navigation';
import Wrapper from '@/components/Wrapper';

const Page = () => {

  
  const router = useRouter(); // Initialize the useRouter

  const handleAddAddress = () => {
    router.push('/dashboard/address/add-address'); // Navigate to the addaddress page
  };

  return (
    <Wrapper>
      <h1 className="mb-4">The following addresses will be used on the checkout page by default.</h1>

      <div className="flex flex-wrap justify-between">
        <div>
          <div className="flex gap-4">
            <h1 className="text-2xl popinsfont font-bold uppercase">Billing address</h1>
            <button>Edit</button>
          </div>

          <div className="flex">Suchana Pal</div>
        </div>

        <div>
        <div className="flex gap-4">
          <h1 className="text-2xl popinsfont font-bold uppercase">Shipping address</h1>
          <button onClick={handleAddAddress}>Add address</button>
        </div>
        
       <div>shipping adress saved</div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Page;
