import React from "react";
import {FEATURES_CARDS, PHONE_APP} from "../utils/constants"

function Features() {
  return (
    <div className="flex justify-between w-full bg-slte-600 my-20 gap-32">
      <div className="flex flex-col gap-16">
        <h1 className="text-7xl leading-snug">
          One app.
          <br />
          One banking.
        </h1>
        <div className="grid grid-cols-2 gap-8 ">
            {FEATURES_CARDS.map((card, idx) => (
                <img 
                key={card + "_" + idx}
                src={card?.src}/>
            ))}
        </div>
      </div>
      <img 
      className="w-fit h-fit"
      src={PHONE_APP} 
      alt="banquee mobile app image" />
    </div>
  );
}

export default Features;
