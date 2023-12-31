

import React from 'react';



const FilterMenu = ({ isVisible, onToggle, onSortChange, onPriceRangeChange }) => {
  return (
    <div className={`transition-all bg-white flex flex-row gap-20 rounded-md shadow-md p-4 duration-300 ${isVisible ? 'h-30vh overflow-hidden flex' : 'h-0 hidden'}`}>
      

        <div className="sort flex flex-col">
        <p className='uppercase mb-4 font-bold popinsfont text-lg'>Sort By</p>
        <label className='py-2'>
          <input type="radio" name="sort" onChange={() => onSortChange('lowToHigh')} />
           Low to High
        </label>
        <label className='py-2'>
          <input type="radio" name="sort" onChange={() => onSortChange('highToLow')} />
           High to Low
        </label>

        </div>

        <div className="range flex flex-col">
        <p className='uppercase font-bold popinsfont text-lg mb-4'>Price Range:</p>
        <label className='py-2'>
          <input type="radio" name="priceRange" onChange={() => onPriceRangeChange(0, 500)} />
          0 - 500
        </label>
        <label className='py-2'>
          <input type="radio" name="priceRange" onChange={() => onPriceRangeChange(500, 1000)} />
          500 - 1000
        </label>
        <label className='py-2'>
          <input type="radio" name="priceRange" onChange={() => onPriceRangeChange(1000, 1500)} />
          1000 - 1500
        </label>
        </div>
      </div>

      
   
  );
};

export default FilterMenu;