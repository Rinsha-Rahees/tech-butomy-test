import React from "react";
import DropDownMenu from "./DropDownMenu";

function Nav() {
  return (
    <ul className="flex items-center gap-4 font-semibold">
      <li>Features</li>
      <DropDownMenu className="rounded-lg bg-[#F8F8F8]">Compare</DropDownMenu>
      <li>Support</li>
      <DropDownMenu>Bolg</DropDownMenu>
    </ul>
  );
}

export default Nav;
