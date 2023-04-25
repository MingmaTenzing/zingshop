import Head from "next/head";
import Nav from "../../../components/Nav";
import hero from "../../../assests/hero.jpg";
import logo from "../../../assests/zingshop-logo.png";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import {
  BookmarkIcon,
  HandThumbUpIcon,
  MinusIcon,
  PlusIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { product } from "..";
import { useSelector, useDispatch } from 'react-redux'
import { additemtoCart, removeitemfromCart } from "../../../slices/cartSlice";

type Props = {};
function ProductInfo({}: Props) {
  const [addtoCartNumber, setaddtoCartNumber] = useState<number>(0);
  const [itemInfo, setitemInfo] = useState<product>();
  const router = useRouter();
  const itemId = router.query.productid;
  const rating = Math.floor(itemInfo?.rating.rate);
const dispatch =useDispatch();

  useEffect(() => {
    async function fetchItemInfo() {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${itemId}`
      );
      setitemInfo(data);
    }

    if (router.isReady) {
      fetchItemInfo();
    }
  }, [router.isReady]);

  return (
    <main>
      <Head>
        <title>{itemInfo?.title}</title>
        <meta
          name="ZingShop"
          content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, electronics and jwelery."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header-logo.png" />
      </Head>

      <Nav />

      <div  className="my-10 p-4  md:flex md:justify-center md:space-x-8">
        <div className="flex justify-center">
          <Image
            src={itemInfo?.image || logo}
            width={663}
            height={879}
            alt="product image"
            className="w-[300px] md:w-[300px]  p-4 border object-contain"
          />
        </div>

        <div className="mt-4 md:w-1/2 lg:w-1/3 md:mt-0 space-y-5">
          <div className="space-y-2">
            <h1 className="  text-2xl text-gray-800">{itemInfo?.title}</h1>
            <span className="w-[30px] block  h-[1.5px] bg-gray-700"></span>
          </div>

          <div className="flex">
            {rating &&
              new Array(rating)
                .fill(0)
                .map((_, index) => <StarIcon className=" text-zingyellow"  key={index}/>)}
            {Number.isInteger(itemInfo?.rating.rate) ? (
              <></>
            ) : (
              <>
                {" "}
                <StarHalfIcon className=" text-zingyellow" />{" "}
              </>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              ${itemInfo?.price}
            </h2>
          </div>

          <div className=" flex  justify-between border-y p-3">
            <div className=" flex items-center space-x-2">
              <BookmarkIcon className="w-6 text-gray-500" />
              <p className="text-gray-500 uppercase text-sm">
                {itemInfo?.category}
              </p>
            </div>
            <div className=" flex items-center space-x-2">
              <HandThumbUpIcon className="w-6 text-gray-500" />
              <p className="text-gray-500 text-sm">{itemInfo?.rating.count}</p>
            </div>
          </div>

          <div>
            <p className="text-gray-700">{itemInfo?.description}</p>
          </div>

          <div className="flex justify-center">
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
            {
              itemInfo &&   <button onClick={() => dispatch(additemtoCart(itemInfo))} className="uppercase  bg-[#2d3a4b] text-sm text-white font-semibold w-full h-10">
              {" "}
              add to cart{" "}
            </button>
            }
          
          </div>

          <div className=" space-y-3">
            <h2 className="text-lg text-gray-700">
              Share this item with your Friends
            </h2>

            <div className="space-x-2">
             <FacebookIcon
                className="text-gray-600"
                style={{ fontSize: "30px" }}
              />
          
             
              <TwitterIcon
                className="text-gray-600"
                style={{ fontSize: "30px" }}
              />
              <InstagramIcon
                className="text-gray-600"
                style={{ fontSize: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
export default ProductInfo;
