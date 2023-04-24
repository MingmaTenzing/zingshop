import Head from "next/head"
import Nav from "../../components/Nav"
import { product } from "."
import { useEffect, useState } from "react"
import axios from "axios"
import Product from "../../components/Product"
import Footer from "../../components/Footer"

type Props = {}
function Womensclothing({}: Props) {

    const [womensClothing, setwomensClothing] =  useState<product[]>();

    useEffect(() => {
        async function getwomensClothing() {
            const {data} = await axios.get("https://fakestoreapi.com/products/category/women's%20clothing")
            setwomensClothing(data);

        }

        getwomensClothing();

    }, [])


  return (


    <main>
         <Head>
        <title>Women&apos;s Clothing</title>
        <meta name="ZingShop" content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, electronics and jwelery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header-logo.png" />
      </Head>

      <Nav />

      <div className="mt-10 p-4">


      <h1 className=" md:text-3xl underline underline-offset-8 decoration-zingyellow text-gray-800 font-bold text-xl text-center ">
        Women&apos;s Clothing
      </h1>

      <div className=" flex flex-col  items-center md:flex-row md:flex-wrap md:justify-center mt-10  ">
        {
            womensClothing?.map((item) =>
            <div className="m-4" key={item.id}>
                 <Product item={item} key={item.id} />
                 </div>)
        }
      </div>
      </div>

      <Footer />



      
    </main>
  )
}
export default Womensclothing;