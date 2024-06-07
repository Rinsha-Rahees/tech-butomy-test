import React from "react";
import { CustomButtonRightArrow } from "../utils/CustomButton";
import { SAVING } from "../utils/constants";

function Savings() {
  return (
    <div className="flex flex-col items-center text-center xl:items-start xl:text-left w-full pt-32 xl:pt-40 max-w-[75%]">
      <span className="text-xl">Saving Accounts</span>
      <h1 className="text-5xl lg:text-7xl my-5">
        Organize your <br /> money the right way
      </h1>
      <div className="flex flex-col gap-4 items-center xl:flex-row xl:gap-0 xl:justify-between xl:items-end w-full">
        <h4 className="text-xl max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
        <CustomButtonRightArrow>All Features</CustomButtonRightArrow>
      </div>
      <div className="grid grid-cols-3 gap-2 xl:flex w-full xl:gap-8 mt-12 xl:mt-24">
        {SAVING.map((saving) => (
          <div
          key={saving?.title}
          className="flex flex-col">
            <img
              className="xl:w-44 xl:h-44 mt-3 xl:mt-0"
              src={saving?.src}
              alt={saving?.title}
            />
            <h3 className="text-lg mt-2">{saving?.title}</h3>
            <h4 className="text-sm text-[#1A191E80]">{saving?.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Savings;
