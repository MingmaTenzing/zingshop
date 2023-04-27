import Head from "next/head";
import Nav from "../../components/Nav";
import Image from "next/image";
import cartbg from "../../assests/cart.jpg";
import hero from "../../assests/hero.jpg";
import {
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
  MinusIcon,
  PlusIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { data } from "../../data";
import {
  additemtoCart,
  carSlice,
  decreaseitemfromCart,
  removeitemfromCart,
} from "../../slices/cartSlice";
import Footer from "../../components/Footer";

type Props = {};
function Cart({}: Props) {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <main>
      <Head>
        <title>Shopping Cart</title>
        <meta
          name="ZingShop"
          content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, allProducts and jwelery."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header-logo.png" />
      </Head>

      <Nav />

      <div>
        <div className=" relative  overflow-hidden w-full  ">
          <Image
            alt="cart background"
            src={cartbg}
            width={1280}
            height={442}
            className="w-full brightness-50   h-[120px] md:h-[180px] lg:h-[200px]     object-center object-cover"
          />
          <h1 className="text-white text-center font-semibold text-xl md:text-3xl lg:text-4xl absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ">
            Shopping Cart
          </h1>
        </div>

        <div className="mt-10 p-2 flex justify-center ">
          <div className="bg-[#212529] border-[0.5px] min-w-[100px] md:w-[200px] lg:w-[300px]  ">
            <p className="text-white text-center font-semibold p-2">Items</p>
          </div>
          <div className="bg-[#212529] border-[0.5px] min-w-[70px] md:w-[150px] lg:w-[200px] ">
            <p className="text-white text-center font-semibold p-2">Price</p>
          </div>
          <div className="bg-[#212529] border-[0.5px] min-w-[90px] md:w-[150px] lg:w-[200px]">
            <p className="text-white text-center font-semibold p-2">Qty</p>
          </div>
          <div className="bg-[#212529] border-[0.5px] min-w-[80px] md:w-[200px] lg:w-[300px]">
            <p className="text-white text-center font-semibold p-2">Total</p>
          </div>
          <div className="bg-[#212529] border-[0.5px] min-w-[30px] md:w-[100px] lg:w-[200px]">
            <p className="text-white text-center font-semibold p-2"></p>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center space-y-4">
          {data.map((item) => (
            <div key={item.id} className="max-w-[full]">
              <div className="p-2 flex justify-center items-center">
                <div className="min-w-[100px] md:w-[200px] lg:w-[300px] flex justify-center flex-col items-center">
                  <Image
                    src={item.image}
                    alt="product image"
                    width={200}
                    height={50}
                    className="border w-[60px] md:w-[100px] m-auto"
                  />
                  <h2 className="text-sm text-center md:text-base md:text-gray-700">
                    {item.title}
                  </h2>
                </div>

                <div className="min-w-[70px] md:w-[150px] lg:w-[200px] flex justify-center">
                  <p className="font-bold text-center text-gray-800 md:text-lg">
                    ${item.price}
                  </p>
                </div>
                <div className="min-w-[90px] md:w-[150px] lg:w-[200px] flex justify-center ">
                  <div className="flex items-center space-x-2 border">
                    <p className="p-2 text-gray-700">{item.cartQuantity}</p>
                    <div className="flex flex-col space-y-1">
                      <button onClick={() => dispatch(additemtoCart(item))}>
                        <ArrowSmallUpIcon className="w-6 p-1 bg-slate-300 text-gray-800" />
                      </button>
                      <button
                        onClick={() => dispatch(decreaseitemfromCart(item))}
                      >
                        <ArrowSmallDownIcon className="w-6 p-1 bg-slate-300 text-gray-800" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="min-w-[80px] md:w-[200px] lg:w-[300px] flex justify-center">
                  <p className=" text-center font-semibold text-gray-800 md:text-lg">
                    ${(item.price * item.cartQuantity).toFixed(2)}
                  </p>{" "}
                </div>
                <div className="min-w-[30px] md:w-[100px] lg:w-[200px] flex justify-center ">
                  <button onClick={() => dispatch(removeitemfromCart(item))}>
                    <XCircleIcon className="w-6 m-auto text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:flex md:space-x-10 bg-[#eeeeee] md:justify-center lg:py-20 mt-10   ">
        {/** discount CODE */}

        <div className="mt-10 md:mt-0 lg:w-[500px]">
          <div className=" py-10 p-4">
            <h2 className=" font-semibold text-xl md:text-2xl text-gray-700  underline underline-offset-8 decoration-zingyellow ">
              Discount Code
            </h2>

            <div className=" bg-gray-300  h-[100px] lg:h-[80px] md:w-[300px] lg:w-[400px] flex justify-center items-center p-2 mt-8">
              <input
                className="text-sm h-10 p-2 outline-none uppercase lg:w-[250px]"
                type="text"
                placeholder="Code"
              ></input>
              <button className="bg-[#2d3a4b] uppercase text-white h-10 p-2 font-semibold text-sm">
                Apply Code
              </button>
            </div>
            <div className=" mt-5 ">
            <button className="uppercase  font-semibold p-3 text-gray-700 bg-gray-300">
              Continue Shopping
            </button>
          </div>
          </div>

          
        </div>

        {/** GRAND TOTAL */}
        <div className=" p-4   py-10">
          <h2 className=" md:text-2xl font-semibold text-xl text-gray-700  underline underline-offset-8 decoration-zingyellow ">
            Grand Total
          </h2>
          <div className=" bg-[#FFFFFF] border-2 border-[#2d3a4b] lg:w-[500px] mt-8 p-4 lg:p-6">
            <div className="space-y-4">
              <div className="flex justify-between pb-2  border-b-[0.5px] text-gray-600 border-gray-400">
                <h3 className="font-light">Subtotal</h3>
                <p>$3000</p>
              </div>

              <div className="flex justify-between pb-2  border-b-[0.5px] text-gray-600 border-gray-400">
                <h3 className="font-light">Tax</h3>
                <p>$100</p>
              </div>
              <div className="flex justify-between pb-2  ">
                <h3 className="font-bold text-gray-700 uppercase">
                  Total Cost
                </h3>
                <p className="font-bold text-gray-700 uppercase">$100</p>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button className="uppercase bg-[#2d3a4b] text-white p-4 font-semibold px-8">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </main>
  );
}
export default Cart;
