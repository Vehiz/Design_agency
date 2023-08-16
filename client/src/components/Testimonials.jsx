import React from "react";
import Vector from "../assets/Vector.png";
import Vector1 from "../assets/Vector1.png";
import Profilepic from "../assets/profilepic1.png";

const Testimonials = () => {
  return (
    <div className="mt-[80px] overflow-hidden">
      <div className="flex gap-[535px] items-start justify-center">
        <div className="flex h-[200px] flex-col gap-[20px]">
          <p className="text-[#20B15A] ">TESTIMONIALS</p>
          <p className="text-[#000000] text-[30px] font-semibold leading-[32px]">
            See What Our Customer
            <br /> Say About Us
          </p>
        </div>
        <div className="flex gap-[21px]">
          <div className="flex w-[80px] h-[20] justify-center items-center gap-[10px] border-2 border-[#000000] rounded-[100px] py-5">
            <img className="" src={Vector} alt="" />
          </div>
          <div className="flex w-[80px] h-[20] justify-center items-center gap-[10px] border-2 border-[#000000] bg-[#D7F5DC] rounded-[100px]">
            <img src={Vector1} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap rounded-[20px] overflow-x-scroll w-[1500px] overflow-x-auto ">
        <div className=" flex flex-col items-start rounded-[25px] shadow-[0px_4px_4px_0px rgba(0, 0, 0, 0.25);] p-[40px] gap-[20px] ">
          <p>
            Thank You for your service. I am very pleased with the result. I
            have seen exponencial growth in my business and its all thanks to
            your amazing service
          </p>
          <div className="flex">
            <div>
              <img src={Profilepic} alt="" />
            </div>
            <div>
              <p className="font-semibold text-[20px]">Emily Stones</p>
              <p>CEO, Marketing guru</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start shadow p-[40px] gap-[20px] overflow-x-auto">
          <p>
            Thank You for your service. I am very pleased with the result. I
            have seen exponencial growth in my business and its all thanks to
            your amazing service
          </p>
          <div className="flex">
            <div>
              <img src={Profilepic} alt="" />
            </div>
            <div>
              <p className="font-semibold text-[20px]">Emily Stones</p>
              <p>CEO, Marketing guru</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start shadow-lg p-[40px] gap-[20px] overflow-x-auto">
          <p>
            Thank You for your service. I am very pleased with the result. I
            have seen exponencial growth in my business and its all thanks to
            your amazing service
          </p>
          <div className="flex">
            <div>
              <img src={Profilepic} alt="" />
            </div>
            <div>
              <p className="font-semibold text-[20px]">Emily Stones</p>
              <p>CEO, Marketing guru</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start shadow-lg p-[40px] gap-[20px] overflow-x-auto">
          <p>
            Thank You for your service. I am very pleased with the result. I
            have seen exponencial growth in my business and its all thanks to
            your amazing service
          </p>
          <div className="flex">
            <div>
              <img src={Profilepic} alt="" />
            </div>
            <div>
              <p className="font-semibold text-[20px]">Emily Stones</p>
              <p>CEO, Marketing guru</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
