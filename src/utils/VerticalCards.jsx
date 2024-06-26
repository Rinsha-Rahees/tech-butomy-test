import React from "react";
import { VERTICAL_CARDS } from "./constants";

function VerticalCards() {
  return (
    <ul className="grid grid-cols-5 items-end gap-5 md:gap-10 w-fit h-fit overflow-x-clip">
      {VERTICAL_CARDS.map((card, idx) => (
        <li className="w-24 sm:w-32 md:w-36 lg:w-48 xl:w-64" key={card?.src + "_" + idx}>
          <img src={card?.src} alt="bangquee visa card image" />
        </li>
      ))}
    </ul>
  );
}

export default VerticalCards;
