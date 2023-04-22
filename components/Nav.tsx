import Image from "next/image"
import logo from "../assests/zingshop-logo.png"
import { BeakerIcon } from '@heroicons/react/24/solid'


type Props = {}
function Nav({}: Props) {
  return (
    <div>
        <Image src={logo} height={108} width={392} alt="zingshop logo" className=" w-[180px] object-cover" />

    </div>
  )
}
export default Nav