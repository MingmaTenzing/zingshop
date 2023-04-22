import axios from "axios";
import Image from "next/image";
import { Key, useEffect, useState } from "react";
import Product from "./Product";

type Props = {};

interface product {
  id: any;
  key: any;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: any;
  rating: any;
  count: any;
}

function PopularProducts({}: Props) {
  const [products, setProducts] = useState<product[]>();
  const [popularProducts, setPopularProducts] = useState<any[]>();
  useEffect(() => {
    async function fetchdata() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    }
    fetchdata();
  }, []);

  useEffect(() => {
    setPopularProducts(
      products?.filter((product) => product.rating.rate >= 4)
    );
  }, [products]);

  console.log(products);

  return (
    <div className="mt-10 p-4">
      <h1 className=" md:text-3xl underline underline-offset-8 decoration-zingyellow text-gray-800 font-bold text-xl text-center ">
        Best Rated Products of 2023
      </h1>

      <div className=" mt-10 flex overflow-x-scroll space-x-4 p-4  scrollbar-hide">
        {popularProducts?.map((item: {id: Key}) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default PopularProducts;
