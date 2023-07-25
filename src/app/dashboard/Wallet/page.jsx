"use client"

import React, { useState } from 'react';
import { RiFolderTransferFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('addBalance');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    
      <div className="flex flex-col">
        <div className="balancebox py-10 flex flex-col justify-start p-2 w-full">
          
          <h1 className='popinsfont px-6'>Wallet balance</h1>
          <div className='latofont px-6 py-2 text-4xl'>₹O</div>
          <h1 className='popinsfont px-6'>View Transaction</h1>
        </div>

        <div className="box flex flex-row p-3 balcont justify-between">
          <div className={`flex flex-col justify-center align-middle rounded-xl py-8 ${activeTab === 'addBalance' ? 'active-tab' : ''}`} onClick={() => handleTabClick('addBalance')}>
            <div className='self-center'><AiFillPlusCircle  className='text-blue-500 text-3xl mb-2'/></div> 
            <div className='mb-2'>Add Balance</div> 
          </div>
        
          <div className={`flex flex-col justify-center align-middle rounded-xl py-8 ${activeTab === 'walletTransfer' ? 'active-tab' : ''}`} onClick={() => handleTabClick('walletTransfer')}>
            <div className="self-center"><RiFolderTransferFill className='text-blue-500 text-3xl mb-2'/></div>
            <div className='popinsfont'>Wallet Transfer</div> 
          </div>
        
          <div className={`flex flex-col justify-center align-middle rounded-xl py-8 ${activeTab === 'withdrawRequest' ? 'active-tab' : ''}`} onClick={() => handleTabClick('withdrawRequest')}>
            <div className="self-center"><BiMoneyWithdraw className='text-blue-500 text-3xl mb-2'/></div>
            <div>Wallet Withdrawal Request</div> 
          </div>
        </div>

     
        <div className="form">
         
            <div className="py-3">
              <h2 className="font-bold text-lg">Enter Amount (₹):</h2>
              <input
                type="number"
              
                className="border-2 rounded-lg w-full h-11 roundedpy-1 mt-2"
              />
             
            </div>
            <button  className="bg-blue-600 transition-colors text-white rounded-lg px-12 uppercase font-bold hover:bg-violet-100 hover:border-blue-950 hover:text-blue-600 py-3 mt-2">Proceed</button>
       
        </div>
  


      </div>
    
  )
}

export default Wallet;
