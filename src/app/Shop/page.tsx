"use client";

import Link from "next/link";
import SubFooter from "../component/SubFooter";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import {tproduct } from "../types";
import { shopQuery } from "@/sanity/lib/query";

import Bg from "../../../public/Rectangle 1.png";
import Marbel from "../../../public/Meubel House_Logos-05.png";
import Filter from "../../../public/Vector (4).png";

import { CgMenuGridO } from "react-icons/cg";


export default function ShopData() {
  const [data, setdata] = useState<tproduct[]>([]);
  useEffect(() => {
    async function Fetched() {
      const fetch: tproduct[] = await client.fetch(shopQuery);
      setdata(fetch);
    }
    Fetched();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-[316px]">
        <Image src={Bg} alt="Background Image" layout="fill" objectFit="cover" className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image src={Marbel} alt="Logo" className="mb-4" />
          <h1 className="font-Poppin text-4xl text-black">Shop</h1>
          <h1 className="font-Poppin text-base text-black">Home - <span>Shop</span></h1>
        </div>
      </div>

      {/* Sub Navbar */}
      <div className="w-full bg-[#FAF4F4] hidden md:flex items-center justify-between px-4 py-4 md:px-10">
        <div className="flex items-center gap-4">
          <Image src={Filter} alt="Filter Icon" className="w-6 h-6" />
          <h1 className="font-Poppin text-sm">Filter</h1>
          <CgMenuGridO className="text-lg" />
          <p className="font-Poppin text-sm">Showing 1 to 16 of 32 results</p>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="font-Poppin text-sm">Show</h1>
          <div className="h-10 w-10 bg-white text-gray-600 rounded flex items-center justify-center font-Poppin text-sm">16</div>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="font-Poppin text-sm">Sort by</h1>
          <div className="w-32 h-10 bg-white text-gray-600 flex items-center justify-center font-Poppin text-sm">Default</div>
        </div>
      </div>

      
      <div className="flex flex-wrap gap-6 px-4 md:px-10 justify-center">
        {data.map((elem) => (
          <div key={elem.id} className="flex flex-col gap-4 border border-black p-4 rounded-xl w-full sm:w-60 md:w-72 lg:w-80">
            <Link className="flex flex-col gap-4" href={`Product/${elem.slug}`}>
              <h1 className="text-sm font-semibold text-purple-700">{elem.name}</h1>
              <Image src={elem.image} alt={elem.name} height={300} width={300} className="h-64 w-full object-cover rounded-md hover:p-2" />
              <h1 className="text-base font-medium">Rs-{elem.price}</h1>
              <p className="text-xs font-normal w-full">{elem.description}</p>
            </Link>
          </div>
        ))}
      </div>

      <SubFooter />
    </div>
  );
}
