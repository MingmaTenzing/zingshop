import Head from "next/head";
import Nav from "../../../components/Nav";
import hero from "../../../assests/hero.jpg";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  BookmarkIcon,
  HandThumbUpIcon,
  MinusIcon,
  PlusIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Footer from "../../../components/Footer";
type Props = {};
function productInfo({}: Props) {
  const [addtoCartNumber, setaddtoCartNumber] = useState<number>(0);
  return (
    <main>
      <Head>
        <title>ZingShop</title>
        <meta
          name="ZingShop"
          content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, electronics and jwelery."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header-logo.png" />
      </Head>

      <Nav />

      <div className="my-10 p-4">
        <div>
          <Image
            src={hero}
            width={663}
            height={879}
            alt="product image"
            className="w-[300px] p-4 border object-contain"
          />
        </div>

        <div className="mt-4 md:mt-0 space-y-4">
          <div className="space-y-2">
            <h1 className="  text-2xl text-gray-800">Rise Skinny Jeans</h1>
            <span className="w-[30px] block  h-[1.5px] bg-gray-700"></span>
          </div>

          <div className="flex">
            <StarIcon className="w-6 text-zingyellow" />
            <StarIcon className="w-6 text-zingyellow" />
            <StarIcon className="w-6 text-zingyellow" />
            <StarIcon className="w-6 text-zingyellow" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">$299</h2>
          </div>

          <div className=" flex  justify-between border-y p-3">
            <div className=" flex items-center space-x-2">
              <BookmarkIcon className="w-6 text-gray-500" />
              <p className="text-gray-500">Men's Clothing</p>
            </div>
            <div className=" flex items-center space-x-2">
              <HandThumbUpIcon className="w-6 text-gray-500" />
              <p className="text-gray-500">223</p>
            </div>
          </div>

          <div>
            <p className="text-gray-700">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday"
            </p>
          </div>

          <div className="flex ">
            <div className="border flex rounded-lg">
              {addtoCartNumber <= 0 ? (
                <MinusIcon className="w-[40px] h-[40px] p-2 bg-slate-200" />
              ) : (
                <MinusIcon
                  onClick={() => setaddtoCartNumber(addtoCartNumber - 1)}
                  className="w-[40px] h-[40px] p-2 bg-slate-200"
                />
              )}

              <p className=" text-gray-700 w-[200px]  h-[40px] p-2 text-center ">
                {addtoCartNumber}
              </p>

              {addtoCartNumber >= 10 ? (
                <PlusIcon className="w-[40px] h-[40px] p-2 bg-slate-200" />
              ) : (
                <PlusIcon
                  onClick={() => setaddtoCartNumber(addtoCartNumber + 1)}
                  className="w-[40px] h-[40px] p-2 bg-slate-200"
                />
              )}
            </div>
          </div>



          <div>
            <button className="uppercase  bg-[#2d3a4b] text-sm text-white font-semibold w-full h-10"> add to cart </button>
          </div>

          <div className=" space-y-3">
            <h2 className="text-lg text-gray-700">Share this item with your Friends</h2>
           
           <div className="space-x-2">
            <FacebookIcon className="text-gray-600" style={{fontSize:"30px"}} />
            <TwitterIcon className="text-gray-600" style={{fontSize:"30px"}} />
            <InstagramIcon className="text-gray-600" style={{fontSize:"30px"}} />
            

           </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
export default productInfo;
