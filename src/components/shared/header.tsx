"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
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
          scrollPosition > 0
            ? "fixed bg-primary-foreground drop-shadow-md"
            : "fixed shadow-none"
        }`}
      >
        <Link href="/" className="text-2xl font-bold">
          NexaDB
        </Link>
        <ul className="gap-8 hidden text-background sm:flex items-center">
          <li className="hover:text-purple-950">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-purple-950">
            <Link href="/database">Database</Link>
          </li>
          <li className=" hover:text-purple-950">
            <Link href="/careers">Careers</Link>
          </li>
          <li className=" hover:text-purple-950">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-50">
          {nav ? (
            <AiOutlineClose color="white" size={20} />
          ) : (
            <AiOutlineMenu color="white" size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden z-40 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-left ease-in duration-300"
              : "sm:hidden z-40 absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-left ease-in duration-300"
          }
        >
          <ul className="flex-col text-4xl gap-5 flex">
            <li className="hover:text-purple-950" onClick={handleNav}>
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-purple-950" onClick={handleNav}>
              <Link href="/database">Database</Link>
            </li>
            <li className="hover:text-purple-950" onClick={handleNav}>
              <Link href="/careers">Careers</Link>
            </li>
            <li className="hover:text-purple-950" onClick={handleNav}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
