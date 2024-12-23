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
// w-[1440px] h-[900px]
function Hero() {
  return (
    <div className="flex flex-col  ">
      <div className="bg-[#FBEBB5] flex items-center  xs:flex-col xs:justify-around md:flex-row md:justify-evenly">
        <div className="  bg-green-400">
          <h1 className="font-poppin text-4xl xs:text-2xl md:text-4xl lg:text-6xl leading-[1.2]">
            Rocket Single <br /> Seater
          </h1>
          <p className="font-poppin text-lg xs:text-base underline pt-2">
            Shop Now
          </p>
        </div>

        <div className="flex items-center justify-center xs:w-[70%] md:w-[50%] lg:w-auto">
          <Image src={Sofa} alt="Sofa" className="w-full " />
        </div>
      </div>

      {/* table element */}

      <div className="flex flex-col md:flex-row justify-around items-center gap-6 bg-[#FAF4F4] p-4">
        <Image src={Group9} alt="Table" className="w-full max-w-[300px]" />
        <Image src={Group8} alt="Table" className="w-full max-w-[300px]" />
      </div>

      {/* top pics for you */}

      <div className=" flex flex-col items-center">
        <h1 className="font-poppin text-2xl md:text-3xl text-center">
          Top Picks For You
          <p className="font-poppin text-sm md:text-base text-center text-[#9F9F9F] mt-2 px-4">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col items-center">
            <Image
              src={Trentan}
              alt="Trenton modular sofa"
              className="w-full max-w-[300px]"
            />

            <h1 className="font-poppin text-base mt-2">
              Trenton modular sofa_3
            </h1>
            <p className="font-poppin text-lg">Rs. 25,000.00</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={Granite}
              alt="Granite"
              className="w-full max-w-[300px]"
            />

            <h1 className="font-poppin text-base mt-2">
              Granite dining table with dining chair
            </h1>
            <p className="font-poppin text-lg">Rs. 25,000.00</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={Musk} alt="Musk" className="w-full max-w-[300px]" />

            <h1 className="font-poppin text-base mt-2">
              Outdoor bar table and stool
            </h1>
            <p className="font-poppin text-lg">Rs. 25,000.00</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={Musk1} alt="Musk" className="w-full max-w-[300px]" />

            <h1 className="font-poppin text-base mt-2">
              Plain console with teak mirror
            </h1>
            <p className="font-poppin text-lg">Rs. 25,000.00</p>
          </div>
        </div>

        <p className="font-Poppin text-[20px] leading-[30px] underline pt-[90px] xs:text-center">
          View More
        </p>
      </div>

      {/* asgaard sofa */}

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFF9E5] p-4">
        <Image
          src={AsguardSofa}
          alt="Asgaard Sofa"
          className="w-full max-w-[400px]"
        />
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 md:ml-6">
          <p className="font-poppin text-lg">New Arrivals</p>
          <h1 className="font-poppin text-3xl md:text-4xl">Asgaard Sofa</h1>
          <button className="border border-black px-4 py-2 mt-4">
            Order Now
          </button>
        </div>
      </div>

      {/* our-blog */}

      <div className="flex flex-col items-center bg-white p-4">
        
          <h1 className="font-poppin text-2xl md:text-3xl text-center ">
            Our Blogs
            <p className="font-poppin text-sm md:text-base text-center text-[#9F9F9F] mt-2">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </h1>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center gap-2">
            <Image src={Rectangle13} alt="Blog Image" className="w-full max-w-[300px]"/>
            
              <h1 className="font-poppin text-base text-center mt-2">
                Going all-in with millennial design
              </h1>
              <p className="font-poppin text-sm underline text-center">
                Read More
              </p>
              <Image src={Group37} alt="Group37" className="w-full max-w-[200px]" />
           
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={Rectangle14} alt="Blog Image" className="w-full max-w-[300px]"/>
            
              <h1 className="font-poppin text-base text-center mt-2">
                Going all-in with millennial design
              </h1>
              <p className="font-poppin text-sm underline text-center">
                Read More
              </p>
              <Image src={Group37} alt="Group37" className="w-full max-w-[200px]" />
           
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={Rectangle15} alt="Blog Image" className="w-full max-w-[300px]"/>
            
              <h1 className="font-poppin text-base text-center mt-2">
                Going all-in with millennial design
              </h1>
              <p className="font-poppin text-sm underline text-center">
                Read More
              </p>
              <Image src={Group37} alt="Group37" className="w-full max-w-[200px]" />
           
          </div>

          
          
        </div>
        <p className="font-Poppin text-[20px] leading-[30px] underline mt-8">
          View All Post
        </p>
      </div>

      {/* our instagram */}
      <div className="flex flex-col items-center justify-center py-16 bg-white px-4">
  
  <h1 className="text-4xl font-bold text-black text-center md:text-5xl lg:text-6xl">
    Our Instagram
  </h1>

  <p className="mt-4 text-lg text-gray-600 text-center md:text-xl">
    Follow our store on Instagram
  </p>

  <div className="mt-8">
    <button className="px-6 py-3 bg-white shadow-lg rounded-full text-black text-lg font-medium border border-gray-300  md:px-8 md:py-4 md:text-xl">
      Follow Us
    </button>
  </div>
</div>




      
    </div>
  );
}

export default Hero;
