"use client"
import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { VscSearch } from 'react-icons/vsc';


const BookSelector = ({ bookNumber }) => {
  const books = [
    { title: 'No Rules Rules: Netflix and the Culture of Reinvention Paperback', image: '/book1.jpg' },
    { title: 'Show Your Work: 10 Ways To Share Your Creativity And Get Discovered', image: './book2.jpg' },
    { title: 'Marketing Management | Indian Case Studies Included', image: './book3.jpg' },
    
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setIsOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="relative">
        <h1 className='my-3 font-bold latofont mt-4'>
          Choose your {bookNumber} book <span className='text-red-500'>*</span>
        </h1>
        <button
          onClick={toggleDropdown}
          className="py-2 px-4 w-full rounded border bg-white text-gray-800 border-gray-300 flex items-center justify-between"
        >
          <div className="flex">
            <img src={selectedBook.image} alt={"img"} className="w-10 h-10 mr-2 " />
            <div className="flex text-start justify-start">{selectedBook.title}</div>
          </div>
          {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border rounded border-gray-300 shadow-lg max-h-52 overflow-auto">
          

          
          <div className="flex form mb-5">
                <input
                  type="text"
                  placeholder="Search for a book"
                  value={searchQuery}
              onChange={handleSearchChange}
                  className={`w-full border border-gray-300 px-4 py-2 h-10 `}
                />
                <button
                  className={`btn hover:bg-indigo-900 text-white px-2 py-2 h-10 w-18 text-xs font-bold uppercase `}
                >
                <VscSearch className='text-xl'/>
                </button>
              </div>
          
            {/* <input
              type="text"
              placeholder="🔍︎ Search for a book"
              className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              value={searchQuery}
              onChange={handleSearchChange}
            /> */}
            {filteredBooks.map((book, index) => (
              <button
                key={index}
                onClick={() => handleBookSelect(book)}
                className="w-full py-2 px-4 text-gray-800 hover:bg-gray-100 flex items-center"
              >
                <div className="flex">
                  <img src={book.image} alt={"img"} className="w-10 h-10 mr-2 " />
                  <div className="flex text-start justify-start">{book.title}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <hr className='mt-4' />
    </>
  );
};

export default BookSelector;
