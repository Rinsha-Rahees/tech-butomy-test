import React from "react";
import { TICK_MARK_LIGHT, TOOLS, TOOLS_SUPPORT } from "../utils/constants";

function Tools() {
  return (
    <div className="flex flex-col items-center w-full">
        <div className="flex items-end w-full py-40 gap-32 max-w-[75%]">
      <div className="flex flex-col w-full">
        <img className="mb-10" src={TOOLS_SUPPORT} alt="Tools support company logos" />
        <span className="text-xl my-5">Tools</span>
        <h1 className="text-7xl max-w-sm">Seemless integration</h1>
        <h4 className="text-lg mt-10 leading-relaxed max-w-lg">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </h4>
      </div>
      <ul className="flex flex-col w-2/3 gap-3">
        {TOOLS.map((tools, idx) => (
          <li key={tools + "_" + idx} className="flex gap-4">
            <img src={TICK_MARK_LIGHT} alt="Checklist tick mark" />
            <p>{tools}</p>
          </li>
        ))}
      </ul>
    </div>
    <hr className="w-full" />
    </div>
  );
}

export default Tools;
