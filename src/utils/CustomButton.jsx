import React from "react";

function CustomButton({ className,children }) {
  return (
    <button className={"p-2 px-4 rounded-lg text-white bg-[#5BB5A2] "+className}>
      {children}
    </button>
  );
}

export default CustomButton;
