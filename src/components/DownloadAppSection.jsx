import React from "react";
import {
  APP_STORE,
  DOWNLOAD_APP_BENEFITS,
  GOOGLE_STORE,
  MOBILE_APP,
  TICK_MARK_TRANSPARENT,
} from "../utils/constants";

function DownloadAppSection() {
  return (
    <div className="flex flex-col xl:flex-row justify-center w-full max-w-[75%] bg-[#5BB5A2] text-white rounded-2xl px-6 xl:px-20">
      <div className="flex flex-col items-center text-center xl:text-left gap-5 xl:gap-0 justify-between xl:items-start w-full py-10 xl:py-24">
        <h1 className="text-5xl lg:text-7xl xl:max-w-md">
          One app. One banking.
        </h1>
        <h4 className="text-lg my-5 xl:my-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </h4>
        <ul className="grid xl:grid-cols-2 gap-3">
          {DOWNLOAD_APP_BENEFITS.map((item, idx) => (
            <li key={item + "_" + idx} className="flex gap-4">
              <img src={TICK_MARK_TRANSPARENT} alt="Checklist tick mark" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className="flex m-5 xl:mt-12 gap-4">
          <button>
            <img src={APP_STORE} alt="App store download button" />
          </button>
          <button>
            <img src={GOOGLE_STORE} alt="Google play store download button" />
          </button>
        </div>
      </div>
      <div className="flex flex-col xl:justify-end xl:w-2/3 h-full md:px-20 xl:px-0">
        <img src={MOBILE_APP} alt="Mobile app view" />
      </div>
    </div>
  );
}

export default DownloadAppSection;
