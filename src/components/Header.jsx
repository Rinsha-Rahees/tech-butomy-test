import React, { useState } from "react";
import Nav from "../utils/Nav";
import CustomButton from "../utils/CustomButton";
import { Bars3Icon } from "@heroicons/react/16/solid";
import MenuDisclose from "../utils/MenuDisclose";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex justify-center items-center w-full py-3 bg-white fixed z-10 font-semibold">
      <div className="flex justify-between items-center w-full max-w-[85%]">
        <h3 className="font-bold text-2xl lg:text-[32px] text-[#5BB5A2]">banquee.</h3>
        <Nav className="hidden lg:flex"/>
        <div className="flex items-center gap-6 text-lg">
          <button className="hidden lg:flex text-[#5BB5A2]">Login</button>
          <CustomButton className="hidden lg:flex text-base">Open Account</CustomButton>
        </div>
        <Bars3Icon className="lg:hidden w-6 text-[#5BB5A2]" onClick={() => setMenuOpen(true)}/>
        <MenuDisclose menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </div>
  );
}

export default Header;
