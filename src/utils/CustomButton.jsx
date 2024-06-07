import React from "react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function CustomButton({ className,children }) {
  return (
    <button className={"p-2 px-4 rounded-lg text-white bg-[#5BB5A2] "+className}>
      {children}
    </button>
  );
}

export function CustomButtonRightArrow({ className,children }) {
  return (
    <button className={"flex items-center gap-4 text-lg text-[#5BB5A2] "+className}>{children}<ArrowRightIcon className="w-6"/></button>
  );
}

export default CustomButton;
