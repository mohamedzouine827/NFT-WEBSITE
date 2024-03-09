"use client";

import Link from "next/link";


import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleNav = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav className="w-full h-20 bg-white relative">
      <div className="flex justify-between px-4 items-center h-full w-full 2xl:px16">
        <div>
          <Link href="/">
            <span className="text-black font-bold text-xl sm:text-2xl">SPACE </span>
            <span className="text-gray-500 font-bold text-xl sm:text-2xl">VERSE</span>
          </Link>
        </div>
        <div className="relative">
          <ul className="hidden md:flex gap-12 items-center justify-center">
            <Link
              href="/about"
              className="ml-4 uppercase font-bold hover:border-b-4"
            >
              <li>About Us</li>
            </Link>
            <Link
              href="/products"
              className="ml-4 uppercase font-bold  hover:border-b-4"
            >
              <li>Our Products</li>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden cursor-cell pl-24 ease-in duration-500"
        >
          {menuOpened ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
        <div className="hidden md:flex px-4">
          <Button variant="outline" className="bg-black shadow-2xl text-white font-bold" >Log in</Button>
        </div>
      </div>
      <div
        className={`fixed top-0 w-[75%]  md:hidden h-screen bg-[#000000d3] backdrop-blur-sm p-10 ease-in duration-500 overflow-hidden z-[999] ${
          menuOpened ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="flex-col py-4 text-white font-bold uppercase hover:border-b-1">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpened(false)}
                className="py-4 cursor-cell"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpened(false)}
                className="py-4 cursor-cell"
              >
                About Us
              </li>
            </Link>
            <Link href="/products">
              <li
                onClick={() => setMenuOpened(false)}
                className="py-4 cursor-cell"
              >
                Our Products
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
