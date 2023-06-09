import Image from 'next/image'
import Nav from '../../components/Nav'
import Head from 'next/head'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import PopularProducts from '../../components/PopularProducts'
import { useEffect, useState } from 'react'
import  axios from "axios"
import Partners from '../../components/Partners'
import BudgetProducts from '../../components/BudgetProducts'
import Newsletter from '../../components/Newsletter'
import Reviews from '../../components/Reviews'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
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
  cartQuantity: number;
  itemPrice: number;
  

}




export default function Home() {

  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    async function fetchdata() {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      
     
      setProducts(data);
    }
  
    fetchdata();
  }, []);




  return (
    <main>
      <Head>
        <title>ZingShop</title>
        <meta name="ZingShop" content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, electronics and jwelery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header-logo.png" />
      </Head>
        <Nav />
        <Hero/>
        <Categories />
        <PopularProducts products={products}  />
        <Partners />
        <BudgetProducts items={products} />
        <Newsletter />
        <Reviews/>
        <Footer />
    </main>
  )
}
