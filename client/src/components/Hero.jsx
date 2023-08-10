import React from "react";
import HeaderLady1 from "../assets/HeaderLady1.png";
import logos_google from "../assets/logos_google.svg";
import logos_monday from "../assets/logos_monday.png";
import Notion from "../assets/Notion.png";
import Slack from "../assets/Slack.png";
import Trello from "../assets/Trello-logo-blue1.png";

const Hero = () => {
  return (
    <div className="flex flex-col bg-[#D7F5DC] w-full h-screen">
      <div className="flex h-[700px] justify-between items-center px-8">
        <div className="space-y-4">
          <p className="flex text-[#000000] justify-between font-bold text-6xl items-center space-x-6">
            Increase Your Customers Loyalty and Satisfaction
          </p>
          <p className="font-normal font-medium">
            We help businesses like yours earn more customers,
            <br />
            standout from competitors, make more money
          </p>
          <button className="bg-[#20B15A] text-[#FFFFFF] px-4 py-1 rounded-md">
            Get Started
          </button>
        </div>
        <div>
          <img src={HeaderLady1} alt="ladyImage" />
        </div>
      </div>
      <div className="flex justify-center space-x-20 content-between py-8 my-8 bg-[#F8FFF9]">
        <img src={logos_google} alt="google" />
        <img src={logos_monday} alt="monday" />
        <img src={Notion} alt="notion" />
        <img src={Slack} alt="slack" />
        <img src={Trello} alt="trello" />
      </div>
    </div>
  );
};

export default Hero;
