import React from "react";

const Navbar = () => {
  return (
    <div className="fixed h-[70px] w-full flex items-center justify-between px-[100px] py-[5px] bg-[#D7F5DC] text-gray-300">
      <div>
        <p className="text-[#000000] text-xl not-italic font-bold leading-normal">
          Design<span className="text-[#F55F1D]">AGENCY</span>
        </p>
      </div>
      <ul className="flex text-[#000000] justify-between font-normal items-center space-x-6">
        <li>Services</li>
        <li>About Us</li>
        <li>Contact Us</li> 
        <li>
          <button className=" text-[#000000] px-4 py-0.5 rounded-md border-2 border-green-300">
            Login
          </button>
        </li>
        <li>
          <button className="bg-[#20B15A] text-[#FFFFFF] px-4 py-1 rounded-md">
            Register
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
