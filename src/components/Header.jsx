import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="flex justify-center items-center w-full py-4 fixed z-10">
      <div className="flex justify-between items-center w-full max-w-[85%]">
        <h3 className=" font-bold text-[32px] text-[#5BB5A2]">banquee.</h3>
        <Nav/>
        <div className="font-semibold">
          <span className="text-[#5BB5A2]">Login</span>
          <button className="p-2 px-4 ml-8 rounded-lg text-white bg-[#5BB5A2]">
            Open Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
