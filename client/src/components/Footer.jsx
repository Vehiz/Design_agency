import React from "react";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import Istagram from "../assets/istagram.png";

const Footer = () => {
  return (
    <div className="bg-[#00CA72]  w-screen h-[]">
      <div className="flex justify-between justify-around p-10 space-x-5">
        <div className="grid gap-[20px]">
          <p className="font-bold text-[40px]">WEB LOGO</p>
          <p className="">
            Some footer text about the
            <br /> Agency. Just a little description to
            <br /> help people understand you better
          </p>
          <div className="flex justify-between">
            <img src={Facebook} alt="" className="w-[40px] h-[40px]" />
            <img src={Twitter} alt="" className="w-[40px] h-[40px]" />
            <img src={Linkedin} alt="" className="w-[40px] h-[40px]" />
            <div className="flex p-[11px] bg-[#20B15A] flex-col rounded-[100px]">
              <img className='bg-[#20B15A]' src={Istagram} alt="" />
            </div>
          </div>
          <p className="">Copyright Design Agency 2022</p>
        </div>
        <div>
          <p className="font-semibold mb-8 py-4">Quick links</p>
          <div className=" grid gap-[20px]">
            <p>Services</p>
            <p>Portfolio</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="">
          <p className="font-semibold py-4">Address</p>
          <p>
            Design Agency Head Office.
            <br /> Airport Road.
            <br /> United Arab Emirate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
