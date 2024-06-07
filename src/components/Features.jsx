import React from "react";
import { FEATURES, PHONE_APP } from "../utils/constants";

function Features() {
  return (
    <div className="flex flex-col items-center xl:items-start text-center xl:flex-row xl:justify-between xl:text-left w-full py-32 lg:py-40 gap-16 xl:gap-32 max-w-[75%]">
      <div className="flex flex-col items-center xl:items-start gap-16">
        <h1 className="text-5xl lg:text-7xl">
          One app. <br /> One banking.
        </h1>
        <div className="grid items-center md:grid-cols-3 xl:grid-cols-2 gap-2 lg:gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature?.badge + "_" + idx}
              className="flex flex-col items-center lg:items-start border-2 p-6 w-fit h-fit lg:w-[235px] lg:h-[220px] border-[#E8E8E8] rounded-2xl">
              <img className="w-[45px]" src={feature?.badge} />
              <h4 className="leading-5 py-2 text-lg lg:w-1/2">{feature?.title}</h4>
              <p className=" text-sm">{feature?.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        className="w-fit h-fit"
        src={PHONE_APP}
        alt="banquee mobile app image"
      />
    </div>
  );
}

export default Features;
