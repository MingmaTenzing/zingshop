import { HandThumbUpIcon, StarIcon } from "@heroicons/react/24/solid";
import testimg from "../assests/hero.jpg";
import Image from "next/image";
import { Key } from "react";

interface Props {
item:any;
}

function Product({ item }: Props) {
  return (
    <div>
      <div>
        <div className=" relative group w-[280px] h-[280px] border overflow-hidden flex justify-center items-center ">
          <Image
            src={item.image}
            alt="product"
            width={250}
            height={250}
            className=" w-[200px] object-cover p-2 group-hover:scale-105 transition ease-linear duration-200"
          />
          <button className="absolute bg-[#2d3a4b]  hover:bg-zingyellow bottom-0 w-full text-sm h-0 group-hover:h-10 transition-all ease-linear duration-200 text-white">
            Add to Cart
          </button>
        </div>
        <div className="w-[280px]  bg-slate-100 border p-3 space-y-2">
          <h2 className="text-sm font-semibold text-gray-900">
        {item.title}
          </h2>

          <div className="flex justify-between">
            <h3 className="text-sm text-gray-700 ">${item.price}</h3>
            <div className="flex space-x-2">
              <div className="flex text-sm space-x-1 items-center text-gray-600">
                <StarIcon className="w-4 " />
                <span>{item.rating.rate}</span>
              </div>
              <div className="flex text-sm space-x-1 items-center text-gray-600">
                <HandThumbUpIcon className="w-4" />
                <span>{item.rating.count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
