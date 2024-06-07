import React from "react";
import {
  TICK_MARK_LIGHT,
  NOTIFICATION,
  CHECKLIST,
} from "../utils/constants";
import {CustomButtonRightArrow} from "../utils/CustomButton"

function Notification() {
  return (
    <div className="flex justify-between items-center w-full pt-32 max-w-[75%]">
      <div className="flex flex-col">
        <span className="text-xl mb-5">Notifications</span>
        <h1 className="text-7xl">Stay notified</h1>
        <h4 className="text-lg my-10 leading-relaxed max-w-md">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </h4>
        <ul className="flex flex-col gap-3 mb-10">
          {CHECKLIST.map((checklist, idx) => (
            <li key={checklist + "_" + idx} className="flex gap-4">
              <img src={TICK_MARK_LIGHT} alt="Checklist tick mark" />
              <p>{checklist}</p>
            </li>
          ))}
        </ul>
        <CustomButtonRightArrow>Compare Cards</CustomButtonRightArrow>
      </div>
      <img src={NOTIFICATION} alt="Notification Screenshot" />
    </div>
  );
}

export default Notification;
