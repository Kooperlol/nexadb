"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);
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
            ? "ease-in duration-150 fixed bg-primary-foreground drop-shadow-md"
            : "ease-out duration-150 fixed shadow-none"
        }`}
      >
        <p className="text-2xl font-bold">NexaDB</p>
        <ul className="gap-8 hidden text-background sm:flex items-center">
          <li className="hover:text-purple-950 transition duration-300 transform hover:scale-110">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-purple-950 transition duration-300 transform hover:scale-110">
            <Link href="/database">Database</Link>
          </li>
          <li className="relative">
            <Popover trigger="hover" placement="bottom">
              <PopoverTrigger>
                <Box
                  className="hover:text-purple-950 transition duration-300 transform hover:scale-110"
                  cursor="pointer"
                  color="gray.800"
                  textColor={"white"}
                  transition="color 0.3s, transform 0.3s"
                >
                  Careers
                </Box>
              </PopoverTrigger>
              <PopoverContent
                p={2}
                fontSize="md"
                style={{ width: "min-content" }}
                className="text-center text-black"
                bg="white"
              >
                <PopoverArrow />
                <PopoverBody className="flex flex-col gap-3">
                  <Text className="hover:text-purple-950 transition duration-300 transform hover:scale-110">
                    Why Us
                  </Text>
                  <Text className="hover:text-purple-950 transition duration-300 transform hover:scale-110">
                    Positions
                  </Text>
                  <Text className="hover:text-purple-950 transition duration-300 transform hover:scale-110">
                    Apply
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </li>
          <li className=" hover:text-purple-950 transition duration-300 transform hover:scale-110">
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
              ? "sm:hidden z-40 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-left ease-in duration-300"
              : "sm:hidden z-40 absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-left ease-in duration-300"
          }
        >
          <ul className="flex-col text-4xl gap-5 flex">
            <li className="hover:text-purple-950" onClick={handleNav}>
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-purple-950" onClick={handleNav}>
              <Link href="/database">Database</Link>
            </li>
            <li>
              <p
                onClick={() => {
                  setCareersOpen(!careersOpen);
                }}
                className="hover:text-purple-950 flex flex-row items-center gap-2"
              >
                <span>Careers</span>
                {careersOpen ? (
                  <FaChevronDown size={25} />
                ) : (
                  <FaChevronRight size={25} />
                )}
              </p>
              <ul
                hidden={!careersOpen}
                className="px-5 py-3 flex flex-col gap-2"
              >
                <li className="hover:text-purple-950">Why Us</li>
                <li className="hover:text-purple-950">Positions</li>
                <li className="hover:text-purple-950">Apply</li>
              </ul>
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
