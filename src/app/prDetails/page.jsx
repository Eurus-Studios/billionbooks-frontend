"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { VscHeart,VscCheck } from "react-icons/vsc";
import {
  IoIosArrowForward, IoIosArrowBack
} from "react-icons/io";
import {
  CiGrid41
} from "react-icons/ci";
import styles from "./page.module.css";
import Wrapper from "@/components/Wrapper";
import CardSlider from "@/components/Relatedslider";
import SectionSlider from "@/components/SectionSlider";
import {useRouter} from "next/navigation";
import { useStateContext } from "@/context/StateContext";
import { useWishlistContext } from "@/context/WishlistContext";
import productDetails from "@/components/data";
// import BookBoxPD from "@/components/BookBoxPD"
import BookSelector from "@/components/BookBoxPD";


const PDetails = ({ productId, img, title, price, category }) => {

  console.log(category);



  const [currentProductIndex, setCurrentProductIndex] = useState(-1);


  const findProductIndex = () => {
    const index = productDetails.findIndex((product, i) => {
      const parsedProductId = parseInt(productId, 10);
      // console.log("Index:", i, "has:", product.id, parsedProductId, product.id === parsedProductId);
      return product.id === parsedProductId;
    });

    // console.log(index);
    return index;
  };
  

  useEffect(() => {
    const index = findProductIndex();
    // console.log(index);
    setCurrentProductIndex(index);

    // console.log(index);

    
  }, [productId]);

  

  

  const router = useRouter();

  const handleNextProduct = () => {
    if (currentProductIndex === productDetails.length - 1) return; // Check if it's the last product
    const nextProductId = productDetails[currentProductIndex + 1].id;
    router.push(`/products/${nextProductId}`);
  };

  const handlePrevProduct = () => {
    if (currentProductIndex === 0) return; // Check if it's the first product
    const prevProductId = productDetails[currentProductIndex - 1].id;
    router.push(`/products/${prevProductId}`);
  };


 


  const { decQty, incQty, qty, onAdd } = useStateContext();

  const handleCart = () => {
    // console.log("Clicked add", title, productId);
    onAdd({ title, price, img, id: productId }, qty);
  };

  const { addToWishlist, isProductInWishlist } = useWishlistContext();

  const handleWishlistClick = () => {
    if (!isProductInWishlist({ id: productId })) {
      addToWishlist({ id: productId, title, price, img });
    }
  };

  useEffect(() => {
    const magnifying_area = document.getElementById("magnifying_area");
    const magnifying_img = document.getElementById("magnifying_img");

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
      magnifying_img.style.transform = "translate(-50%, -50%) scale(1)";
    };

    magnifying_area.addEventListener("mousemove", handleMouseMove);
    magnifying_area.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      magnifying_area.removeEventListener("mousemove", handleMouseMove);
      magnifying_area.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <section className={` mt-10 ${styles.productBox} `}>
          <div className={` ${styles.imgbox}`}>
            <figure id="magnifying_area" className={`${styles.figure}`}>
              <img
                id="magnifying_img"
                className={`${styles.magnifying_img}`}
                src="/book1.jpg"
                alt="Product"
              />
            </figure>
            <div className={`tag ${styles.tag}`}>
              <span>-69%</span>
            </div>
          </div>

          <div className={`  ${styles.contentContainer}`}>
            <div className="flex-none">

              <div className="flex flex-row justify-between mb-2.5 ">

              <p className={`${styles.path} latofont smtxt `}>
                Home / Shop / Paperback /{" "}
                <span className="text-black">{title}</span>
              </p>
              <div className="flex flex-row">
        <button onClick={handlePrevProduct}>
          <IoIosArrowBack className="mx-0.5 hover:text-gray-700" />
        </button>
        <Link href="/shop">
          <CiGrid41 className=" hover:text-gray-700"  />
        </Link>
        <button onClick={handleNextProduct}>
        <IoIosArrowForward className="mx-0.5  hover:text-gray-700" />
        </button>
      </div>

              </div>
             
              <h1 className={`title font-extrabold text-left ${styles.title}`}>
                {title}
              </h1>

              <p
                className={`price pt-2 text-2xl font-bold mb-4 ${styles.price}`}
              >
                <span className="line-through text-xl text-gray-400 font-normal">
                  ₹6o9
                </span>{" "}
                {price}{" "}
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
              <ul
                className={`list-disc space-y-4 pl-3.5 point ${styles.point}`}
              >
                <li className="font-bold">Eco-Friendly Packaging</li>
                <li className="font-bold">Shipping To all over India</li>
                <li className="font-bold">Read Free Summary Of This Book</li>
                <li className="font-bold">This is First Copy, Learn More.</li>
                <li className="font-bold">
                  100% Replacement Guaranteed, Read Refund Policy
                </li>
                <li className="font-bold">
                  Have any Query?, You can ask Through WhatsApp Chat Directly.
                </li>
              </ul>
            </div>

             {/* Render BookBoxPD component if the category is "book-box" */}
             {category === "book-boxes" && (
        <>
          {/* <BookBoxPD /> */}
          {[...Array(10)].map((_, index) => (
            <BookSelector key={index} bookNumber={index + 1} />
          ))}
        </>
      )}

            <div className={`lower pt-4 ${styles.lower}`}>
              <p className="mb-5">
                <span className="font-bold">Replacement:</span> 2 days
              </p>

              <div className={`flex items-center cart mb-5 ${styles.cart}`}>
                <button
                  onClick={decQty}
                  className={`px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white ${styles.button}`}
                >
                  -
                </button>
                <div className="px-4 py-2 border-t border-b border-gray-300">
                  {qty}
                </div>
                <button
                  onClick={incQty}
                  className={`px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white ${styles.button}`}
                >
                  +
                </button>
                <button
                  onClick={() => handleCart()}
                  className={`ml-4 px-4 py-2 uppercase text-sm font-bold btn hover:bg-indigo-900 text-white ${styles.btn}`}
                >
                  Add To Cart
                </button>
              </div>

              <div className="mb-5">
        {isProductInWishlist({ id: productId }) ? (
          <button
            className={`px-4 py-2  font-bold `}
          >
            <div className="flex flex-row">
              <VscCheck className="text-xl pr-1 mt-1 font-bold text-green-700"/>

            Successfully Added to Wishlist
            </div>
            
           
          </button>
        ) : (
          <button
            onClick={handleWishlistClick}
            className={`px-4 py-2  font-bold`}
          >
            <div className="flex hover:text-gray-600">
           <VscHeart className="text-xl"/> Add to Wishlist
           </div>
          </button>
        )}
      </div>

              <div className="mb-3 border-t border-gray-200"></div>
              <div className="flex flex-column">
                <p className="mb-4 text-gray-500">
                  <span className="text-black">Categories</span> Paperback ,
                  Romance{" "}
                </p>
              </div>

              <div className="flex space-x-4 socials">
                <p>Share:</p>
                <a
                  href="#"
                  className={`text-gray-600 hover:text-black ${styles.socialLink}`}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className={`text-gray-600 hover:text-black ${styles.socialLink}`}
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className={`text-gray-600 hover:text-black ${styles.socialLink}`}
                >
                  <FaEnvelope />
                </a>
                <a
                  href="#"
                  className={`text-gray-600 hover:text-black ${styles.socialLink}`}
                >
                  <FaPinterest />
                </a>
                <a
                  href="#"
                  className={`text-gray-600 hover:text-black ${styles.socialLink}`}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className={`text-gray-600 hover:text-black ${styles.socialLink}`}
                >
                  <FaTelegram />
                </a>

                

                
              </div>
            </div>
          </div>


        </section>

        <SectionSlider />
        
        <CardSlider/>

      
      </Wrapper>
    </>
  );
};

export default PDetails;
