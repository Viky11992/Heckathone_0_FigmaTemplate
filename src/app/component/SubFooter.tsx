import React from "react";

function SubFooter() {
  return (
    <div>
      <div className="w-[1440px] h-auto flex items-center justify-around bg-[#FAF4F4] xs:w-full xs:flex-col md:w-full md:flex-row md:py-4 md:my-5 ">
        <div className="w-[376px] h-[108px] flex flex-col  ">
          <h1 className="font-[500] text-[32px] leading-[48px] ">
            Free Delivery
          </h1>
          <p className="font-[400] text-[20px] leading-[30px] text-[#9F9F9F] ">
         
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-[376px] h-[108px]  ">
          <h1 className="font-[500] text-[32px] leading-[48px]">
            90 Days Returny
          </h1>
          <p className="font-[400] text-[20px] leading-[30px] text-[#9F9F9F]">
            
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-[376px] h-[108px]  ">
          <h1 className="font-[500] text-[32px] leading-[48px]">
            Secure Payment
          </h1>
          <p className="font-[400] text-[20px] leading-[30px] text-[#9F9F9F]">
           
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
