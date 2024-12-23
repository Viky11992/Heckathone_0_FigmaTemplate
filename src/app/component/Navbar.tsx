import React from "react";
import Link from "next/link";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineAlignLeft } from "react-icons/ai";
// max-w-[150px] bg-red-500 hidden font-Poppin h-auto  items-center justify-between text-[18px] tracking-[2%] capitalize md:flex md:justify-between md:ml-0 xl:ml-[200px]
function Navbar() {
  return (
    <div className="w-full  bg-green-500 py-4 flex items-center justify-between md:justify-end text-black bg-[#ffff]  xs:px-4 md:gap-44  ">
      {/* Left side navigation */}
      <div className="w-full max-w-[50%]  bg-red-600 py-2 justify-end  flex gap-5 items-center xs:hidden md:flex md:gap-12 ">
        <Link href="/Home">Home</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/Contact">Contact</Link>
      </div>

      {/* Hamburger menu icon for mobile */}
      
        <AiOutlineAlignLeft className="text-[30px] md:hidden " />
     

      {/* Right side icons */}
      <div className=" w-full xs:w-[50%] md:max-w-[30%] flex items-center gap-8 justify-end text-2xl ">
        <LiaUserFriendsSolid />
        <IoSearch />
        <FaRegHeart />
        <MdOutlineShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
