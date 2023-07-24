import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Fcategories from "@/components/Fcategories";
import ProductCard from "@/components/ProductCard";
import Product from "@/components/ProductDetails";
import Ft from "@/components/Ft";
import FSection from "@/components/FSectaion2";
import SectionSlider from "@/components/SectionSlider";




const Home = () => {
  return (
    <section className="w-full flex-center flex-col main">
      <div className={`flex flex-col md:flex-row ${styles.container}`}>
        <div className={`pl-12 ml-20 flex-1 ${styles.content}`}>
          <h1 className={styles.herotitle}>
            BILLIONBOOKS <br />
            More Than A Bookstore
          </h1>
          <div className={styles.desc}>
            <p className="merrifont">Eco-Friendly Packaging & Free Bookmarks</p>
            <p className="text-lg pt-2 merrifont">
              Free Shipping On PrePaid Orders Across India.
            </p>
          
          </div>

          <p className="text-sm pt-3 my-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia aspernatur voluptas quos repellendus, saepe
              voluptatibus facilis sapiente. Ex reprehenderit, minus voluptatum, <br /> beatae eum inventore iste, id eius pariatur nam porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, laboriosam.

             
             
            </p>
          <button className=" my-3 herobtn hover:bg-indigo-900"> Shop Now</button>
        </div>
        <div className={styles.item}>
          <img src="/heroimg.png" alt="hero img" />
        </div>
      </div>
 
      <div className="w-90% bg-slate-800 h-10">

      </div>

      <Fcategories/>
      <ProductCard />
      
      <FSection/>
      <Product/>
      <SectionSlider/>
     
     
      
      

    </section>
  );
};

export default Home;
