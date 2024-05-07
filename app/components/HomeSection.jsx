import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="relative py-40">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-500">

          <Image src="/images/logo.png" alt="Profile Image" width={100} height={100} className="rounded-full" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-center mb-8">Allama Iqbal Science Academy </h1>
        <p className="text-lg text-center">Join a community of scholars and thinkers at Allama Iqbal Science Academy, where every idea has the potential to change the world</p>
      </div>
    </section>
  );
};

export default HomeSection;
