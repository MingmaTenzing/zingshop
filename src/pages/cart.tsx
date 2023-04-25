import Head from "next/head"
import Nav from "../../components/Nav"
import Image from "next/image"
import cartbg from '../../assests/cart.jpg'

type Props = {}
function Cart({}: Props) {
  return (
    <main>
          <Head>
        <title>Shopping Cart</title>
        <meta name="ZingShop" content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, allProducts and jwelery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header-logo.png" />
      </Head>
        

<Nav />

<div>

    <div className=" relative  overflow-hidden w-full  ">
        <Image alt="cart background" src={cartbg} width={1280} height={442} className="w-full brightness-50   h-[120px] md:h-[180px] lg:h-[200px]     object-center object-cover" />
<h1 className="text-white font-bold text-xl md:text-3xl lg:text-4xl absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ">Shopping Cart</h1>
    </div>



</div>


</main>
  )
}
export default Cart