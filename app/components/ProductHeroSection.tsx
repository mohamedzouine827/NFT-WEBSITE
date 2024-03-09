"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Images from "@/app/assets/skull.jpg";

import Image from "next/image";

export default function ProductHeroSection() {
  return (
    <div className="mt-12 md:mt-8">
      <div className="flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Products</h1>
      </div>
      <div className="mt-12 flex flex-col justify-center items-center gap-12 md:flex-row md:mt-8">
        <BackgroundGradient className="w-full md:w-[24vw] p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={Images.src}
            alt="jordans"
            height="250"
            width="250"
            className="object-contain flex items-center justify-center"
          />
          <p className="text-base sm:text-lg font-bold text-black mt-2 mb-2 dark:text-black">
            El Mundo
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Some Dummy Data because this is,
            Just A Practice Website
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="w-full md:w-[24vw] p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={Images.src}
            alt="jordans"
            height="250"
            width="250"
            className="object-contain flex items-center justify-center"
          />
          <p className="text-base sm:text-lg font-bold text-black mt-2 mb-2 dark:text-black">
            El Mundo
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Some Dummy Data because this is,
            Just A Practice Website
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="w-full md:w-[24vw] p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src={Images.src}
            alt="jordans"
            height="250"
            width="250"
            className="object-contain flex items-center justify-center"
          />
          <p className="text-base sm:text-lg font-bold text-black mt-2 mb-2 dark:text-black">
            El Mundo
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Some Dummy Data because this is,
            Just A Practice Website
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
