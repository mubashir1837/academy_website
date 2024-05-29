import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import TimeSection from "./components/TimeSection";
import ContactSection from "./components/ContactSection";
import Academies from "./components/Academies";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-yellow-100">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HomeSection />
        <Academies />
        <AboutSection />
        <TimeSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Page;
