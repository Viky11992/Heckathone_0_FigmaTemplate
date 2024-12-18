import React from "react";
import Image from "next/image";
import Sofa from "../../../public/Rocket single seater 1.png";
import Group9 from "../../../public/Group 9.png";
import Group8 from "../../../public/Group 8.png";
import Trentan from "../../../public/Trenton modular sofa_3 1.png";
import Granite from "../../../public/Granite dining table with dining chair 1.png";
import Musk from "../../../public/Mask group.png";
import Musk1 from "../../../public/Mask group (1).png";
import AsguardSofa from "../../../public/Asgaard sofa 1.png";
import Rectangle13 from "../../../public/Rectangle 13.png";
import Group37 from "../../../public/Group 37.png";
import Rectangle14 from "../../../public/Rectangle 14 (2).png";
import Rectangle15 from "../../../public/Rectangle 15 (2).png";
import Imagepng from "../../../public/Rectangle 17.png";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="w-[1440px] h-[900px] bg-[#FBEBB5] flex items-center justify-between xs:w-full xs:h-auto xs:flex-col xs:justify-between md:w-full md:h-au md:flex-row md:justify-evenly">
        <h1 className="w-[440px] h-[276px]  font-poppin text-[64px] leading-[96px] pt-[40px] ml-[202px]   xs:text-6xl xs:m-2 xs:px-6 xs:text md:w-auto md:text-6xl  ">
          Rocket single seater
          <p className="font-Poppin text-[24px] leading-[36px] pt-[10px] underline xs:text-lg">
            Shop Now
          </p>
        </h1>

        <div>
          <Image src={Sofa} alt="" className="" />
        </div>
      </div>

      {/* table element */}

      <div className="w-[1440px]   h-[672px] flex justify-around gap-[60px] pl-[70px] m-auto bg-[#FAF4F4] xs:w-full  xs:flex-col  xs:h-auto xs:pl-0 xs:pt-10  md:flex-row md:w-full     ">
        <Image src={Group9} alt="Table" className="" />

        <Image src={Group8} alt="Table" className="" />
      </div>

      {/* top pics for you */}

      <div className="w-[1440px] h-auto flex flex-col items-center justify-evenly xs:w-full sm:w-full ">
        <div>
          <h1 className="font-Poppin text-[36px] leading-[54px] text-center xs:w-full ">
            Top Picks For You
            <p className="font-Poppin text-[16px] leading-[24px] text-center text-[#9F9F9F] xs:px-6">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </p>
          </h1>
        </div>

        <div className="flex items-center px-5 justify-between gap-[80px] xs:w-full xs:flex-col xs:flex-grow-1 sm:w-full sm:flex-row sm:flex-wrap sm:flex-grow-0 xs:h-auto">
          <div className="">
            <Image src={Trentan} alt="Table" />
            <div className="w-[194px] flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Trenton modular sofa_3
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className="">
            <Image src={Granite} alt="Table" />
            <div className="w-[212px]   flex flex-col">
              <h1 className="font-Poppin text-[16px] leading-[24px] text-[#000000]">
                Granite dining table with dining chair
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px]">
                Rs. 25,000.00
              </p>
            </div>
          </div>
          <div className=" ">
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
          <div className=" ">
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
        </div>

        <p className="font-Poppin text-[20px] leading-[30px] underline pt-[90px] xs:text-center">
          View More
        </p>
      </div>

      {/* asgaard sofa */}

      <div className="w-[1440px] h-[700px] flex items-center justify-evenly bg-[#FFF9E5] xs:w-full xs:flex-col-reverse md:flex-row">
        <Image src={AsguardSofa} alt="AsguardSofa" className="" />
        <div className="w-[331px] h-[205px] flex flex-col items-center justify-between">
          <p className="font-Poppin text-[24px] leading-[36px] text-[#000000]">
            New Arrivals
          </p>
          <h1 className="font-Poppin text-[48px] leading-[72px] text-[#000000]">
            Asgaard sofa
          </h1>
          <div className="w-[255px] h-[64px] border border-black flex items-center justify-center">
            <p className="font-Poppin text-[20px] leading-[30px] text-[#000000]">
              Order Now
            </p>
          </div>
        </div>
      </div>

      {/* our-blog */}

      <div className="w-[1440px]  flex flex-col  items-center justify-evenly bg-[#FFFFFF] xs:w-full md:w-full">
        <div className="w-[479px] h-[91px]">
          <h1 className="font-Poppin text-[36px] leading-[54px] text-center ">
            Our Blogs
            <p className="font-Poppin text-[16px] leading-[24px] text-center text-[#9F9F9F]">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </h1>
        </div>

        <div className="flex items-center justify-around  mt-[90px] xs:w-full xs:flex-col xs:gap-24 xs:flex-grow-1 md:w-full md:flex-row md:flex-wrap lg:w-full lg:flex-nowrap lg:gap-5">
          <div className="w-[393px]  flex flex-col  items-center justify-center">
            <Image src={Rectangle13} alt="Rectangle13" />
            <div className="w-[339px] h-[129] flex flex-col items-center justify-between gap-[10px]">
              <h1 className="font-Poppin text-[20px] leading-[30px] text-center text-[#000000]">
                Going all-in with millennial design
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px] underline text-center">
                Read More
              </p>
              <Image src={Group37} alt="Group37" className="ml-[30px]" />
            </div>
          </div>

          <div className="w-[393px] h-[393px] flex flex-col gap-[10px] items-center justify-center">
            <Image src={Rectangle14} alt="Rectangle13" />
            <div className="w-[339px] h-[129] flex flex-col items-center justify-between gap-[10px]">
              <h1 className="font-Poppin text-[20px] leading-[30px] text-center text-[#000000]">
                Going all-in with millennial design
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px] underline text-center">
                Read More
              </p>
              <Image src={Group37} alt="Group37" className="ml-[30px]" />
            </div>
          </div>
          <div className="w-[393px] h-auto flex flex-col gap-[10px] items-center justify-center">
            <Image src={Rectangle15} alt="Rectangle13" />
            <div className="w-[339px] h-[129] flex flex-col items-center justify-between gap-[10px]">
              <h1 className="font-Poppin text-[20px] leading-[30px] text-center text-[#000000]">
                Going all-in with millennial design
              </h1>
              <p className="font-Poppin text-[24px] leading-[36px] underline text-center">
                Read More
              </p>
              <Image src={Group37} alt="Group37" className="ml-[30px]" />
            </div>
          </div>
        </div>

        <p className="font-Poppin text-[20px] leading-[30px] underline pt-[90px]">
          View All Post
        </p>
      </div>

      {/* our instagram */}
      <div className="w-[1440px] h-[450px] flex items-center justify-center xs:w-full  md:w-full ">
        <Image
          src={Imagepng}
          alt="Imagepng"
          className="w-[1440] h-[450px] bg-cover bg-center  absolute xs:w-full xs:absolute"
        />
        <div className=" flex items-center justify-center flex-col gap-[30px] relative">
          <h1 className="font-Poppin text-[60px] leading-[90px]">
            Our Instagram
          </h1>
          <p className="font-Poppin text-[20px] leading-[30px]">
            {" "}
            Follow our store on Instagram
          </p>
          <div className="w-[255px] h-[64px] bg-[#FAF4F480] rounded-full border border-[#FAF4F480] flex items-center justify-center">
            <p className="font-Poppin text-[20px] leading-[30px] text-[#000000]">
              Follow Us
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Hero;
