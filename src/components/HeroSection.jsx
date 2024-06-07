import React from "react";
import CustomButton, { CustomButtonRightArrow } from "../utils/CustomButton";
import VerticalCards from "../utils/VerticalCards";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#E8F2EE] w-full">
      <div className="flex flex-col items-center pt-32 lg:pt-40 pb-10 lg:pb-20 w-full">
        <span className="text-lg">Features</span>
        <h1 className="text-5xl lg:text-7xl leading-relaxed">All in one card.</h1>
        <h4 className="text-xl text-center leading-relaxed px-2 md:px-0">
          Senectus et netus et malesuada fames ac turpis.
          <br />
          Sagittis vitae et leo duis ut diam.
        </h4>
        <div className="flex flex-col gap-5 xl:flex-row xl:gap-0 items-center justify-between xl:w-1/4 mt-10">
          <CustomButton className="text-lg">Open Account</CustomButton>
          <CustomButtonRightArrow>Compare Cards</CustomButtonRightArrow>
        </div>
      </div>
      <VerticalCards/>
    </div>
  );
}

export default HeroSection;
