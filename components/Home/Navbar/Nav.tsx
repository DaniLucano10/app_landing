"use client";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed bg-gray-200 ${navBg ? "bg-gray-200 shadow-md" : "fixed"
        } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-xl md:text-3xl font-extrabold cursor-pointer">
            <span className="text-3xl md:text-4xl text-pink-700">L</span>ideraTec
          </h1>
        </Link>

        {/* NavLinks */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/register">
            <button
              className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 cursor-pointer
               hover:bg-blue-900 transition-all duration-200 rounded-full"
            >
              Unirte ahora
            </button>
          </Link>
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
