import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Transactions from "./Transactions";
import Savings from "./Savings";
import Notification from "./Notification";
import Tools from "./Tools";

function Home() {
  return (
    <div className="flex flex-col items-center w-full font-semibold">
      <HeroSection />
      <Features />
      <Transactions />
      <Savings/>
      <Notification/>
      <Tools/>
    </div>
  );
}

export default Home;
