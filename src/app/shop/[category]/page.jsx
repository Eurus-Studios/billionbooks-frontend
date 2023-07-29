"use client";
import React from "react";
import Allproducts from "@/components/Allproducts";
import Categories from "@/components/ShopbyCat";

const CategoryPage = ({ params }) => {
  let category = "";

  if (params && params.category) {
    category = decodeURIComponent(params.category);
  }


  return (
    <div>
    <Categories title={category} />
    <Allproducts category={category} />


    </div>
  )
}

export default CategoryPage