import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import TimeSection from "./components/TimeSection";
import ContactSection from "./components/ContactSection";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#463f96] to-[#1db9b9]">
       <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HomeSection />
      <AboutSection />
      <TimeSection />
      <ContactSection />
    </div>
    </main>
  );
};

export default Page;
