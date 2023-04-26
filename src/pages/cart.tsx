import Head from "next/head";
import Nav from "../../components/Nav";
import Image from "next/image";
import cartbg from "../../assests/cart.jpg";
import hero from "../../assests/hero.jpg";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks";
import { data } from "../../data";

type Props = {};
function Cart({}: Props) {

  const cartItems = useAppSelector((state) => state.cart.cartItems)
  console.log(cartItems);
  
  const [quantity, setQuantity]  = useState<number>();
  
  
  console.log(quantity)
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

        <div className="mt-10 p-2 flex max-w-[90%]">
          <div className="bg-[#212529] border-[0.5px] min-w-[100px] ">
            <p className="text-white text-center font-semibold p-2">Items</p>
          </div>
          <div className="bg-[#212529] border-[0.5px] min-w-[70px] ">
            <p className="text-white text-center font-semibold p-2">Price</p>
          </div>
          <div className="bg-[#212529] border-[0.5px] min-w-[90px] ">
            <p className="text-white text-center font-semibold p-2">Qty</p>
          </div>
          <div className="bg-[#212529] border-[0.5px] min-w-[80px] ">
            <p className="text-white text-center font-semibold p-2">Total</p>
          </div>
          <div className="bg-[#212529] border-[0.5px] min-w-[30px] ">
            <p className="text-white text-center font-semibold p-2"></p>
          </div>
        </div>

        {
          data.map((item) => (
            <div  key={item.id} className="max-w-[full]">
            <div className="p-2 flex justify-center items-center">
              <div className="min-w-[100px]">
                <Image
                  src={item.image}
                  alt="product image"
                  width={200}
                  height={50}
                  className="border w-[60px] m-auto"
                />
                <h2 className="text-sm text-center">{item.title}</h2>
              </div>
    
              <div className="min-w-[70px]">
                <p className="font-bold text-center ">${item.price}</p>
              </div>
              <div className="min-w-[90px] ">
                <input
                  type="number"
                  min="0"
                  max="20"
                  
                  defaultValue={item.cartQuantity}
                  onChange={(e) => setQuantity((e.target.valueAsNumber))}
                  className="border w-[90%] text-center "
                />
              </div>
              <div className="min-w-[80px]">
                <p className=" text-center">{item.price * item.cartQuantity }</p>{" "}
              </div> 
              <div className="min-w-[30px] ">
                <XCircleIcon className="w-4 m-auto" />
                
              </div>
    
    
              
            </div>
      
    
    
            </div>
          ))
        }

     

       
      </div>
    </main>
  );
}
export default Cart;
