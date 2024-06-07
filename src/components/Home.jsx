import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Transactions from "./Transactions";
import Savings from "./Savings";
import Notification from "./Notification";
import Tools from "./Tools";
import Cards from "./Cards";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="flex flex-col items-center w-full font-semibold">
      <HeroSection />
      <Features />
      <Transactions />
      <Savings/>
      <Notification/>
      <Tools/>
      <Cards/>
      <Testimonials/>
    </div>
  );
}

export default Home;
