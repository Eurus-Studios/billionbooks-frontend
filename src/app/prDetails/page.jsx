

"use client"
import React, { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
  FaTelegram,
} from 'react-icons/fa';
import styles from './page.module.css';
import Wrapper from '@/components/Wrapper';
import SectionSlider from '@/components/SectionSlider';
const PDetails = ({ productId, img, title, price }) => {
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const magnifying_area = document.getElementById('magnifying_area');
    const magnifying_img = document.getElementById('magnifying_img');

    const handleMouseMove = (event) => {
      const clientX = event.clientX - magnifying_area.offsetLeft;
      const clientY = event.clientY - magnifying_area.offsetTop;
      const mWidth = magnifying_area.offsetWidth;
      const mHeight = magnifying_area.offsetHeight;
      const percentageX = (clientX / mWidth) * 100;
      const percentageY = (clientY / mHeight) * 100;

      magnifying_img.style.transform = `translate(-${percentageX}%, -${percentageY}%) scale(2)`;
    };

    const handleMouseLeave = () => {
      magnifying_img.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    magnifying_area.addEventListener('mousemove', handleMouseMove);
    magnifying_area.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      magnifying_area.removeEventListener('mousemove', handleMouseMove);
      magnifying_area.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
  
  <Wrapper>
      <section className={` mt-10 ${styles.productBox} `}>
        
        <div className={` ${styles.imgbox}`}>
          <figure id="magnifying_area" className={`${styles.figure}`}>
            <img id="magnifying_img" className={`${styles.magnifying_img}`} src="/book1.jpg" alt="Product" />
          </figure>
          <div className={`tag ${styles.tag}`}>
            <span>-69%</span>
          </div>
        </div>

      
        <div className={`  ${styles.contentContainer}`}>
          <div className="flex-none">
            <p className={`${styles.path}`}>
              Home / Shop / Paperback / <span className="text-black">{title}</span>
            </p>
            <h1 className={`title font-extrabold text-left ${styles.title}`}>{title}</h1>

            <p className={`price pt-2 text-2xl font-bold mb-4 ${styles.price}`}>
              <span className="line-through text-xl text-gray-400 font-normal">₹699</span> {price}{' '}
             
            </p>

     
            <div className="flex form mb-5">
              <input
                type="text"
                placeholder="Enter the pincode"
                className={`w-full border border-gray-300 px-4 py-2 h-10 ${styles.input}`}
              />
              <button
                className={`btn hover:bg-indigo-900 text-white px-2 py-2 h-10 w-48 text-xs font-bold uppercase ${styles.btn}`}
              >
                Check Pincode
              </button>
            </div>
          </div>

      
          <div className="flex flex-col">
            <ul className={`list-disc space-y-4 pl-3.5 point ${styles.point}`}>
              <li className="font-bold">Eco-Friendly Packaging</li>
              <li className="font-bold">Shipping To all over India</li>
              <li className="font-bold">Read Free Summary Of This Book</li>
              <li className="font-bold">This is First Copy, Learn More.</li>
              <li className="font-bold">100% Replacement Guaranteed, Read Refund Policy</li>
              <li className="font-bold">
                Have any Query?, You can ask Through WhatsApp Chat Directly.
              </li>
            </ul>
          </div>

          
          <div className={`lower pt-4 ${styles.lower}`}>
            <p className="mb-5">
              <span className="font-bold">Replacement:</span> 2 days
            </p>

            <div className={`flex items-center cart mb-5 ${styles.cart}`}>
              <button
                onClick={decrementCount}
                className={`px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white ${styles.button}`}
              >
                -
              </button>
              <div className="px-4 py-2 border-t border-b border-gray-300">{count}</div>
              <button
                onClick={incrementCount}
                className={`px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white ${styles.button}`}
              >
                +
              </button>
              <button
                className={`ml-4 px-4 py-2 uppercase text-sm font-bold btn hover:bg-indigo-900 text-white ${styles.btn}`}
              >
                Add To Cart
              </button>
            </div>

            
            <p className="cursor-pointer mb-4 hover:text-gray-500">🤍 Add to wishlist</p>
            <div className="mb-3 border-t border-gray-200"></div>
            <div className="flex flex-column">
              <p className="mb-4 text-gray-500">
                <span className="text-black">Categories</span> Paperback , Romance{' '}
              </p>
            </div>

        
            <div className="flex space-x-4 socials">
              <p>Share:</p>
              <a href="#" className={`text-gray-600 hover:text-black ${styles.socialLink}`}>
                <FaFacebookF />
              </a>
              <a href="#" className={`text-gray-600 hover:text-black ${styles.socialLink}`}>
                <FaTwitter />
              </a>
              <a href="#" className={`text-gray-600 hover:text-black ${styles.socialLink}`}>
                <FaEnvelope />
              </a>
              <a href="#" className={`text-gray-600 hover:text-black ${styles.socialLink}`}>
                <FaPinterest />
              </a>
              <a href="#" className={`text-gray-600 hover:text-black ${styles.socialLink}`}>
                <FaLinkedin />
              </a>
              <a href="#" className={`text-gray-600 hover:text-black ${styles.socialLink}`}>
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionSlider/>
      </Wrapper>
    </>
  );
};

export default PDetails;
