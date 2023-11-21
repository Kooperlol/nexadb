"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <div className="absolute left-0 top-0 z-50 ease-in duration-300">
      <div
        className={`m-auto flex w-screen justify-between items-center px-8 py-5 text-white ${
          scrollPosition > 0 ? "fixed drop-shadow-md" : "fixed shadow-none"
        }`}
      >
        <Link href="/">
          <Image
            priority
            draggable={false}
            src="/media/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className="hidden text-background sm:flex">
          <li className="p-4 hover:text-black">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-black">
            <Link href="/database">Database</Link>
          </li>
          <li className="p-4 hover:text-black">
            <Link href="/careers">Careers</Link>
          </li>
          <li className="p-4 hover:text-black">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-50">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu color="black" size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden z-40 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden z-40 absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-black">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-black">
              <Link href="/database">Database</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-black">
              <Link href="/careers">Careers</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-black">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
