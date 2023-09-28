"use client"

import React from "react";
import Lottie from 'lottie-react';
import { useEffect } from "react";

import styles from "./page.module.css";
import Fcategories from "@/components/Fcategories";
import ProductCard from "@/components/ProductCard"
import FSection from "@/components/FSectaion2";
import LandingPage from "@/components/landingpage/page";
import bookgirl from '@/bookgirl.json';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  useEffect(() => {
  AOS.init();
}, []);

  return (
    <section className="w-full flex-center flex-col main">
      <div className={`flex flex-col md:flex-row ${styles.container}`}>
        <div className={`pl-12 ml-20 flex-1  ${styles.content}`}  data-aos="fade-right" data-aos-delay="1070">
          <h1 className={`${styles.herotitle}`}>
            BILLIONBOOKS <br />
            More Than A Bookstore
          </h1>
          <div className={styles.desc}>
            <p className="merrifont " data-aos="fade-right" data-aos-delay="1090">Eco-Friendly Packaging & Free Bookmarks</p>
            <p className="text-lg pt-2 merrifont">
              Free Shipping On PrePaid Orders Across India.
            </p>
          </div>

          <p className="text-sm pt-3 my-4 " data-aos="fade-right" data-aos-delay="2010">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            aspernatur voluptas quos repellendus, saepe voluptatibus facilis
            sapiente. Ex reprehenderit, minus voluptatum, <br /> beatae eum
            inventore iste, id eius pariatur nam porro. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nulla, laboriosam.
          </p>
          <button className=" my-3 herobtn hover:bg-indigo-900">
            {" "}
            Shop Now
          </button>
        </div>
        <div className={styles.imagecontainer} data-aos="fade-left" data-aos-delay="2020">
        <Lottie 
  animationData={bookgirl} 
  className={styles.hfix}
  options={{
    loop: false,
    autoplay: true, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }}
/>

        </div>
      </div>
{/* <LandingPage/> */}

{/* <div class="wrapper flex sticky">
  <LandingPage/>
</div>
       */}

      <div className="w-90% bg-slate-800 h-10"></div>

      <Fcategories />
      <ProductCard />
      
     

      <FSection />

      
      

    
    </section>
  );
};

export default Home;
