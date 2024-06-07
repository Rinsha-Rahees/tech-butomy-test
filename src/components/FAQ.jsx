import React from "react";
import { SUPPORT } from "../utils/constants";
import {CustomButtonRightArrow} from "../utils/CustomButton"
import FAQDisclosure from "../utils/FAQDisclosure";

function FAQ() {
  return (
    <div className="flex justify-between items-start w-full max-w-[75%] pt-40 pb-20">
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-7xl mb-5">Need Help?</h1>
        {SUPPORT.map((support) => (
          <div 
          key={support?.title}
          className="flex items-center gap-4">
            <img className="w-10 h-10" src={support?.src} alt="Phone icon" />
            <div>
              <h3 className="text-lg mt-2">{support?.title}</h3>
              <h4 className="text-sm text-[#1A191E80]">{support?.desc}</h4>
            </div>
          </div>
        ))}
        <CustomButtonRightArrow>Support</CustomButtonRightArrow>
      </div>
      <FAQDisclosure/>
    </div>
  );
}

export default FAQ;
