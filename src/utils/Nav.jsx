import React from "react";
import DropDownMenu from "../utils/DropDownMenu";

function Nav({className}) {
  return (
    <ul className={"flex items-center gap-8 text-lg "+className}>
      <button><li>Features</li></button>
      <button><DropDownMenu className="rounded-lg bg-[#F8F8F8]">Compare</DropDownMenu></button>
      <button><li>Support</li></button>
      <button><DropDownMenu>Bolg</DropDownMenu></button>
    </ul>
  );
}

export default Nav;
