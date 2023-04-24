import axios from "axios";
import Image from "next/image";
import {  useEffect, useState } from "react";
import Product from "./Product";

import { product } from "@/pages";
import Loading from  "../components/Loading"



function PopularProducts({ products }: { products: product[] }) {



  return (
    <div className="mt-10 p-4">
      <h1 className=" md:text-3xl underline underline-offset-8 decoration-zingyellow text-gray-800 font-bold text-xl text-center ">
        Best Rated Products of 2023
      </h1>

      <div className=" mt-10 flex overflow-x-scroll space-x-4 p-4  scrollbar-hide">

        {
          !products? (new Array(4).fill(0).map((_, index) => (<Loading key={index} />))):(products.filter((product) => product.rating.rate >= 4)?.map((item) => (
            <Product key={item.id} item={item} />
          )))
        }

      </div>
      <div  className=" flex justify-center mt-4">
      <button  className=" bg-[#2d3a4b] transition-all ease-linear duration-150  hover:bg-zingyellow text-white p-2 font-semibold py-3 text-sm ">
        View All Shop Items

      </button>

      </div>
    </div>
  );
}
export default PopularProducts;
