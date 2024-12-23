import React from "react";
import Image from "next/image";
import SubFooter from "../component/SubFooter";

import Bg from "../../../public/Rectangle 1.png";
import Marbel from "../../../public/Meubel House_Logos-05.png";
import Filter from "../../../public/Vector (4).png";

import { CgMenuGridO } from "react-icons/cg";

import Trentan from "../../../public/Trenton modular sofa_3 1.png";
import Granite from "../../../public/Granite dining table with dining chair 1.png";
import Musk from "../../../public/Mask group.png";
import Musk1 from "../../../public/Mask group (1).png";

import grain from "../../../public/Grain coffee table 1 (1).png";
import Kent from "../../../public/Kent coffee table 1.png";
import Mask from "../../../public/Mask group (2).png";
import Reclaim from "../../../public/Reclaimed teak coffee table 1.png";

function page() {
  return (
    <div className="">
      <Image
        src={Bg}
        alt="Imagepng"
        className="w-[1440] h-[316px] bg-cover bg-center   absolute xl:w-[2000px]"
      />

      <div className="w-[1440] h-[316px] relative flex flex-col  items-center justify-center  ">
        
          <Image src={Marbel} alt="Imagepng" className="" />
    
        
          <h1 className="font-Poppin text-[48px] leading-[72px] text-black">
            Shop
          </h1>
       
        
          <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
            Home - <span> Shop</span>
          </h1>
       
      </div>

      {/* sub nev bar */}

      <div className="w-full bg-[#FAF4F4] hidden  md:flex ">
        <div className="flex items-center justify-around ">
          <div className="flex items-center gap-[10px] py-[35px] px-[60px] ">
            <Image src={Filter} alt="Imagepng" className="" />
            <h1 className="font-Poppin">Filter</h1>
            <CgMenuGridO className="text-[24px]" />
            <p className="font-Poppin text-[16px] leading-[24px] md:text-xs lg:base xl:lg">
              Showing 1 to 16 of 32 results
            </p>
          </div>

          <div className="flex gap-[20px] items-center">
            <h1 className="font-Poppin text-[20px] leading-[30px] md:text-base lg:lg xl:xl">
              Show
            </h1>
            <div className="h-[55px] w-[55px] px] bg-[#FFFFFF] text-[#9F9F9F] rounded flex items-center justify-center font-Poppin text-[20px] leading-[30px]">
              16
            </div>
          </div>

          <div className="flex gap-[20px] items-center">
            <h1 className="font-Poppin text-[20px] leading-[30px] text-[#000000] md:text-base lg:lg xl:xl">
              Short by
            </h1>
            <div className="w-[188px] h-[55px] bg-[#FFFFFF] text-[#9F9F9F] font-Poppin text-[20px] leading-[30px] flex items-center justify-center">
              Default
            </div>
          </div>
        </div>
      </div>

      {/* Main page shop */}

      <div className=" px-[30px] py-[60px] ">
        <div className=" flex items-center flex-wrap justify-between  gap-[60px]  xs:flex-col  sm:flex-row sm:flex-wrap md:justify-between">
          <div className="w-[287px] h-[287px]">
            <Image src={Trentan} alt="Table" />
            <div className="w-[194px] flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Trenton modular sofa_3
              </h1>
              <p className="font-[500] text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className="w-[255px] h-[185px]">
            <Image src={Granite} alt="Table" />
            <div className="w-[212px]   flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Granite dining table with dining chair
              </h1>
              <p className="font-[500] text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className="w-[287px] h-[287px] ">
            <Image src={Musk} alt="Table" />
            <div className="w-[212px] flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Outdoor bar table and stool
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className="w-[287px] h-[287px] ">
            <Image src={Musk1} alt="Table" />
            <div className="w-[199px]  flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Plain console with teak mirror
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>

          <div className="w-[287px] h-[287px] ">
            <Image src={grain} alt="Table" />
            <div className="w-[199px]  flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Plain console with teak mirror
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>

          <div className="w-[287px] h-[287px] ">
            <Image src={Kent} alt="Table" />
            <div className="w-[199px]  flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Plain console with teak mirror
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>

          <div className="w-[287px] h-[287px] ">
            <Image src={Mask} alt="Table" className="w-[269px] h-[166px]" />
            <div className="w-[199px]  flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Plain console with teak mirror
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>

          <div className="w-[287px] h-[287px] ">
            <Image src={Reclaim} alt="Table" />
            <div className="w-[199px]  flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Plain console with teak mirror
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-[30px] mt-[30px] xs:w-full md:w-full">
          <div className="w-[60px] h-[60px]  text-black text-center bg-[#FBEBB5] rounded-[10px] py-[20px]">
            1
          </div>
          <div className="w-[60px] h-[60px]  text-black text-center bg-[#FFF9E5] rounded-[10px] py-[20px]">
            2
          </div>
          <div className="w-[60px] h-[60px]  text-black text-center bg-[#FFF9E5] rounded-[10px] py-[20px]">
            3
          </div>
          <div className=" h-[60px] w-[98px] text-black text-center bg-[#FFF9E5] rounded-[10px] py-[20px]">
            Next
          </div>
        </div>
      </div>

      {/* free deleviery */}
      <SubFooter />

      {/* footer */}
    </div>
  );
}

export default page;
