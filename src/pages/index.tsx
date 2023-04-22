import Image from 'next/image'
import Nav from '../../components/Nav'
import Head from 'next/head'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import PopularProducts from '../../components/PopularProducts'
import { useEffect, useState } from 'react'
import  axios from "axios"


export default function Home() {
 


  return (
    <main>
      <Head>
        <title>ZingShop</title>
        <meta name="ZingShop" content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, electronics and jwelery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header.png" />
      </Head>
        <Nav />
        <Hero/>
        <Categories />
        <PopularProducts />
    </main>
  )
}
