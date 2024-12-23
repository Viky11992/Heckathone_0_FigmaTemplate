import React from "react";
import Image from "next/image";
import Bg from "../../../public/Rectangle 1.png";
import Marbel from "../../../public/Meubel House_Logos-05.png";
import SubFooter from "../component/SubFooter";
import Bsx from "../../../public/bxs_phone.png";
import Vector5 from "../../../public/Vector (5).png";
import Clock from "../../../public/bi_clock-fill.png";

function page() {
  return (
    <div className="">
      <Image
        src={Bg}
        alt="Imagepng"
        className=" h-[316px] bg-cover bg-center absolute xl:w-[2000px]"
      />

      <div className="w-[1440] h-[316px] relative flex flex-col  items-center justify-center ">
        <div>
          <Image src={Marbel} alt="Imagepng" className="" />
        </div>
        <div className="">
          <h1 className="font-Poppin text-[48px] leading-[72px] text-black">
            Contact
          </h1>
        </div>
        <div>
          <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
            Home - <span> Contact</span>
          </h1>
        </div>
      </div>
      {/* main page */}

      <div className="py-6 flex flex-col gap-[50px] justify-center">
        <div className="flex flex-col items-center justify-center xs:text-2xl  md:text-3xl">
          <h1 className="font-Poppin text-3xl">
            Get In Touch With Us
          </h1>
          <p className=" font-Poppin text-center text-base  text-[#9F9F9F]  xs:text-sm xs:px-4 md:text-base">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="grid xs:grid-cols-1 md:grid-cols-2 ">
          <div className="left flex flex-col item-center md:ml-[40%]  justify-center px-[40px] gap-[70px] xs:gap-10  lg:justify-around ">
            <div>
              <div className="flex gap-[28px] items-center ">
                <Image src={Vector5} alt="Imagepng" className="" />{" "}
                <span className="text-black font-Poppin text-2xl">
                  Address
                </span>
              </div>
              <p className=" text-[#000000] font-Poppin pl-[50px] text-[16px] leading-[24px]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>

            <div>
              <div className="flex gap-[28px]">
                <Image src={Bsx} alt="Imagepng" className="" />{" "}
                <span className="text-black font-Poppin text-[24px] leading-[36px]">
                  Phone
                </span>
              </div>
              <p className=" text-[#000000] font-Poppin pl-[50px] text-[16px] leading-[24px]">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <div className="flex gap-[28px]">
                <Image src={Clock} alt="Imagepng" className=" md:w-[30px] md:h-[30px]" />{" "}
                <span className="text-black font-Poppin text-2xl">
                  Working Time
                </span>
              </div>
              <p className=" text-[#000000] font-Poppin pl-[50px] text-base">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          <div className=" flex flex-col xs:ml-10 md:ml-0">
            <div className="  flex flex-col gap-[30px] xs:gap-3 xs:py-6   md:p-3 ">
              <h1 className="font-Poppin text-base text-black">
                Your Name
              </h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="abc"
                className="py-[10px] px-[20px] rounded-[10px] border border-[#9F9F9F] bg-[#FFFFFF] md:w-[400px]"
              />
            </div>
            <div className="flex flex-col gap-[30px] xs:gap-3 xs:py-6  md:p-3">
              <h1 className="font-Poppin text-base text-black">
                Email address
              </h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Abc@def.com"
                className="font-Poppin py-[10px] px-[20px] text-base rounded-[10px] border border-[#9F9F9F] bg-[#FFFFFF] md:w-[400px] "
              />
            </div>
            <div className="flex flex-col gap-[30px] xs:gap-3 xs:py-6  md:p-3">
              <h1 className="font-Poppin text-base text-black">
                Subject
              </h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="This is an optional"
                className="font-Poppin py-[10px] px-[20px] text-base rounded-[10px] border border-[#9F9F9F] bg-[#FFFFFF] md:w-[400px]"
              />
            </div>
            <div className="flex flex-col gap-[30px] xs:gap-3 xs:py-6  md:p-3">
              <h1 className="font-Poppin text-base text-black">
                Message
              </h1>
              <textarea
                name=""
                id=""
                placeholder="Hi! i wouldd like to ask about"
                className=" font-Poppin py-[10px] px-[20px] text-base rounded-[10px] border border-[#9F9F9F] bg-[#FFFFFF] md:w-[400px]"
              ></textarea>
            </div>
            <div className="w-[237px] h-[48px] font-Poppin text-black rounded-[15px] border border-[#000000] text-center py-[10px]  xs:ml-6 md:ml-4 ">
              Sbumit
            </div>
          </div>
        </div>
      </div>

      <SubFooter />
    </div>
  );
}

export default page;
