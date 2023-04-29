import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import Head from "next/head";

type Props = {};
function success({}: Props) {
  const router = useRouter();
  return (
    <div className="">
         <Head>
        <title>Success</title>
        <meta name="ZingShop" content="ZingShop is a e-commerece site where you can buy mens clothing, womens clothing, allProducts and jwelery." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/zingshop-header-logo.png" />
      </Head>
      <Nav />
      <div className="flex justify-center flex-col  space-y-8 items-center h-[80vh]">
        
        <div className="space-y-3 flex flex-col items-center">
            
        <h1 className="lg:text-4xl  text-2xl font-bold text-gray-700">
          Congratulations!{" "}
        </h1>{" "}
        <h1 className="text-gray-600">Your purhcase is succesful</h1>
        </div>
        <button
          onClick={() => router.push("/allproducts")}
          className="  bg-zingyellow px-4 py-3 text-gray-600"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default success;
