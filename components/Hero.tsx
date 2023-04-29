import Image from "next/image"
import model from "../assests/model.png"

type Props = {}
function Hero({}: Props) {
  return (
    <div className=" relative h-screen md:h-[70vh] bg-[#f1eff4]   z-[20]  ">
        <div>
            <div className="space-y-6 pt-20 md:pt-40 z-10 p-10 lg:px-20  ">
                <h2 className=" font-semibold text-3xl  text-gray-700">$299.99</h2>
                <h2 className=" font-light text-3xl text-gray-600">Summer/Winter 2023</h2>
                <h1 className="font-bold text-5xl text-gray-800 md:text-zingyellow ">All of the Best Collections</h1>
           
           <button className="bg-zingyellow  p-4 text-gray-700 font-semibold">Shop Now</button>
            </div>
          <Image src={model} alt="model" width={3184} height={4076} className="w-[600px] lg:w-[370px] hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   lg:left-[900px]  object-cover -z-10 transform -scale-x-100 " />
            
        </div>
    </div>
  )
}
export default Hero