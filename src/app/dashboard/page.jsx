import React from "react";
import { GoChecklist, GoDownload } from "react-icons/go";

import { VscAccount, VscLocation, VscHeart } from "react-icons/vsc";
import { TfiWallet, TfiSettings } from "react-icons/tfi";
import { AiOutlineDelete, AiOutlineLogout } from "react-icons/ai";
import { TbReplace } from "react-icons/tb";

const page = () => {
  return (
    <div className="my-12 flex flex-row max-w-7xl mx-auto ">

      <div className="sidemenu max-w-xs text-5xl"> MY ACCOUNT MENU INCOMING</div>
    

      <div className="container mx-auto px-4">
        <div className="content pb-5">
          <p>Hello <span className="font-bold latofont text-base">username</span> (not <span className="font-bold latofont">username</span>? Log out)</p>
          <br />
          <p className="latofont text-base">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className="bluebg flex flex-col  items-center justify-center p-5 font-bold text-base cursor-pointer">
            <GoChecklist
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            ORDERS
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center  cursor-pointer">
            <GoDownload
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            DOWNLOADS
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center cursor-pointer">
            <VscLocation
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            ADRESSES
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center cursor-pointer">
            <VscAccount
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            ACCOUNT DETAILS
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center cursor-pointer">
            <TbReplace
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            REQUEST REPLACEMENT
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center cursor-pointer">
            <TfiWallet
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            WALLET
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center cursor-pointer">
            <VscHeart
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            WISHLIST
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center cursor-pointer">
            <TfiSettings
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            VIEW POS
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center cursor-pointer">
            <AiOutlineDelete
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            LOGOUT
          </div>
          <div className="bluebg p-4 flex flex-col  items-center justify-center cursor-pointer">
            <AiOutlineLogout
              className="mb-2.5 hover:text-gray-500 transition-colors"
              style={{ fontSize: "45px" }}
            />
            DELETE ACCOUNT
          </div>
        </div>


      </div>
    </div>
  );
};

export default page;
