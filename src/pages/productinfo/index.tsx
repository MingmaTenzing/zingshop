import Head from "next/head"

type Props = {}
function index({}: Props) {
  return (
    <div>
         <Head>
        <title>ZingShop</title>
        <meta name="ZingShop" content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, electronics and jwelery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header-logo.png" />
      </Head>
    </div>
  )
}
export default index