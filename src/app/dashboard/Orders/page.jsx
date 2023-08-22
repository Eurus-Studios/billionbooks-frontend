"use client"

import React from 'react';
import { useRouter } from 'next/navigation'; 
import { UserAuth } from '@/context/AuthContext'; 
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';

const Page = () => {
  const { checkUserAuthentication } = UserAuth();
  const router = useRouter();

  if (!checkUserAuthentication()) {
    // Redirect to the login page if not authenticated
    router.push('/login');
    return null; // Optionally, you might choose to return a loading state or message here
  }

  return (
    <Wrapper>
   <div className="bluebg py-6  px-4 text-2xl text-gray-500">
          No order has been made yet.
          <Link href="/shop" className='text-sm hover:text-gray-200 underline mx-1'>BROWSE PRODUCT</Link>
        </div>
    </Wrapper>
  );
};

export default Page;
