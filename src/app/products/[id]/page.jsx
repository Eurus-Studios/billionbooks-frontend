"use client";
import React from "react";

import { productDetails } from "@/components/data.js";
import PDetails from "@/app/prDetails/page";
// console.log(productDetails);


const ProductDetailsPage = ({ params }) => {
  const { id: productId } = params;
  const product = productDetails?.find((p) => p.id.toString() === productId);
  console.log(productId, params);
  if (!product) {
    return <p>Product not found!</p>;
  }
  return (
    <>
   
    <PDetails
      productId={productId}
      img={product?.imgUrl}
      title={product?.title}
      price={product?.price}
    />
    </>
  );
};

export default ProductDetailsPage;