"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function AdminHeader() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="justify-between m-0 flex px-6 py-3 items-center text-white bg-main-foreground drop-shadow-md">
      <Link href="/admin/applications" className="text-2xl font-bold">
        NexaDB
      </Link>
      <ul className="gap-8 hidden text-background sm:flex m-0">
        <li className=" hover:text-purple-950">
          <Link href="/admin/applications">Applications</Link>
        </li>
        <li className=" hover:text-purple-950">
          <Link href="/admin/positions">Positions</Link>
        </li>
        <li className=" hover:text-purple-950">
          <Link href="/admin/inquiries">Inquiries</Link>
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
            ? "sm:hidden z-40 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-main text-left ease-in duration-300"
            : "sm:hidden z-40 absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-main text-left ease-in duration-300"
        }
      >
        <ul className="flex-col text-4xl gap-5 flex">
          <li className="hover:text-purple-950" onClick={handleNav}>
            <Link href="/admin/applications">Applications</Link>
          </li>
          <li className="hover:text-purple-950" onClick={handleNav}>
            <Link href="/admin/positions">Positions</Link>
          </li>
          <li className="hover:text-purple-950" onClick={handleNav}>
            <Link href="/admin/inquiries">Inquiries</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
