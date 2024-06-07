import React from "react";
import { FOOTER_ITEMS } from "../utils/constants";

function FooterList() {
  return (
    <div className="flex flex-col w-2/3">
      <ul className="grid grid-cols-4 gap-3">
        {FOOTER_ITEMS?.titles.map((title) => (
          <button className="text-left mb-2">
            <li>{title}</li>
          </button>
        ))}
        {FOOTER_ITEMS?.contents?.map((content) =>
          content?.map((item) => (
            <button className="text-left text-[#1A191E80]">
              <li>{item}</li>
            </button>
          ))
        )}
      </ul>
    </div>
  );
}

export default FooterList;
