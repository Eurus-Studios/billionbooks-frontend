"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/context/StateContext";
import Link from "next/link";
import { sidebarOptions } from "./data";
import { UserAuth } from "@/context/AuthContext";

const Sidebar = () => {
  const router = useRouter();
  const { logOut } = UserAuth();
  const { setSelectedSidebar, selectedSidebar } = useStateContext();
 
  const handleSidebarItemClick = (label, link, action) => {
    setSelectedSidebar(label);

    if (action) {
      action();
    } else if (link) {
      if (link === '/dashboard/logout') {
        logOut();
        router.push("/login")
      } else {
        router.push(link);
      }
    }
    
}


  return (
    <div className="w-72 border-r border-gray-300 h-full">
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-4">MY ACCOUNT</h1>
        <hr />
        <ul>
          {sidebarOptions.map((option, index) => (
            <li className="my-1.5 font-bold popinsfont" key={index}>
              <p
                className={`block px-4 py-2 cursor-pointer rounded hover:text-gray-500 hover:bg-gray-100 focus:text-gray-300 ${
                  option.label === selectedSidebar ? "bg-gray-100" : ""
                }`}
                onClick={() =>
                  handleSidebarItemClick(option.label, option.link, option.action)
                }
              >
                {option.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;