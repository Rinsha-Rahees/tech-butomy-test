import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Transactions from "./Transactions";

function Home() {
  return (
    <div className="flex flex-col items-center w-full font-semibold">
      <HeroSection />
      <Features />
      <Transactions />
    </div>
  );
}

export default Home;
