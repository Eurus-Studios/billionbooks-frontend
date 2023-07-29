"use client"
import React from 'react';

const FilterMenu = ({ isVisible, onToggle, onSortChange, onPriceRangeChange }) => {
  return (
    <div className={`transition-all duration-300 ${isVisible ? 'h-30vh' : 'h-0'}`}>
      <div className=" p-4">
        <p>Sort By Price:</p>
        <label>
          <input type="radio" name="sort" onChange={() => onSortChange('lowToHigh')} />
          Low to High
        </label>
        <label>
          <input type="radio" name="sort" onChange={() => onSortChange('highToLow')} />
          High to Low
        </label>
        <p>Price Range:</p>
        <label>
          <input type="radio" name="priceRange" onChange={() => onPriceRangeChange(0, 500)} />
          0 - 500
        </label>
        <label>
          <input type="radio" name="priceRange" onChange={() => onPriceRangeChange(500, 1000)} />
          500 - 1000
        </label>
        <label>
          <input type="radio" name="priceRange" onChange={() => onPriceRangeChange(1000, 1500)} />
          1000 - 1500
        </label>
      </div>

      {/* <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 mr-4 hover:bg-red-600 focus:outline-none"
      >
        Clear Filters
      </button> */}


      
    </div>
  );
};

export default FilterMenu;
