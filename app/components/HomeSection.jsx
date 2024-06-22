import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="relative py-40">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-500">

          <Image src="/images/logo.png" alt="Profile Image" width={200} height={200} className="rounded-full px-1" />
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold t text-center mt-6">Allama Iqbal Science Academy </h1>
        <p className="text-lg text-center mt-4 mx-auto max-w-lg">Join a community of scholars and thinkers at Allama Iqbal Science Academy, where every idea has the potential to change the world</p>
      </div>
    </section>
  );
};

export default HomeSection;
