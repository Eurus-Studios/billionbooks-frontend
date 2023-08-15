"use client";

import { AiOutlineMenu } from "react-icons/ai";

import BookCardHorizon from "./BookCardHorizan";
import BookCard from "./BookCard";

// const Allproducts = ({ category }) => {
//   const router = useRouter();
//   const [sortOption, setSortOption] = useState("");
//   const [filterVisible, setFilterVisible] = useState(false);
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
 
//   const [baseProducts, setBaseProducts] = useState([]);
//   const [activeFilter, setActiveFilter] = useState();

//   useEffect(() => {
//     if (productDetails) {
//       const filteredProducts = productDetails.filter((product) => {
//         const productCategory = product.category
//           ? product.category?.replace(/[^a-z]/gi, "").toLowerCase()
//           : "";
//         const inputCategory = category?.replace(/[^a-z]/gi, "").toLowerCase();
//         return productCategory === inputCategory;
//       });
//       setBaseProducts(filteredProducts);
//       console.log(
//         "Category: ",
//         category,
//         "and after filter: ",
//         filteredProducts
//       );
//     }
//   }, [category]);

//   useEffect(() => {
//     if (sortOption) {
//       handleSort();
//     }
//   }, [sortOption]);

//   const toggleFilter = () => {
//     setFilterVisible(!filterVisible);
//   };

  // const toggleHorizonView = () => {
  //   setShowHorizon(!showHorizon);
  // };


//   const handlePriceRangeChange = (min, max) => {
//     setPriceRange({ min, max });
//     setFilterVisible(false);
//   };

//   const handleClick = (product) => {
//     router.push(`/products/${product.id}`);
//   };

//   let filteredProducts;
//   // //  filteredProducts = category
//   // //   ? productDetails.filter(
//   // //       (product) => product.category.toLowerCase() === category.toLowerCase()
//   // //     )
//   // //   : productDetails;

//   // // if (filteredProducts.length === 0) {
//   // //   // If no products found with the matching category, use the slug as title and filter by title
//   // //   filteredProducts = productDetails.filter((product) =>
//   // //     product.title.toLowerCase().includes(category.toLowerCase())
//   // //   );
//   // // }

//   const handleSort = () => {
//     if (sortOption === "lowToHigh") {
//       setBaseProducts([...baseProducts].sort((a, b) => a.price - b.price));
//     } else if (sortOption === "highToLow") {
//       setBaseProducts([...baseProducts].sort((a, b) => b.price - a.price));
//     } else {
//       console.log("Nothing");
//     }
//   };

//   useEffect(() => {
//     if (activeFilter?.max) {
//       handleFilter(activeFilter);
//     } else {
//       console.log("COunldnt aply", activeFilter);
//       setBaseProducts(productDetails);
//     }
//   }, [activeFilter]);

//   const handleFilter = (priceRange) => {
//     console.log("Filter added with ", priceRange);
//     if (priceRange.min >= 0 && priceRange.max > 0) {
//       setBaseProducts(
//         productDetails.filter(
//           (product) =>
//             product.price >= priceRange.min && product.price <= priceRange.max
//         )
//       );
//     }
//   };


//   return (
//     <Wrapper>
//       <div className="flex justify-between items-center mb-4">
//         <div className="shoppath my-8">
//           Home / Shop / {category && <strong>{category}</strong>}
//         </div>
//         <div className="flex flex-row ">
//           {" "}
//           <div className="flex mt-2 justify-between align-middle">
//             {" "}
//             <AiOutlineMenu
//               className="text-xl mx-2"
//               onClick={toggleHorizonView} // Toggle the horizon view on menu button click
//             />
//           </div>
//           <button
//             onClick={toggleFilter}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//           >
//             Filter
//           </button>
//         </div>
//       </div>

//       {baseProducts?.length === 0 ? (
//         <div className="bluebg py-6  px-4 text-2xl text-gray-500">
//           No products were found for "{category}"
//         </div>
//       ) : (
//         <>
//           <FilterMenu
//             isVisible={filterVisible}
//             setSortOption={setSortOption}
//             sortOption={sortOption}
//             priceRange={priceRange} // Pass the priceRange as a prop
//             onPriceRangeChange={handlePriceRangeChange}
//             // handleFilter={handleFilter}
//             setActiveFilter={setActiveFilter}
//           />

