import React from "react";
import {CARDS} from "../utils/constants"
import CustomButton from "../utils/CustomButton"

function Cards() {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[75%] pt-40">
      <span className="text-xl my-5">Account</span>
      <h1 className="text-7xl">
        Perfect card <br /> for your needs.
      </h1>
      <h4 className="text-lg mt-10 leading-relaxed max-w-lg">
        Senectus et netus et malesuada fames ac turpis. <br />
        Sagittis vitae et leo duis ut diam.
      </h4>
      <img className="mt-14" src={CARDS} alt="Cards Collection" />
      <div className="flex justify-between pt-12 w-1/3 ga">
      <CustomButton>Open Account</CustomButton>
      <button className="p-2 px-4 border-2 border-[#E8E8E8] rounded-lg">Compare Cards</button>
      </div>
      
    </div>
  );
}

export default Cards;
