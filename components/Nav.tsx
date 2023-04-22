import Image from "next/image"
import logo from "../assests/zingshop-logo.png"
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from "next/link"


type Props = {}
function Nav({}: Props) {
  return (
    <div className="p-4 shadow-lg">
        <div className="md:hidden">


        <div className="flex justify-center">
        <Image src={logo} height={108} width={392} alt="zingshop logo" className=" w-[180px] object-cover" />

        </div>
        <div className="flex justify-between mt-4">


        <div className="flex space-x-2">
        <UserIcon className="w-8 border p-1 rounded-full border-gray-600" />
        <ShoppingCartIcon className="w-8 border p-1 rounded-full border-gray-600" />
        <MagnifyingGlassIcon className="w-8 border p-1 rounded-full border-gray-600" />
        
            
        </div>
        <div>
            <Bars3Icon className="w-8 border p-1 rounded-full border-gray-600"/>
        </div>
        </div>
        </div>

        <div className="hidden md:flex md:items-center md:justify-between lg:px-10">
        <div className="">
            <Bars3Icon className="w-8 border p-1 rounded-full border-gray-600  lg:hidden"/>
            <Image src={logo} height={108} width={392} alt="zingshop logo" className=" w-[180px] object-cover hidden lg:flex" />

        </div>
        <div>
        <Image src={logo} height={108} width={392} alt="zingshop logo" className=" w-[180px] object-cover lg:hidden" />
        <div className=" hidden lg:flex space-x-8 ">
            <div  className=" group flex flex-col items-center">
                
            <Link href="" className=" text-sm uppercase">home</Link>
            <span className="block w-0   group-hover:w-full transition-all ease-linear duration-200 bg-zingyellow h-0.5">
                
            </span>
            </div>
            <div  className=" group flex flex-col items-center">
                
            <Link href="" className=" text-sm uppercase">mens </Link>
            <span className="block w-0   group-hover:w-full transition-all ease-linear duration-200 bg-zingyellow h-0.5">
                
            </span>
            </div>
            <div  className=" group flex flex-col items-center">
                
            <Link href="" className=" text-sm uppercase">womens</Link>
            <span className="block w-0   group-hover:w-full transition-all ease-linear duration-200 bg-zingyellow h-0.5">
                
            </span>
            </div>
            <div  className=" group flex flex-col items-center">
                
            <Link href="" className=" text-sm uppercase">electronics</Link>
            <span className="block w-0   group-hover:w-full transition-all ease-linear duration-200 bg-zingyellow h-0.5">
                
            </span>
            </div>
            <div  className=" group flex flex-col items-center">
                
            <Link href="" className=" text-sm uppercase">Jwelery</Link>
            <span className="block w-0   group-hover:w-full transition-all ease-linear duration-200 bg-zingyellow h-0.5">
                
            </span>
            </div>
           
        </div>

            
        </div>
          <div className="flex space-x-2">
        <UserIcon className="w-8 border p-1 rounded-full border-gray-600" />
        <ShoppingCartIcon className="w-8 border p-1 rounded-full border-gray-600" />
        <MagnifyingGlassIcon className="w-8 border p-1 rounded-full border-gray-600" />
        
            
        </div>
        </div>
    </div>
  )
}
export default Nav