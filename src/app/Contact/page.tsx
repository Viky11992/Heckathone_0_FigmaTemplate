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
        className=" w-[1440] h-[316px] bg-cover bg-center  absolute xs:w-full "
      />

      <div className="w-[1440] h-[316px] relative flex flex-col mr-[420px] items-center justify-center xs:w-full md:w-full">
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

      <div className="w-[1440px] h-auto flex flex-col gap-[50px] justify-center xs:w-full md:full ">
        <div className="flex flex-col items-center justify-center xs:w-full xs:text-2xl md:w-full md:text-3xl">
          <h1 className="font-Poppin text-[36px] leading-[54px]">
            Get In Touch With Us
          </h1>
          <p className="w-[644px] h-[48px] font-Poppin text-center text-[16px] leading-[24px] text-[#9F9F9F] xs:w-full xs:text-xs xs:px-4 md:text-sm">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex justify-evenly  xs:w-full xs:flex-col  md:flex-row md:justify-evenly ">
          <div className="left w-[393px] h-[537px] flex flex-col item-center  justify-center px-[40px] gap-[70px] xs:gap-10  lg:w-full lg:justify-around ">
            <div>
              <div className="flex gap-[28px] items-center ">
                <Image src={Vector5} alt="Imagepng" className="" />{" "}
                <span className="text-black font-Poppin text-[24px] leading-[36px]">
                  Address
                </span>
              </div>
              <p className="text-[#000000] font-Poppin pl-[50px] text-[16px] leading-[24px]">
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
              <p className="text-[#000000] font-Poppin pl-[50px] text-[16px] leading-[24px]">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </p>
            </div>

            <div>
              <div className="flex gap-[28px]">
                <Image src={Clock} alt="Imagepng" className="" />{" "}
                <span className="text-black font-Poppin text-[24px] leading-[36px]">
                  Working Time
                </span>
              </div>
              <p className="text-[#000000] font-Poppin pl-[50px] text-[16px] leading-[24px]">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          <div className="w-[531px] h-[734px]   flex flex-col gap-[40px] xs:w-full md:w-full">
            <div className="w-[530px] h-[121px]  flex flex-col gap-[30px] xs:w-full xs:p-6 md:w-full md:p-0">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
                Your Name
              </h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="abc"
                className="w-[528px] font-Poppin h-[75px] py-[20px] px-[20px] rounded-[10px] border border-[#9F9F9F] bg-[#FFFFFF]  xs:w-full md:w-[528px]"
              />
            </div>
            <div className="w-[530px] h-[121px] flex flex-col gap-[30px] xs:w-full xs:p-6 md:p-0">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
                Email address
              </h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="Abc@def.com"
                className="w-[528px] h-[75px] font-Poppin py-[20px] px-[20px] rounded-[10px] border border-[#9F9F9F] bg-[#FFFFFF] xs:w-full md:w-[528px]"
              />
            </div>
            <div className="w-[530px] h-[121px] flex flex-col gap-[30px] xs:w-full xs:p-6 md:p-0">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
                Subject
              </h1>
              <input
                type="text"
                name=""
                id=""
                placeholder="This is an optional"
                className="w-[528px] h-[75px] font-Poppin py-[20px] px-[20px] rounded-[10px] border border-[#9F9F9F] bg-[#FFFFFF] xs:w-full  md:w-[528px]"
              />
            </div>
            <div className="w-[528px] h-[166px]  flex flex-col gap-[30px] xs:w-full xs:p-6 md:p-0">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-black">
                Message
              </h1>
              <textarea
                name=""
                id=""
                placeholder="Hi! i wouldd like to ask about"
                className="w-[527px] h-[120px] font-Poppin py-[20px] px-[20px] rounded-[10px] border border-[#9F9F9F] bg-[#FFFFFF] xs:w-full md:w-[528px]"
              ></textarea>
            </div>
            <div className="w-[237px] h-[48px] font-Poppin text-black rounded-[15px] border border-[#000000] text-center py-[10px]  xs:ml-6 md:ml-0">
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
