import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Ft from "@/components/Ft";

import StickySocials from '@/components/StickySocials';
import CombinedNav from '@/components/CombinedNav';
import { StateContext } from '../context/StateContext';
import { WishlistStateContext } from '@/context/WishlistContext';
import { Toaster  } from 'react-hot-toast';
import { AuthContextProvider } from '@/context/AuthContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Billion Books',
  description: 'A detailed page showcasing product information',
};

export default function RootLayout({ children }) {
  return (



    <StateContext>
      <WishlistStateContext>
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
      <Toaster/>
        <CombinedNav/>
        <StickySocials />
        {children}
        <Ft/>
        </AuthContextProvider>
        
      </body>
    </html>
    </WishlistStateContext>
    </StateContext>
  );
  
}
