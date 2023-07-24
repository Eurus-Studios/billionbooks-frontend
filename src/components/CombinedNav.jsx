"use client"
import React, { useEffect, useState } from 'react'
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const CombinedNav = () => {
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
  return isMobile ? <MobileNav /> : <Navbar />
}

export default CombinedNav