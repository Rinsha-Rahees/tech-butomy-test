import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";

function Home() {
  return (
    <div className="flex flex-col items-center mt-[74px] w-full">
      <HeroSection />
      <div className="w-full max-w-[75%]">
        <Features />
      </div>
    </div>
  );
}

export default Home;
