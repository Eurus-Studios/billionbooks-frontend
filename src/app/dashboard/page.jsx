import React from "react";
import Link from "next/link";
import { GoChecklist, GoDownload } from "react-icons/go";
import { VscAccount, VscLocation, VscHeart } from "react-icons/vsc";
import { TfiWallet, TfiSettings } from "react-icons/tfi";
import { AiOutlineDelete, AiOutlineLogout } from "react-icons/ai";
import { TbReplace } from "react-icons/tb";

const dashboard = () => {
  return (
    <>
      <div className="container mx-auto  px-4">
        <div className="content pb-5">
          <p>
            Hello <span className="font-bold latofont text-base">username</span> (not{" "}
            <span className="font-bold latofont">username</span>? Log out)
          </p>
          <br />
          <p className="latofont text-base">
            From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and
            edit your password and account details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {/* Wrap each div with a Link component */}
          <Link href="/dashboard/orders">
            <div className="bluebg flex flex-col items-center justify-center p-5 font-bold text-base cursor-pointer">
              <GoChecklist className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              ORDERS
            </div>
          </Link>
          <Link href="/dashboard/downloads">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <GoDownload className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              DOWNLOADS
            </div>
          </Link>
          <Link href="/dashboard/addresses">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <VscLocation className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              ADDRESSES
            </div>
          </Link>
          <Link href="/dashboard/AccountDetails">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <VscAccount className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              ACCOUNT DETAILS
            </div>
          </Link>
          <Link href="/dashboard/request-replacement">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <TbReplace className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              REQUEST REPLACEMENT
            </div>
          </Link>
          <Link href="/dashboard/Wallet">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <TfiWallet className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              WALLET
            </div>
          </Link>
          <Link href="/dashboard/wishlist">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <VscHeart className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              WISHLIST
            </div>
          </Link>
          <Link href="/dashboard/view-pos">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <TfiSettings className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              VIEW POS
            </div>
          </Link>
          <Link href="/dashboard/logout">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <AiOutlineLogout className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              LOGOUT
            </div>
          </Link>
          <Link href="/dashboard/delete-account">
            <div className="bluebg p-4 flex flex-col items-center justify-center cursor-pointer">
              <AiOutlineDelete className="mb-2.5 hover:text-gray-500 transition-colors" style={{ fontSize: "45px" }} />
              DELETE ACCOUNT
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default dashboard;
