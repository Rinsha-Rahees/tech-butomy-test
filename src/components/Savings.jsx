import React from "react";
import { CustomButtonRightArrow } from "../utils/CustomButton";
import { SAVING } from "../utils/constants";

function Savings() {
  return (
    <div className="flex flex-col w-full pt-40 max-w-[75%]">
      <span className="text-xl">Saving Accounts</span>
      <h1 className="text-7xl my-5">
        Organize your <br /> money the right way
      </h1>
      <div className="flex justify-between items-end w-full">
        <h4 className="text-xl max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>
        <CustomButtonRightArrow>All Features</CustomButtonRightArrow>
      </div>
      <div className="flex w-full gap-8">
        {SAVING.map((saving, idx) => (
          <div className="flex flex-col">
            <img
              className="w-44 h-44 mt-24"
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
