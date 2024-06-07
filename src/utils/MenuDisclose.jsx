import React from "react";
import CustomButton from "../utils/CustomButton";
import DropDownMenu from "../utils/DropDownMenu";
import { XMarkIcon } from "@heroicons/react/16/solid";

function MenuDisclose({ menuOpen, setMenuOpen }) {
  return (
    <>
      {menuOpen && (
        <div className="flex flex-col text-lg absolute top-0 right-0 bg-white p-5 rounded-xl shadow-lg">
          <div className="flex justify-end w-full">
            <XMarkIcon className="w-6 text-[#5BB5A2]" onClick={() => setMenuOpen(false)} />
          </div>
          <div className="flex flex-col p-5">
            <ul className="flex flex-col gap-5">
              <button>
                <li>Features</li>
              </button>
              <button>
                <DropDownMenu className="rounded-lg">Compare</DropDownMenu>
              </button>
              <button>
                <li>Support</li>
              </button>
              <button>
                <DropDownMenu>Bolg</DropDownMenu>
              </button>
              <button className="text-[#5BB5A2]">Login</button>
              <CustomButton className="text-base">Open Account</CustomButton>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuDisclose;
