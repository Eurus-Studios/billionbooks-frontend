import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Ft from "@/components/Ft";

import StickySocials from '@/components/StickySocials';
import CombinedNav from '@/components/CombinedNav';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Billion Books',
  description: 'A detailed page showcasing product information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <CombinedNav/>
        <StickySocials />
        {children}
        <Ft/>
        
      </body>
    </html>
  );
  
}
