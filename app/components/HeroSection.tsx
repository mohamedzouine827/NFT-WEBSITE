import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../assets/ui/3d-card";
import Images from "@/app/assets/skull.jpg";

export default function HeroSection() {
  return (
    <div className="flex flex-col px-4 justify-between w-full relative">
      <div className=" mt-4 flex flex-col  md:mt-[-2vh] md:flex-row items-center gap-12">
        <div className=" font-poppins text-6xl font-bold text-white md:w-1/2">
        Embark on an Epic Journey: Unleashing the Future
          <div className="mt-8 list-inside tracking-wide justify-center items-center md:mt-12 text-[18px] font-light ">
          Step into a world where the extraordinary meets innovation, all at your fingertips. Our digital product isn&apos;t just a tool , it&apos;s a glimpse into the future of insane possibilities. Join us as we redefine what&apos;s achievable, making the extraordinary accessible to you. Welcome to a future where innovation is in your hands with our cutting-edge digital solution.
          </div>
        </div>
        <div className="md:w-1/2 relative mt-[-2vh]">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-gray-500/[0.1] dark:bg-black dark:border-white border-white w-auto sm:w-[30rem] h-auto  p-6 border relative ">
              <CardItem
                translateZ="50"
                className="text-xl uppercase font-bold text-black dark:text-gray-500 "
              >
                La Meurta Del Mundo
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-black text-sm max-w-sm mt-2 dark:text-gray-500"
              >
                Get Yours Now, And Be A Special One
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={Images}
                  height="1024"
                  width="1024"
                  className="h-60 w-full object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="p"
                  className="px-4 py-2 bg-white text-lg font-bold text-black dark:text-black"
                >
                  330$
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 transition duration-150 ease-in-out bg-black dark:bg-black dark:text-black text-white text-xs font-bold"
                >
                  Buy Now!
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  );
}
