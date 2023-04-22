import axios from "axios";
import Image from "next/image";
import {  useEffect, useState } from "react";
import Product from "./Product";

 export interface product{
  rating: any;
  rate:number;
  count: number;
  price: number;
  description: string;
  category: string;
  title: string;
  id: number;
  image: string;
  

}

function PopularProducts() {
  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    async function fetchdata() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    }
    fetchdata();
  }, []);



  console.log(products);

  return (
    <div className="mt-10 p-4">
      <h1 className=" md:text-3xl underline underline-offset-8 decoration-zingyellow text-gray-800 font-bold text-xl text-center ">
        Best Rated Products of 2023
      </h1>

      <div className=" mt-10 flex overflow-x-scroll space-x-4 p-4  scrollbar-hide">
        { products?.filter((product) => product.rating.rate >= 4)?.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default PopularProducts;
