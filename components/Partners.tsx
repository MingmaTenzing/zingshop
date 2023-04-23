import adidas from  "../assests/adidas.png"
import acer from  "../assests/acer.png"
import tommy from "../assests/tommy.png"
import lenovo from "../assests/lenovo.png"
import msi from "../assests/msi.png"
import nike from "../assests/nike.png"
import asus from "../assests/Asus-Logo.png"
import Image from "next/image"
type Props = {};
function Partners({}: Props) {
  return (
    <div className="mt-10 p-4 bg-[#f7f7f7] py-20">
        <div className="space-y-3 p-3">

    <h2 className=" text-center font-bold  text-2xl lg:text-3xl text-gray-700"> No Compromises in Quality</h2>
    <p className=" text-center font-light text-gray-600 "> We are partner with world&apos;s leading brands in clothing and technology</p>
    
            
        </div>
    <div className="flex flex-wrap justify-center mt-4  lg:space-x-20">
        <Image src={adidas} alt='adidas' width={200} height={200} className="w-[60px]  opacity-80  aspect-[3/2] grayscale object-contain invert-0 m-4" />
        <Image src={tommy} alt='adidas' width={200} height={200} className="w-[60px]  opacity-80  aspect-[3/2] grayscale object-contain invert-0 m-4" />
        <Image src={nike} alt='adidas' width={200} height={200} className="w-[60px]  opacity-80  aspect-[3/2] grayscale object-contain invert-0 m-4" />
        <Image src={acer} alt='adidas' width={200} height={200} className="w-[60px]  opacity-80  aspect-[3/2] grayscale object-contain invert-0 m-4" />
        <Image src={lenovo} alt='adidas' width={200} height={200} className="w-[60px]  opacity-80  aspect-[3/2] grayscale object-contain invert-0 m-4" />
        <Image src={msi} alt='adidas' width={200} height={200} className="w-[60px]  opacity-80  aspect-[3/2] grayscale object-contain invert-0 m-4" />
        <Image src={asus} alt='adidas' width={200} height={200} className="w-[60px]  opacity-80  aspect-[3/2] grayscale object-contain invert-0 m-4" />

    </div>
    
    </div> 
    
    
    )
    
}
export default Partners;
