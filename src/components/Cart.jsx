import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { BsCartX } from "react-icons/bs";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";

const Cart = () => {
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
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container flex flex-col justify-between ">
        <div className="upper">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(false)}
          >
            <AiOutlineLeft />
            <span className="heading uppercase text-xl font-bold">
              Shopping Cart
            </span>
            <span className="cart-num-items">({totalQuantities} items)</span>
          </button>

          {cartItems.length < 1 && (
            <div className="empty-cart flex flex-col justify-center ">
              <BsCartX className=" self-center text-gray-200 " size={100} />
              <h3 className="my-6">No products in the cart</h3>
              <Link href="/">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="bluebg hover:bg-blue-900 popinsfont text-white text-base font-bold py-3 px-4  uppercase"
                >
                  Return to shop
                </button>
              </Link>
            </div>
          )}

          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.img} className="cart-product-image" />
                  <div className="item-desc">
                    <div className="flex flex-col top">
                      <div className="topp flex gap-2 flex-row justify-between">
                        <h5 className="mb-2 font-bold">{item.title}</h5>

                        <button
                          type="button"
                          className="remove-item "
                          onClick={() => onRemove(item)}
                        >
                          <TiDeleteOutline />
                        </button>
                      </div>

                      <h4 className="text-sm text-gray-400 mb-1">
                        Replacemenet:2 days{" "}
                      </h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className=" flex pb-1   flex-row">
                          <button
                            className="px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white button"
                            onClick={() =>
                              toggleCartItemQuanitity(item.id, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </button>
                          <span
                            className="px-4 py-2 border-t border-b border-gray-300 button"
                            onClick=""
                          >
                            {item.quantity}
                          </span>
                          <span
                            className="px-2 py-2 border border-gray-300 hover:bg-indigo-900 hover:text-white button "
                            onClick={() =>
                              toggleCartItemQuanitity(item.id, "inc")
                            }
                          >
                            <AiOutlinePlus className="mt-1" />
                          </span>
                        </p>
                        <div className="my-1 font-semibold text-base">
                          {item.quantity} * ${item.price}
                        </div>
                      </div>

                      <hr />
                    </div>
                  </div>
                  <hr />{" "}
                </div>
              ))}
          </div>
          <hr />
        </div>

        {cartItems.length >= 1 && (
          <div className="cart-bottom p-5">
            <hr />
            <div className="flex flex-row my-2 p-1 uppercase font-bold text-2xl justify-between">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>

            <div className="flex  flex-col gap-2">
              <Link href="/cart">
                <button className="bluebg hover:bg-blue-900 popinsfont text-white font-bold py-4 px-4 w-full uppercase">
                  View Cart
                </button>
              </Link>
              <button className="bluebg hover:bg-blue-900 popinsfont text-white font-bold py-4 px-4 uppercase">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
