"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Wrapper from "@/components/Wrapper";
import Allproducts from "@/components/Allproducts";

const Page = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center bg-black">
        <h1 className="text-white my-20 text-center font-bold text-6xl">
          Search result for: {slug}
        </h1>
      </div>
      <Wrapper>
      <Allproducts category={slug} />
      </Wrapper>
    </>
  );
};

export default Page;
