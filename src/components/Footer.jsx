import React from "react";
import FooterList from "../utils/FooterList";

function Footer() {
  return (
    <div className="flex flex-col w-full max-w-[85%] py-10 font-semibold">
      <div className="flex justify-between pt-8 pb-16">
        <h3 className=" font-bold text-[32px] text-[#5BB5A2]">banquee.</h3>
        <FooterList />
      </div>

      <hr className="w-full" />
      <div className="flex justify-between w-full text-[#1A191E80] text-sm mt-4">
        <p>
          © Made by <span className="text-[#5BB5A2]">Pawel Gola</span> - Powered
          by <span className="text-[#5BB5A2]">Webflow</span>
        </p>
        <div className="flex gap-8">
          <p>Impressum</p>
          <p>Impressum</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
