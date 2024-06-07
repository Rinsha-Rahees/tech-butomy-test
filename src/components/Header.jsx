import React from "react";
import Nav from "../utils/Nav";
import CustomButton from "../utils/CustomButton";

function Header() {
  return (
    <div className="flex justify-center items-center w-full py-3 bg-white fixed z-10 font-semibold">
      <div className="flex justify-between items-center w-full max-w-[85%]">
        <h3 className=" font-bold text-[32px] text-[#5BB5A2]">banquee.</h3>
        <Nav/>
        <div className="flex items-center gap-6 text-lg">
          <button className="text-[#5BB5A2]">Login</button>
          <CustomButton className="text-base">Open Account</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
