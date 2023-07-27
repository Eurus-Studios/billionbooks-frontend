"use client";
import React from "react";
import Allproducts from "@/components/Allproducts";
import Categories from "@/components/ShopbyCat";

const CategoryPage = ({params}) => {
    let {category}=params;
    category=decodeURIComponent(category)
  return (
    <div>
    <Categories title={category} />
    <Allproducts category={category} />


    </div>
  )
}

export default CategoryPage