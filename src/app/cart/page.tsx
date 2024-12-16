import React from "react";
import Image from "next/image";
import Bg from "../../../public/Rectangle 1.png";
import Marbel from "../../../public/Meubel House_Logos-05.png";
import Group137 from "../../../public/Group 137.png";
import SubFooter from "../component/SubFooter";
function page() {
  return (
    <div className="xs:w-full md:w-full">
      <Image
        src={Bg}
        alt="Imagepng"
        className=" w-[1440] h-[316px] bg-cover bg-center  absolute xs:w-full "
      />

      <div className="w-[1440] h-[316px] relative flex flex-col mr-[420px] items-center justify-center xs:w-full md:w-full">
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

      <div className="w-[1440px] h-auto  p-[90px] xs:w-full  md:w-full">
        <div className="w-[1240px] h-auto  flex xs:w-full xs:flex-col xs:items-center xs:justify-center xs:gap-20 md:w-full md:gap-0 md:flex-row md:items-start ">
          <div className="w-[817px] h-[216px]  flex flex-col gap-[60px] xs:w-full md:w-full">
            <div className="w-[817px] h-[55px] bg-[#FFF9E5] list-none font-Poppin text-[16px] leading-[24px] flex items-center justify-between px-[120px] xs:w-full xs:p-4 xs:justify-around xs:text-xs md:w-full  md:justify-between md:px-6">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </div>
            <div className=" flex items-center  justify-between xs:w-full xs:flex-col  md:w-full md:flex-row ">
              <Image
                src={Group137}
                alt="Group137"
                className="xs:h-[100px] xs:w-[150px]  "
              />
              <p className="font-Poppin text-[16px] leading-[24px] text-[#9F9F9F]">
                Asgaard sofa
              </p>
              <p className="font-Poppin text-[16px] leading-[24px] text-[#9F9F9F]">
                Rs. 250,000.00
              </p>
              <p className="h-[32px] w-[32px] bg-[#9F9F9F] text-black text-center border border-[#9F9F9F] rounded">
                1
              </p>
              <p className="font-Poppin text-[16px] leading-[24px] text-black">
                Rs. 250,000.00
              </p>
            </div>
          </div>
          <div className="w-[393px] h-[390px] bg-[#FFF9E5] ml-[30px] flex flex-col items-center justify-around xs:mt-10 md:mt-0 ">
            <h1 className="font-Poppin text-[32px] leading-[48px] text-black text-center py-[10px]">
              Cart Totals
            </h1>
            <div className=" flex flex-col gap-[30px] ">
              <div className=" flex items-center justify-around gap-[40px]">
                <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
                  Subtotal
                </h1>
                <h1 className="font-Poppin text-[16px] leading-[24px] text-[#9F9F9F]">
                  Rs. 250,000.00
                </h1>
              </div>
              <div className=" flex items-center justify-around gap-[40px]">
                <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
                  Total
                </h1>
                <h1 className="font-Poppin text-[20px] leading-[30px] text-[#B88E2F]">
                  Rs. 250,000.00
                </h1>
              </div>
            </div>
            <div className="w-[222px] h-[58.59px]  rounded-2xl border border-black font-Poppintext-[20px] leading-[30px]  py-[10px] pl-[60px]  bg-[#FFF9E5]">
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
