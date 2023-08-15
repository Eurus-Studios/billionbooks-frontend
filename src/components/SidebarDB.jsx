"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";

const Sidebar = () => {
  const router = useRouter();
  const { setSelectedSidebar, selectedSidebar } = useStateContext();
  const sidebarOptions = [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Orders", link: "/dashboard/Orders" },
    { label: "Downloads", link: "/dashboard/downloads" },
    { label: "Addresses", link: "/dashboard/address" },
    { label: "Account details", link: "/dashboard/AccountDetails" },
    { label: "Request Replacement", link: "/dashboard/request-replacement" },
    { label: "Wallet", link: "/dashboard/Wallet" },
    { label: "Wishlist", link: "/dashboard/wishlist" },
    { label: "View POS", link: "/dashboard/view-pos" },
    { label: "Logout", link: "/dashboard/logout" },
    { label: "Delete Account", link: "/dashboard/delete-account" },
  ];
    const handleSidebarItemClick = (label,link) => {
      
      setSelectedSidebar(label);
      router.push(link); // Use router.push to navigate
    };

  return (
    <div className="w-72 border-r border-gray-300 h-full">
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-4">MY ACCOUNT</h1>
        <hr />
        <ul>
          {sidebarOptions.map((option, index) => {
            // const isActive = router.pathname === option.link;

            return (
              <li className="my-1.5 font-bold popinsfont" key={index}>
                <p
                  className={`block px-4 py-2 cursor-pointer rounded hover:text-gray-500 hover:bg-gray-100 focus:text-gray-300 ${option.label===selectedSidebar?'bg-gray-100':''}`}
                  onClick={() => handleSidebarItemClick(option.label,option.link)}
                  
                >
                  {option.label}
                  {console.log(selectedSidebar, option.label)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
