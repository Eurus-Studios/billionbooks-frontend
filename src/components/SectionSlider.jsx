"use client";
import { useState } from "react";

const SectionSlider = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("description");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Section Slider */}
      <section className="flex flex-wrap flex-col mt-20 mb-20">
        <div className="border-t border-gray-300"></div>
        
        {/* Slider menu */}
        <div className="slider-menu mt-4">
          <button
            className={`tab-button ${
              activeTab === "description" ? "active" : ""
            }`}
            onClick={() => handleTabClick("description")}
          >
            <a className="hover:text-black uppercase font-bold">Description</a>
          </button>
          <button
            className={`tab-button ${
              activeTab === "additionalInfo" ? "active" : ""
            }`}
            onClick={() => handleTabClick("additionalInfo")}
          >
            <a className="hover:text-black uppercase font-bold">Additional Information</a>
          </button>
          <button
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => handleTabClick("reviews")}
          >
            <a className="hover:text-black uppercase font-bold">Reviews</a>
          </button>
        </div>

        {/* Slider content */}
        <div className="slider-content">
          {activeTab === "description" && (
            <div className="section-description des show">
              {/* Description section */}
              <div>
                <p className="text-sm font-bold mb-1">DESCRIPTION</p>
                <p className="font-bold mt-1">
                  This printed edition includes exclusive new material—a new
                  epilogue and an essay written by the author.
                </p>
              </div>
              <br />
              <p className="font-bold text-base">
                From the #1 New York Times bestselling author of It Ends With
                Us, a novella about the search for happily ever after.
              </p>
              <br />

              <p className="text-base">
                A chance encounter in the dark leads eighteen-year-old Daniel
                and the girl who stumbles across him to profess their love for
                each other. But this love has conditions: they agree it will
                last only one hour, and it will be only make-believe.
              </p>
              <br />
              <p className="text-base">
                When their hour is up and the girl rushes off like Cinderella,
                Daniel tries to convince himself that what happened between them
                seemed perfect only because they were pretending it was. Moments
                like that happen only in fairy tales.
              </p>
              <br />

              <p className="text-base">
                One year and one bad relationship later, his disbelief in
                love-at-first-sight is stripped away the day he meets Six: a
                girl with a strange name and an even stranger personality.
                Unfortunately for Daniel, finding true love doesn’t guarantee a
                happily ever after . . . it only further threatens it.
              </p>
              <br />
              <p className="text-base">
                Will an unbearable secret from the past jeopardize Daniel and
                Six’s only chance at saving each other?
              </p>
              <div className="author pt-6">
                <p className="text-xl font-bold about mb-1">About the Author</p>
                <p className="text-base">
                  Colleen Hoover is the #1 New York Times bestselling author of
                  more than twenty-three novels, including It Ends with Us, All
                  Your Perfects, Ugly Love, and Verity. In 2015, Colleen and her
                  family founded a nonprofit called The Bookworm Box, a
                  bookstore and monthly book subscription service that has
                  donated over $1,000,000 to various charities to date. Colleen
                  lives in Texas with her husband and their three boys. For more
                  information, please visit ColleenHoover.com.
                </p>

                {/* Additional information */}
                <ul className="list-disc mt-4 ml-8">
                  <li className="mb-3 px-2">
                    Publisher: Atria Books; Reprint edition (18 March 2014)
                  </li>
                  <li className="mb-3 px-2">Language: English</li>
                  <li className="mb-3 px-2">Item Weight: 159 g</li>
                  <li className="mb-3 px-2">
                    Dimensions: 13.49 x 1.12 x 20.96 cm
                  </li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === "additionalInfo" && (
            <div className="section-additional-info des show mx-auto text-center">
              <div className="grid grid-cols-2 gap-x-1 gap-y-2 mt-4 ml-8">
                <div className="col-span-1 px-6 py-3 border-b font-bold">Weight</div>
                <div className="col-span-1 px-6 py-3 border-b border-l-0">159 kg</div>
                <div className="col-span-1 px-6 py-3 mt-2  border-gray-300 font-bold">Dimensions</div>
                <div className="col-span-1 px-6 py-3 mt-2  ">20 × 17 × 2 cm</div>
              </div>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="section-reviews des show">
              {/* Reviews section */}
              <h2 className="font-semibold text-base pb-1">REVIEWS</h2>
              <p>There are no reviews yet</p>
            </div>
          )}
        </div>
      </section>
      <div className="border-t mt-20 border-gray-300"></div>
    </>
  );
};

export default SectionSlider;
