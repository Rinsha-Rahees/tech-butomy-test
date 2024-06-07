import React from "react";
import {APP_STORE, DOWNLOAD_APP_BENEFITS, GOOGLE_STORE, MOBILE_APP, TICK_MARK_TRANSPARENT} from "../utils/constants"

function DownloadAppSection() {
  return (
    <div className="flex justify-center w-full max-w-[75%] bg-[#5BB5A2] text-white rounded-2xl px-20">
      <div className="flex flex-col justify-between items-start w-full py-24">
      <h1 className="text-7xl max-w-md">One app. One banking.</h1>
        <h4 className="text-lg my-10 leading-relaxed max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </h4>
        <ul className="grid grid-cols-2 gap-3">
        {DOWNLOAD_APP_BENEFITS.map((item, idx) => (
          <li key={item + "_" + idx} className="flex gap-4">
            <img src={TICK_MARK_TRANSPARENT} alt="Checklist tick mark" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <div className="flex mt-12 gap-4">
        <button><img src={APP_STORE} alt="App store download button" /></button>
        <button><img src={GOOGLE_STORE} alt="Google play store download button" /></button>
      </div>
      </div>
      <div className="flex flex-col justify-end w-2/3 h-full">
      <img src={MOBILE_APP} alt="Mobile app view" />
      </div>

    </div>
  );
}

export default DownloadAppSection;
