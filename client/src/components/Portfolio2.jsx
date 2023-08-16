import React from "react";
import Screenshot0 from "../assets/Screenshot0.svg";
import Screenshot1 from "../assets/Screenshot1.svg";
import Screenshot2 from "../assets/Screenshot2.svg";
import Screenshot3 from "../assets/Screenshot3.svg";

const Portfolio2 = () => {
  return (
    <div>
      <div className="grid justify-center">
        <div className="m-10">
          <p className="text-[#20B15A] py-4">OUR PORTFOLIO</p>
          <p className="text-[#000000] text-[30px] font-semibold leading-[32px]">
            We provide the perfect solution
            <br/> to your business growth
          </p>
        </div>
        <div className=" flex w-[1200px] flex-wrap justify-center place-content-center px-1">
          <div className="w-[400px] mr-[40px] mt-[60px]">
            <img className="" src={Screenshot0} alt="" />
            <p className="text-[23px] font-semibold mt-[40px]">Digital Marketing Agency Website</p>
            <p>
              This is a website for a client who want to acheive their goals and
              meet their
              <br /> user needs while also increasing their reach. Across all
              platforms. This is a<br /> website rebrand
            </p>
          </div>
          <div className="w-[400px] mt-[60px]">
            <img className="" src={Screenshot1} alt="" />
            <p className="text-[23px] font-semibold mt-[40px]">Digital Marketing Agency Website</p>
            <p>
              This is a website for a client who want to acheive their goals and
              meet their
              <br /> user needs while also increasing their reach. Across all
              platforms. This is a<br /> website rebrand
            </p>
          </div>
          <div className="w-[400px] mr-[40px]">
            <img src={Screenshot2} alt="" />
            <p  className="text-[23px] font-semibold mt-[40px]">Digital Marketing Agency Website</p>
            <p>
              This is a website for a client who want to acheive their goals and
              meet their
              <br /> user needs while also increasing their reach. Across all
              platforms. This is a<br /> website rebrand
            </p>
          </div>
          <div className="w-[400px]" >
            <img className='mt-[125px]' src={Screenshot3} alt="" />
            <p  className="text-[23px] font-semibold mt-[40px]">Digital Marketing Agency Website</p>
            <p>
              This is a website for a client who want to acheive their goals and
              meet their
              <br /> user needs while also increasing their reach. Across all
              platforms. This is a<br /> website rebrand
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
