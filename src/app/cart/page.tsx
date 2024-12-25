import React from "react";
import Image from "next/image";
import Bg from "../../../public/Rectangle 1.png";
import Marbel from "../../../public/Meubel House_Logos-05.png";
import Group137 from "../../../public/Group 137.png";
import SubFooter from "../component/SubFooter";
function page() {
  return (
    <div className="">
      <Image
        src={Bg}
        alt="Imagepng"
        className="w-[1440] h-[316px] bg-cover bg-center absolute xl:w-[2000px]"
      />

      <div className=" w-[1440] h-[316px] relative flex flex-col  items-center justify-center ">
        <div>
          <Image src={Marbel} alt="Imagepng" className="" />
        </div>
        <div className="">
          <h1 className="font-Poppin text-[48px] leading-[72px] text-black">
            Cart
          </h1>
        </div>
        <div>
          <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
            Home - <span> Cart</span>
          </h1>
        </div>
      </div>

      <div className="mt-[30px] px-[20px] my-5 ">
        <div className=" xs:flex-col xs:items-center xs:justify-center xs:gap-20  md:gap-0 md:flex-row md:items-start xl:flex xl:justify-evenly lg:px-6">
          <div className="  flex flex-col gap-[60px]  ">
            <div className=" bg-[#FFF9E5] list-none font-Poppin text-base flex items-center justify-between  xs:p-4 xs:justify-between xs:text-xs   md:justify-between xl:justify-around md:px-6">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </div>
            <div className="w-full  flex items-center  justify-between gap-7 flex-col  md:flex-row  ">
              <Image
                src={Group137}
                alt="Group137"
                className=""
              />
              <p className="font-Poppin text-base text-[#9F9F9F] xs:text-sm md:text-base">
                Asgaard sofa
              </p>
              <p className="font-Poppin text-base text-[#9F9F9F] xs:text-sm md:text-base">
                Rs. 250,000.00
              </p>
              <p className=" bg-[#9F9F9F] text-black text-center border border-[#9F9F9F] rounded xs:text-sm md:text-base">
                1
              </p>
              <p className="font-Poppin text-base text-black xs:text-sm md:text-base">
                Rs. 250,000.00
              </p>
            </div>
          </div>
          <div className=" bg-[#FFF9E5] ml-[30px] flex flex-col gap-[30px] py-6 px-4 items-center justify-around">
            <h1 className="font-Poppin text-2xl text-black text-center py-[10px] md:text-2xl lg:text-2xl">
              Cart Totals
            </h1>
            <div className=" flex flex-col gap-[30px] ">
              <div className=" flex items-center justify-around gap-[40px]">
                <h1 className="font-Poppin text-base text-black md:text-xs lg:text-2xl">
                  Subtotal
                </h1>
                <h1 className="font-Poppin text-base text-[#9F9F9F] md:text-xs lg:text-2xl">
                  Rs. 250,000.00
                </h1>
              </div>
              <div className=" flex items-center justify-around gap-[40px]">
                <h1 className="font-Poppin text-base text-black md:text-xs lg:text-2xl">
                  Total
                </h1>
                <h1 className="font-Poppin text-xl text-[#B88E2F] md:text-base lg:text-3xl">
                  Rs. 250,000.00
                </h1>
              </div>
            </div>
            <div className="text-center rounded-2xl border border-black font-Poppin text-[20px] leading-[30px]  py-[10px] px-[30px]  bg-[#FFF9E5]">
              Check Out
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
}

export default page;
