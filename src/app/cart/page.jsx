"use client";

import React from "react";
import { useRef } from "react";

import Wrapper from "@/components/Wrapper";
import styles from "./page.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "@/context/StateContext";

const page = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

 

  return (
    <Wrapper>
      <div className={`flex ${styles.outcont} flex-row justify-center my-8`}>
        <div className={`flex ${styles.leftcont} w-3/5 flex-col`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto">
              <thead>
                <tr>
                  <th className="p-2"></th>
                  <th className="p-2"></th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item._id}>
                    <td className="p-2 text-center">
                    <button
                          type="button"
                          className="remove-item "
                          onClick={() => onRemove(item)}
                        >
                          <TiDeleteOutline className="font-lg" />
                        </button>
                    </td>
                    <td className="p-2 text-center">
                      <img src={item.img} className={`${styles.Cartimage}`} />
                    </td>
                    <td className="p-2 text-center">{item.title}</td>
                    <td className="p-2 text-center">${item.price}</td>
                    <td className="p-2 text-center">
                      <p className="flex pb-1 flex-row">
                        <button
                          className="px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white button"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="px-4 py-2 border-t border-b border-gray-300 button">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white button"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus className="mt-1" />
                        </button>
                      </p>
                    </td>
                    <td className="p-2 text-center">
                      ${item.quantity * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t mt-2"></div>
          </div>
        </div>

        <div
          className={`${styles.cartBox} flex mt-4 flex-col ml-10 min-w-[428px] p-8 border-gray-200  border-4`}
        >
          <h1 className="uppercase text-2xl font-bold popinsfont mb-1">
            Cart totals
          </h1>
          <div className="flex flex-row text-base justify-between">
            <p className="py-4 px-3">Subtotal</p>
            <p className="py-4 px-3 text-gray-400">${totalPrice}</p>
          </div>
          <hr />
          <div className="flex flex-row text-lg justify-between">
            <p className="py-4 px-3 text-xl font-bold">Total</p>
            <p className="py-4 px-3 text-xl font-bold latofont">
              ${totalPrice}
            </p>
          </div>

          <button className="bluebg hover:bg-blue-900 popinsfont text-white font-semi-bold py-3 px-3 uppercase">
            PROCEED TO Checkout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
