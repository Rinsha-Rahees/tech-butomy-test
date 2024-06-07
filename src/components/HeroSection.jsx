import React from "react";
import CustomButton, { CustomButtonRightArrow } from "../utils/CustomButton";
import VerticalCards from "../utils/VerticalCards";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#E8F2EE] w-full">
      <div className="flex flex-col items-center pt-40 pb-20 w-full">
        <span className="text-lg">Features</span>
        <h1 className="text-7xl leading-relaxed">All in one card.</h1>
        <h4 className="text-xl text-center leading-relaxed">
          Senectus et netus et malesuada fames ac turpis.
          <br />
          Sagittis vitae et leo duis ut diam.
        </h4>
        <div className="flex items-center justify-between w-1/4 mt-10">
          <CustomButton className="text-lg">Open Account</CustomButton>
          <CustomButtonRightArrow>Compare Cards</CustomButtonRightArrow>
        </div>
      </div>
      <VerticalCards/>
    </div>
  );
}

export default HeroSection;
