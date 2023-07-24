"use client"
import React, { useEffect, useState } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import Ft from "@/components/Ft";

import StickySocials from '@/components/StickySocials';



const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Billion Books',
  description: 'A detailed page showcasing product information',
};

export default function RootLayout({ children }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 950;

  return (
    <html lang="en">
      <body className={inter.className}>
      
        {isMobile ? <MobileNav /> : <Navbar />}
        <StickySocials />
        {children}
        <Ft/>
        
      </body>
    </html>
  );
  
}
