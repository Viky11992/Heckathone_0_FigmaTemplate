"use client";
import React, { useState ,useEffect } from "react";
import Link from "next/link";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineAlignLeft } from "react-icons/ai";

// max-w-[150px] bg-red-500 hidden font-Poppin h-auto  items-center justify-between text-[18px] tracking-[2%] capitalize md:flex md:justify-between md:ml-0 xl:ml-[200px]
function Navbar() {
  const [notclick, clicked] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu")) {
        clicked(false);
      }
    };

    if (notclick) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  },[notclick]);

  return (
    
    <div className="px-4 py-4 flex items-center justify-between md:justify-end text-black bg-[#ffff]  xs:px-4 md:gap-44  ">
      {/* Left side navigation */}
      <div className="w-full max-w-[50%]  py-2 justify-end  flex gap-5 items-center hidden  md:flex md:gap-12 ">
        <Link href="/Home">Home</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/Contact">Contact</Link>
      </div>

      {/* Hamburger menu icon for mobile */}

      <AiOutlineAlignLeft
        onClick={() => clicked(!notclick)}
        className="text-[30px] md:hidden "
      />
      {notclick && (
        <div className="w-1/2 text-lg p-4 bg-[#FBEBB5]  flex flex-col gap-6 bg-opacity-90 z-10 fixed inset-0 top-20">
          <Link className="text-base font-normal " href="/Home">
            Home
          </Link>
          <Link href="/Shop">Shop</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/Contact">Contact</Link>
        </div>
      )
      }

      {/* Right side icons */}
      <div className=" w-full xs:w-[50%] md:max-w-[30%] flex items-center gap-8 justify-end text-2xl ">
        <LiaUserFriendsSolid />
        <IoSearch />
        <FaRegHeart />
        <Link href="/shopping"> <MdOutlineShoppingCart /></Link>
      </div>
    </div>
  );
}

export default Navbar;
