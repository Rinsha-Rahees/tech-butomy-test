import React from "react";
import { VERTICAL_CARDS } from "../utils/constants";

function VerticalCards() {
  return (
    <ul className="flex w-fit h-fit overflow-x-clip">
      <li className="grid grid-cols-5 items-end gap-10">
        {VERTICAL_CARDS.map((card,idx) => (
          <img
            className=""
            key={card?.src + "_" + idx}
            src={card?.src}
            alt="Card model"
          />
        ))}
      </li>
    </ul>
  );
}

export default VerticalCards;
