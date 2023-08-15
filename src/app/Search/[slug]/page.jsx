"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Wrapper from "@/components/Wrapper";
import Allproducts from "@/components/Allproducts";

const Page = ({ params }) => {
  const { slug } = params;
  const searchSlug=decodeURI(slug)

  if (!searchSlug) {
    return <h1>NO URI FOUND</h1>;
  }

  return (
    <>
      <div className="flex justify-center bg-black">
        <h1 className="text-white my-20 text-center font-bold text-6xl">
          Search result for: {searchSlug}
        </h1>
      </div>
      <Wrapper>
      <Allproducts category={searchSlug} />
      </Wrapper>
    </>
  );
};

export default Page;
