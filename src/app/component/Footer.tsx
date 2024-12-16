import React from "react";

function Footer() {
  return (
    <div className="w-[1440px] pt-[60px]  px-[60px] xs:w-full ">
      <div className="w-[1131px] h-[312px] flex items-center  justify-around gap-[90px] xs:w-full xs:gap-0">
        <div className="w-[285px] h-[72px] xs:hidden lg:flex">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </div>
        <div className="w-[710px] h-[312px] flex  justify-between gap-[120px] xs:w-full">
          <div className="w-[68px] h-[312px] flex flex-col gap-[30px] list-none">
            <li className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F]">
              links
            </li>
            <li className="font-[500] text-[16px] leading-[24px] text-[#000000]">
              Home
            </li>
            <li className="font-[500] text-[16px] leading-[24px] text-[#000000]">
              shop
            </li>
            <li className="font-[500] text-[16px] leading-[24px] text-[#000000]">
              About
            </li>
            <li className="font-[500] text-[16px] leading-[24px] text-[#000000]">
              Contact
            </li>
          </div>
          <div className="w-[140px] h-[242px] flex flex-col gap-[30px] list-none">
            <li className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F]">
              Help
            </li>
            <li className="font-[500] text-[16px] leading-[24px] text-[#000000]">
              Payment Options
            </li>
            <li className="font-[500] text-[16px] leading-[24px] text-[#000000]">
              Payment Options
            </li>
            <li className="font-[500] text-[16px] leading-[24px] text-[#000000]">
              Privacy Policies
            </li>
          </div>
          <div className="w-[286px] h-[101px] flex flex-col justify-between gap-[10px] ">
            <p className="font-[500] text-[16px] leading-[24px] text-[#9F9F9F]">
              Newsletter
            </p>
            <p className="font-[400] text-[14px] leading-[21px] text-[##9F9F9F] underline">
              Enter Your Email Address{" "}
              <span className="font-[500] underline text-[14px] leading-[21px] text-[#000000]">
                {" "}
                SUBSCRIBE
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="font-[400] text-[16px] leading-[24px] text-[#000000]">
        2022 Meubel House. All rights reverved
      </p>
    </div>
  );
}

export default Footer;
