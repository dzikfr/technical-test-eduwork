import React from "react";
import SingleProductcard from "./sub-components/SingleProductCard";

const ProductsCard = () => {
  return (
    <div className="">
      <div className="flex w-full flex-col">

        <div className="card rounded-none grid place-items-center pb-10">
          <div className="w=[-50%] text-center">
          <h1 className="font-bold text-4xl">New Coming</h1>
          <p>Explore our lates arrival and discover the newest products</p>
          <p>Stay ahead with fresh picks and trendy additions, find your nest favorite here!</p>
          </div>
        </div>

        <div className="card rounded-none grid place-items-center">
          <SingleProductcard />
        </div>

      </div>
    </div>
  );
};

export default ProductsCard;
