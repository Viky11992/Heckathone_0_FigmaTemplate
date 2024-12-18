import React from "react";
import Link from "next/link";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineAlignLeft } from "react-icons/ai";

function Navbar() {
  return (
    // sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]
    <div className=" w-[1440px]  py-8  flex items-center justify-around   text-black bg-[#ffff] xs:w-full  xs:justify-between xs:px-4 md:w-full   md:flex md:justify-between xl:justify-around ">
      <div className="w-[430px] font-Poppin h-auto flex ml-[450px]  items-center justify-between  leading-[24px] text-[18px] tracking-[2%] capitalize xs:hidden md:flex md:justify-around md:ml-0 lg:justify-around xl:ml-[400px]">
        <Link href="/Home" >home</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/Contact">Contact</Link>
      </div>
      <div className=" ">
        <AiOutlineAlignLeft className="text-[30px]  md:hidden"/>

      </div>
      <div className="w-[247px] flex items-center justify-between text-[25px]  xs:justify-around ">
        <LiaUserFriendsSolid />
        <IoSearch />
        <FaRegHeart />
        <MdOutlineShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
