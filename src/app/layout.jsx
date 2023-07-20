"use client"
import React, { useEffect, useState } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Billion Books',
  description: 'A detailed page showcasing product information',
};

export default function RootLayout({ children }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width on initial load
    setWindowWidth(window.innerWidth);

    // Update window width on window resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 950;

  return (
    <html lang="en">
      <body className={inter.className}>
        {isMobile ? <MobileNav /> : <Navbar />}
        {children}
      </body>
    </html>
  );
}
