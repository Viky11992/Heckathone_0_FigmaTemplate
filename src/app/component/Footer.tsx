import React from "react";

function Footer() {
  return (
    <div className=" pt-[60px] px-4">
      <div className=" flex items-center  justify-evenly ">
        <div className="w-full text-left max-w-[15%] hidden lg:flex xs:text-[10px] md:text-base">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </div>
        <div className="w-full flex justify-evenly">
          <div className="w-full max-w-[15%] flex flex-col gap-[30px] list-none xs:text-[20px] md:text-base font-[500] text-base text-[#000000]">
            <li className="font-[500] text-base text-[#9F9F9F] xs:text-[10px] md:text-base">
              links
            </li>
            <li className="">
              Home
            </li>
            <li className="">
              shop
            </li>
            <li className=" ">
              About
            </li>
            <li className=" ">
              Contact
            </li>
          </div>
          <div className="w-full max-w-[25%] flex flex-col gap-[20px] list-none font-[500] text-base xs:text-[10px] md:text-base text-[#000000]">
            <li className="font-[500] text-base text-[#9F9F9F] ">
              Help
            </li>
            <li className=" ">
              Payment Options
            </li>
            <li className=" ">
              Payment Options
            </li>
            <li className=" ">
              Privacy Policies
            </li>
          </div>
          <div className="w-full max-w-[25%] flex flex-col justify-start  ">
            <p className=" text-[#9F9F9F]">
              Newsletter
            </p>
            <p className="font-normal text-sm text-[##9F9F9F] underline xs:text-[10px] md:text-base  mt-6">
              Enter Your Email Address{" "}
              
            </p>
            <span className="font-[500] underline text-sm text-[#000000] xs:text-[10px] md:text-base">
                {" "}
                SUBSCRIBE
              </span>
          </div>
        </div>
      </div>
      <p className="font-normal text-base  text-[#000000] xs:text-[10px] md:text-base">
        2022 Meubel House. All rights reverved
      </p>
    </div>
  );
}

export default Footer;
