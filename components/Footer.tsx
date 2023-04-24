import Image from "next/image";

import logo from "../assests/zingshop-logo.png";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
type Props = {};
function Footer({}: Props) {
  return (
    <div className="bg-[#131313] p-4 py-10 space-y-6 ">

      <div className="md:flex  justify-around">
      <div className="space-y-4">

<div>
  <Image
    src={logo}
    alt="zingshop logo"
    width={392}
    height={108}
    className="grayscale invert w-[140px]"
  />
</div>
<div className="flex space-x-4">
  <MapPinIcon className="w-6  text-footertext" />
  <div className="text-footertext text-sm">
    <p>Street No. 12, Perth, WA</p>
    <p>WA, 6122</p>
  </div>
</div>
<div className="flex space-x-4">
  <PhoneIcon className="w-6  text-footertext" />
  <div className="text-footertext text-sm">
    <p>+042 338 898</p>
    <p>+44 485 49844 </p>
  </div>
</div>
<div className="flex space-x-4">
  <EnvelopeIcon className="w-6  text-footertext" />
  <div className="text-footertext text-sm">
    <p>info@zingshop.com</p>
    <p>contact@zingshop.com </p>
  </div>
</div>

  </div>


{/** LINKS */}

<div className="space-y-3">
<h2 className="text-white font-semibold text-xl">Links</h2>
<div className="flex flex-col space-y-2 ">
<Link href="" className="text-footertext text-sm">Products</Link>
<Link href="" className="text-footertext text-sm">Features</Link>
<Link href="" className="text-footertext text-sm">Blog</Link>
<Link href="" className="text-footertext text-sm">Products</Link>
</div>

</div>

{/* MORE */}
<div className="space-y-3">
<h2 className="text-white font-semibold text-xl">More</h2>
<div className="flex flex-col space-y-2 ">
<Link href="" className="text-footertext text-sm">Products</Link>
<Link href="" className="text-footertext text-sm">Features</Link>
<Link href="" className="text-footertext text-sm">Blog</Link>
<Link href="" className="text-footertext text-sm">Products</Link>
</div>

</div>
{/* Account INFO */}
<div className="space-y-3">
<h2 className="text-white font-semibold text-xl">Account Info</h2>
<div className="flex flex-col space-y-2 ">
<Link href="" className="text-footertext text-sm">Products</Link>
<Link href="" className="text-footertext text-sm">Features</Link>
<Link href="" className="text-footertext text-sm">Blog</Link>
<Link href="" className="text-footertext text-sm">Products</Link>
</div>



</div>



        
      </div>
     

<h2 className="text-footertext text-center font-semibold text-sm  border-t  pt-2 border-footertext ">©ZingShop @ 2023</h2>

    </div>
  );
}
export default Footer;

