"use client"

import Router from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useAddressContext } from '@/context/AddressContext';

import React from 'react';
import { useState } from 'react';

const page = () => {

  const router = useRouter();

  

  const handleSubmit = (e) => {
    
    router.push('/dashboard/address');
  };


  return (
    <div className="p-6 max-w-full mx-auto bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-medium mb-1">
            First name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full border rounded p-2"
            placeholder="Enter your first name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium mb-1">
            Last name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full border rounded p-2"
            placeholder="Enter your last name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block font-medium mb-1">
            Company name (optional)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="w-full border rounded p-2"
            placeholder="Enter your company name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block font-medium mb-1">
            Country / Region *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full border rounded p-2"
            placeholder="Enter your country/region"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="streetAddress" className="block font-medium mb-1">
            Street address *
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            className="w-full border rounded p-2"
            placeholder="Enter your street address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apartment" className="block font-medium mb-1">
            Apartment, suite, unit, etc. (optional)
          </label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            className="w-full border rounded p-2"
            placeholder="Enter your apartment, suite, unit, etc."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block font-medium mb-1">
            Town / City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full border rounded p-2"
            placeholder="Enter your town/city"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block font-medium mb-1">
            State / County *
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full border rounded p-2"
            placeholder="Enter your state/county"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postcode" className="block font-medium mb-1">
            Postcode / ZIP *
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            className="w-full border rounded p-2"
            placeholder="Enter your postcode/ZIP"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600"
          onClick={handleSubmit}
        >
          SAVE ADDRESS
        </button>
      </form>
    </div>
  );
};

export default page;