//           <div className="flex flex-wrap items-center mt-2">
//             {sortOption && (
//               <div className="bg-blue-100 text-blue-700 px-2 py-1 mr-2 rounded-md my-10">
//                 Sort:{" "}
//                 {sortOption === "lowToHigh" ? "Low to High" : "High to Low"}
//                 <button
//                   onClick={() => setSortOption("")}
//                   className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
//                 >
//                   Clear
//                 </button>
//               </div>
//             )}

//             {activeFilter && (
//               <div className="bg-blue-100 text-blue-700 px-2 py-1 mr-2 rounded-md">
//                 Price: {activeFilter.min} - {activeFilter.max}
//                 <button
//                   onClick={() => setActiveFilter()}
//                   className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//           </div>

//           <div
//             className={`${
//               showHorizon
//                 ? "flex flex-col"
//                 : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6"
//             }`}
//           >
//             {baseProducts?.length
//               ? baseProducts?.map((product) =>
//                   showHorizon ? (
//                     <div key={product.id}>
//                       <BookCardHorizon
//                         product={product}
//                         onClick={handleClick}
//                       />
//                     </div>
//                   ) : (
//                     <div key={product.id}>
//                       <BookCard product={product} onClick={handleClick} />
//                     </div>
//                   )
//                 )
//               : "NO PRODUCTS"}
//           </div>
//         </>
//       )}
//     </Wrapper>
//   );
// };

// export default Allproducts;


import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import productDetails from './data';
import { PiShoppingCartLight } from 'react-icons/pi';
import { VscHeart } from 'react-icons/vsc';
import { BsSearch } from 'react-icons/bs';
import Wrapper from './Wrapper';
import FilterMenu from './FilterMenu';

const Allproducts = ({ category }) => {
  const router = useRouter();
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [showHorizon, setShowHorizon] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setFilterVisible(false);
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max });
    setFilterVisible(false);
  };
  const toggleHorizonView = () => {
    setShowHorizon(!showHorizon);
  };

  const handleClick = (product) => {
    router.push(`/products/${product.id}`);
  };

  let filteredProducts = category
    ? productDetails.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : productDetails;

  if (filteredProducts.length === 0) {
    // If no products found with the matching category, use the slug as title and filter by title
    filteredProducts = productDetails.filter(
      (product) => product.title.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (sortOption === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (priceRange.min > 0 && priceRange.max > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );
  }

  

  return (
    <Wrapper>
 
 <div className="flex justify-between items-center mb-4">
     <div className="shoppath my-8">
         Home / Shop / {category && <strong>{category}</strong>}
       </div>
        <div className="flex flex-row ">
         {" "}
          <div className="flex mt-2 justify-between align-middle">
            {" "}
           <AiOutlineMenu
              className="text-xl mx-2 cursor-pointer"
              onClick={toggleHorizonView} // Toggle the horizon view on menu button click
            />
          </div>
          <button
            onClick={toggleFilter}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Filter
          </button>
        </div>
      </div>


      {filteredProducts.length === 0 ? (
        <div className="bluebg py-6  px-4 text-2xl text-gray-500">
          No products were found for "{category}"
        </div>
      ) : ( 

        <>
      
      <FilterMenu
  isVisible={filterVisible}
  onToggle={toggleFilter}
  onSortChange={handleSortChange}
  onPriceRangeChange={handlePriceRangeChange}
/>

      
      <div className="flex flex-wrap items-center mt-2">
        {sortOption && (
          <div className="bg-blue-100 text-blue-700 px-2 py-1 mr-2 rounded-md my-10">
            Sort: {sortOption === 'lowToHigh' ? 'Low to High' : 'High to Low'}
            <button
              onClick={() => setSortOption('')}
              className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              
            </button>
          </div>
        )}
        {priceRange.min > 0 && priceRange.max > 0 && (
          <div className="bg-blue-100 text-blue-700 px-2 py-1 mr-2 rounded-md">
            Price: {priceRange.min} - {priceRange.max}
            <button
              onClick={() => setPriceRange({ min: 0, max: 0 })}
              className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
            >
            
            </button>
          </div>
        )}
      </div>





      <div
            className={`${
              showHorizon
                ? "flex flex-col"
                : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8 md:m-auto xl:grid-cols-6"
            }`}
          >
            {filteredProducts?.length
              ? filteredProducts?.map((product) =>
                  showHorizon ? (
                    <div key={product.id}>
                      <BookCardHorizon
                        product={product}
                        onClick={handleClick}
                      />
                    </div>
                  ) : (
                    <div key={product.id}>
                      <BookCard product={product} onClick={handleClick} />
                    </div>
                  )
                )
              : "NO PRODUCTS"}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Allproducts;
