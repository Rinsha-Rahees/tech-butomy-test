import React from "react";
import {
  TICK_MARK,
  TRANSACTIONS,
  TRANSACTION_CHECKLIST,
} from "../utils/constants";

function Transactions() {
  return (
    <div className="flex justify-center bg-[#E8F2EE] w-full pt-32">
      <div className="flex justify-between items-start w-full max-w-[75%]">
        <div className="flex flex-col">
          <h1 className="text-7xl">Send & receive money instantly</h1>
          <h4 className="text-xl my-10 leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </h4>
          <ul className="flex flex-col gap-3">
            {TRANSACTION_CHECKLIST.map((checklist, idx) => (
              <li 
              key={checklist + "_" + idx}
              className="flex gap-4">
                <img src={TICK_MARK} alt="Checklist tick mark" />
                <p>{checklist}</p>
              </li>
            ))}
          </ul>
        </div>
        <img className="" src={TRANSACTIONS} alt="Transactions Screenshot" />
      </div>
    </div>
  );
}

export default Transactions;
