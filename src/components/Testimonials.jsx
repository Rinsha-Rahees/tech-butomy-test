import React from "react";
import { RATING, TESTIMONIALS } from "../utils/constants";

function Testimonials() {
  return (
    <div className="flex flex-col items-center text-center xl:text-left w-full max-w-[75%] py-28 xl:py-40">
      <span className="text-xl my-5">Testimonials</span>
      <div className="flex flex-col items-center gap-5 xl:gap-0 xl:flex-row xl:justify-between xl:items-end">
        <h1 className="text-5xl lg:text-7xl max-w-2xl">
          People all over the world use banko.
        </h1>
        <div className="flex items-center gap-2">
          <img className="w-8" src={RATING} alt="Rating star icon" />
          <p>Rated <span className="text-[#5BB5A2]">4.8/5</span> from over 1000 users
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-full h-fit mt-10 xl:mt-16" src={TESTIMONIALS} alt="User rating and testimonials"/>
      </div>
    </div>
  );
}

export default Testimonials;
