import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import Staff from "./components/Staff";
import TimeSection from "./components/TimeSection";
import ContactSection from "./components/ContactSection";
import Academies from "./components/Academies";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0e47] text-white">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HomeSection />
        <Academies />
        <Staff />
        <TimeSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Page;
