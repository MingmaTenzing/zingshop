import Image from "next/image"
import test from "../assests/hero.jpg"
import womensclothing from "../assests/womens-clothing.jpg"
import electronics from "../assests/electronics.jpg"
import jewelery from "../assests/jewelery.jpg"
type Props = {}
function Categories({}: Props) {

    

  return (
    <div className="mt-10 p-4">
        <h1 className=" font-bold text-2xl md:text-3xl underline underline-offset-8 decoration-zingyellow text-center">Categories </h1>

        <div className="flex flex-col md:flex-row md:flex-wrap md:space-y-0 md:justify-center items-center space-y-6 mt-8">

        <div className="w-[300px] md:m-4 group relative h-[200px] border rounded-lg overflow-hidden flex items-center justify-center ">
            <Image src={test} alt="categories" width={200} height={200} className="w-[150px] object-cover" />
           
            <div className="w-full h-full absolute top-0 flex justify-center items-center left-0 bg-black bg-opacity-10 hover:bg-opacity-80  transition-all ease-linear duration-100 ">
                <h2 className="text-white font-semibold ">Mens Clothing</h2>
            </div>
            <button className=" h-0 group-hover:h-10 transition-all ease-in duration-100 absolute bottom-0 bg-[#2d3a4b] w-full text-white  text-sm hover:bg-zingyellow">Shop Now</button>
        </div>
        <div className="w-[300px] md:m-4 group relative h-[200px] border rounded-lg overflow-hidden flex items-center justify-center ">
            <Image src={womensclothing} alt="categories" width={200} height={200} className="w-[150px] object-cover" />
           
            <div className="w-full h-full absolute top-0 flex justify-center items-center left-0 bg-black bg-opacity-10 hover:bg-opacity-80  transition-all ease-linear duration-100 ">
                <h2 className="text-white font-semibold ">Womens Clothing</h2>
            </div>
            <button className=" h-0 group-hover:h-10 transition-all ease-in duration-100 absolute bottom-0 bg-[#2d3a4b] w-full text-white  text-sm hover:bg-zingyellow">Shop Now</button>
        </div>
        <div className="w-[300px] md:m-4 group relative h-[200px] border rounded-lg overflow-hidden flex items-center justify-center ">
            <Image src={electronics} alt="categories" width={200} height={200} className="w-[150px] object-cover" />
           
            <div className="w-full h-full absolute top-0 flex justify-center items-center left-0 bg-black bg-opacity-10 hover:bg-opacity-80  transition-all ease-linear duration-100 ">
                <h2 className="text-white font-semibold "> Electronics</h2>
            </div>
            <button className=" h-0 group-hover:h-10 transition-all ease-in duration-100 absolute bottom-0 bg-[#2d3a4b] w-full text-white  text-sm hover:bg-zingyellow">Shop Now</button>
        </div>
        <div className="w-[300px] md:m-4 group relative h-[200px] border rounded-lg overflow-hidden flex items-center justify-center ">
            <Image src={jewelery} alt="categories" width={200} height={200} className="w-[150px] object-cover" />
           
            <div className="w-full h-full absolute top-0 flex justify-center items-center left-0 bg-black bg-opacity-10 hover:bg-opacity-80  transition-all ease-linear duration-100 ">
                <h2 className="text-white font-semibold ">Jewelery</h2>
            </div>
            <button className=" h-0 group-hover:h-10 transition-all ease-in duration-100 absolute bottom-0 bg-[#2d3a4b] w-full text-white  text-sm hover:bg-zingyellow">Shop Now</button>
        </div>
    



        </div>

        
      
        </div>
  )
}
export default Categories