import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import rev1 from "../assests/rev1.jpg";
import rev2 from "../assests/rev2.jpg";
import rev3 from "../assests/rev3.jpg";
import rev4 from "../assests/rev4.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

type Props = {};
function Reviews({}: Props) {
  return (
    <div className="mt-10 ">
      <Carousel showArrows={false} interval={3000} autoPlay={true}  className="">
        <div className="h-[380px]  w-[90%] md:w-1/2 m-auto lg:w-1/3 space-y-4 p-2">
          <FormatQuoteIcon
            className="text-gray-600 "
            style={{ fontSize: "40px" }}
          />
          <p className="text-sm  font-light text-gray-600">
            I recently purchased a laptop from ZingShop and I'm really happy
            with my purchase. The website was easy to use and the checkout
            process was quick and simple. The laptop arrived on time and was
            exactly what I was looking for. I would definitely shop at ZingShop
            again.
          </p>
          <Image
            src={rev2}
            alt="mingma tenzing sherpa's wife"
            width={400}
            height={400}
            className=" max-w-[100px] rounded-full"
          />
          <h2 className="font-semibold text-gray-700">Mingchi</h2>
        </div>

        <div className="h-[380px]  w-[90%] md:w-1/2 m-auto lg:w-1/3 space-y-4 p-2">
          <FormatQuoteIcon
            className="text-gray-600 "
            style={{ fontSize: "40px" }}
          />
          <p className="text-sm  font-light text-gray-600">
            I had a great experience shopping at ZingShop. They have a wide
            selection of products and the prices are really competitive. I
            bought some clothes and they fit perfectly. The shipping was fast
            and everything arrived in good condition. I would recommend ZingShop
            to anyone looking for a great online shopping experience.
          </p>
          <Image
            src={rev1}
            alt="mingma tenzing sherpa's wife"
            width={400}
            height={400}
            className=" max-w-[100px] rounded-full"
          />
          <h2 className="font-semibold text-gray-700">Jhon </h2>
        </div>
        <div className="h-[380px]  w-[90%] md:w-1/2 m-auto lg:w-1/3 space-y-4 p-2">
          <FormatQuoteIcon
            className="text-gray-600 "
            style={{ fontSize: "40px" }}
          />
          <p className="text-sm  font-light text-gray-600">
            I had a problem with one of the products I ordered from ZingShop,
            but their customer service was really helpful and resolved the issue
            quickly. The representative I spoke with was friendly and
            knowledgeable. I appreciated their willingness to help and would
            definitely shop at ZingShop again.
          </p>
          <Image
            src={rev4}
            alt="mingma tenzing sherpa's wife"
            width={400}
            height={400}
            className=" max-w-[100px] rounded-full"
          />
          <h2 className="font-semibold text-gray-700">Sarah </h2>
        </div>
        <div className="h-[380px]  w-[90%] md:w-1/2 m-auto lg:w-1/3 space-y-4 p-2">
          <FormatQuoteIcon
            className="text-gray-600 "
            style={{ fontSize: "40px" }}
          />
          <p className="text-sm  font-light text-gray-600">
            I wasn't sure what to expect when I first visited ZingShop, but I
            was pleasantly surprised. The website is easy to navigate and the
            product descriptions are really detailed. I found exactly what I was
            looking for and the checkout process was a breeze. I received my
            order on time and everything was in perfect condition. I'm really
            happy with my experience and would definitely recommend ZingShop to
            others.
          </p>
          <Image
            src={rev3}
            alt="mingma tenzing sherpa's wife"
            width={400}
            height={400}
            className=" max-w-[100px] rounded-full"
          />
          <h2 className="font-semibold text-gray-700">Sam </h2>
        </div>
      </Carousel>
    </div>
  );
}
export default Reviews;
