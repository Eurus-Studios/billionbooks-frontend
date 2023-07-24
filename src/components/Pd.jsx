"use client";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import Wrapper from "./Wrapper";
import SectionSlider from "./SectionSlider";

const point = () => {
  // State to manage the count of items
  const [count, setCount] = useState(1);

  // Function to decrement the count by 1
  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // Function to increment the count by 1
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // useEffect to handle the magnifying effect on the product image
  useEffect(() => {
    const magnifying_area = document.getElementById("magnifying_area");
    const magnifying_img = document.getElementById("magnifying_img");

    const handleMouseMove = (event) => {
      // Calculate the percentage position of the cursor within the magnifying area
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
      {/* Product section */}
      <section className="mt-10 productBox flex flex-row gap-8 flex-wrap mb-7">
        {/* Product image and magnifying area */}
        <div className="imgbox flex flex-row">
          <figure id="magnifying_area">
            <img id="magnifying_img" src="/product.png" />
          </figure>
          <div className="tag ">
            <span>-69%</span>
          </div>
        </div>

        {/* Uncomment the following code to add a search icon */}
        {/* <div className="sticky-search-icon absolute top-0 right-0">
          <FaSearch size={22} />
        </div> */}

        {/* Product information */}
        <div className="contentContainer flex flex-col flex-wrap mt-2">
          <div className="flex-none">
            <p className="path text-gray-700 text-xs mb-3 pt-2">
              Home / Shop / Paperback /{" "}
              <span className="text-black">
                Finding Cinderella : A Novella Paperback
              </span>
            </p>
            <h1 className="title text-left">
              Finding Cinderella : A Novella Paperback
            </h1>

            <p className="price pt-2 text-2xl font-bold mb-4">
              <span className="line-through text-xl text-gray-400 font-normal">
                ₹699
              </span>{" "}
              ₹220{" "}
            </p>

            {/* Pincode form */}
            <div className="flex form mb-5">
              <input
                type="text"
                placeholder="Enter the pincode"
                className="w-full border border-gray-300 px-4 py-2 h-10"
              />
              <button className="btn hover:bg-indigo-900 text-white px-2 py-2 h-10 w-48 text-xs font-bold uppercase">
                Check Pincode
              </button>
            </div>
          </div>

          {/* Product details */}
          <div className="flex flex-col">
            <ul className="list-disc space-y-4 pl-3.5 point">
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

          {/* Product buttons  Item count and add to cart */}
          <div className="lower pt-4">
            <p className="mb-5">
              <span className="font-bold">Replacement:</span>2 days
            </p>

            <div className="flex items-center cart mb-5">
              <button
                onClick={decrementCount}
                className="px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white"
              >
                -
              </button>
              <div className="px-4 py-2 border-t border-b border-gray-300">
                {count}
              </div>
              <button
                onClick={incrementCount}
                className="px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white"
              >
                +
              </button>
              <button className="ml-4 px-4 py-2 uppercase text-sm font-bold btn hover:bg-indigo-900 text-white">
                Add To Cart
              </button>
            </div>

            {/* Add to wishlist */}
            <p className="cursor-pointer mb-4 hover:text-gray-500">
              🤍 Add to wishlist
            </p>
            <div className="mb-3 border-t border-gray-200"></div>
            <div className="flex flex-column">
              <p className="mb-4 text-gray-500">
                <span className="text-black">Categories</span> Paperback ,
                Romance{" "}
              </p>
            </div>

            {/* Social media sharing */}
            <div className="flex space-x-4 socials">
              <p>Share:</p>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaEnvelope />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaPinterest />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
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

export default point;
