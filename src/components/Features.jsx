import React from "react";
import { FEATURES, PHONE_APP } from "../utils/constants";

function Features() {
  return (
    <div className="flex justify-between w-full bg-slte-600 py-40 gap-32">
      <div className="flex flex-col gap-16">
        <h1 className="text-7xl leading-snug">
          One app.
          <br />
          One banking.
        </h1>
        <div className="grid grid-cols-2 gap-8 font-semibold">
          {FEATURES.map((feature, idx) => (
            <div className="flex flex-col border-2 p-6 w-[235px] h-[220px] border-[#E8E8E8] rounded-2xl">
              <img
                className="w-[45px]"
                key={feature?.badge + "_" + idx}
                src={feature?.badge}
              />
              <h4 className="leading-5 py-2 text-lg w-1/2">{feature?.title}</h4>
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
