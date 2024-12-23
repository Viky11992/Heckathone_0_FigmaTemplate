import React from "react";

function SubFooter() {
  return (
    <div>
      <div className=" flex items-center justify-around bg-[#FAF4F4] xs:flex-col  md:flex-row py-6 gap-6">
        <div className="w-full max-w-[30%]">
          <h1 className="font-[500] text-2xl ">
            Free Delivery
          </h1>
          <p className="font-normal  text-[#9F9F9F] md:text-2xl text-xl">
         
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-full max-w-[30%] ">
          <h1 className="font-[500]  text-2xl">
            90 Days Returny
          </h1>
          <p className="font-normal md:text-2xl text-xl  text-[#9F9F9F]">
            
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-full max-w-[30%] ">
          <h1 className="font-[500] text-2xl">
            Secure Payment
          </h1>
          <p className="font-normal md:text-2xl text-xl  text-[#9F9F9F]">
           
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
