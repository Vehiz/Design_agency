import React from "react";
import HeaderLady1 from "../assets/HeaderLady1.png";
import logos_google from "../assets/logos_google.svg";
import logos_monday from "../assets/logos_monday.png";
import Notion from "../assets/Notion.png";
import Slack from "../assets/Slack.png";
import Trello from "../assets/Trello-logo-blue1.png";

const Hero = () => {
  return (
    <div className="flex flex-col bg-[#D7F5DC] overflow-hidden max-w-[1440px] overflow-hidden h-screen">
      <div className="flex h-[700px] justify-around items-center px-[40px]">
        <div className=" w-[50%] p-[60px] space-y-4">
          <p className="flex text-[#000000] justify-between font-bold text-6xl items-center space-x-6">
            Increase Your
            <br /> Customers Loyalty
            <br /> and Satisfaction
          </p>
          <p className="font-normal font-medium">
            We help businesses like yours earn more customers,
            <br />
            standout from competitors, make more money
          </p>
          <button className="bg-[#20B15A] text-[20px] text-[#FFFFFF] px-[30px] py-[20px] mt-[37px] rounded-[16px]">
            Get Started
          </button>
        </div>
        <div className="w-[672px] h-[560px] justify-center items-center pt-[40px] pr-[40px] mt-[39px]">
          <img className="h-[564px]" src={HeaderLady1} alt="ladyImage" />
        </div>
      </div>
      <div className="flex flex-col h-[135px] justify-center items-center">
        <div className="flex w-[1440px] h-[120px] justify-around items-center overflow-x-auto pl-[115px] pr-[143px] my-8 bg-[#F8FFF9]">
          <img src={logos_google} alt="google" />
          <img src={logos_monday} alt="monday" />
          <img src={Notion} alt="notion" />
          <img src={Slack} alt="slack" />
          <img src={Trello} alt="trello" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
