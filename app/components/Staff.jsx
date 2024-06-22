import React from "react";
import Image from "next/image";

const Staff = () => {
  return (
    <section id="staff" className="py-10 sm:py-20 md:py-32 lg:py-40 ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-white">
        Teachers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Course items */}
          <div className="flex flex-col items-center bg-[#4f8892] rounded-lg p-6">
          <Image src="/images/ejaz.png" alt="Profile Image" width={100} height={100} className="rounded-full" />
            <h2 className="text-lg font-semibold mb-2 text-white">Ejaz Saqi</h2>
            <p className="text-sm text-white">Chemistry</p>
          </div>
          <div className="flex flex-col items-center bg-[#4f8892] rounded-lg p-6">
          <Image src="/images/nawaz.png" alt="Profile Image" width={100} height={100} className="rounded-full" />
            <h2 className="text-lg font-semibold mb-2 text-white">M Nawaz Sharif</h2>
            <p className="text-sm text-white">Physics</p>
          </div>
          <div className="flex flex-col items-center bg-[#4f8892] rounded-lg p-6">
          <Image src="/images/hadii.png" alt="Profile Image" width={100} height={100} className="rounded-full" />
            <h2 className="text-lg font-semibold mb-2 text-white">Muhammad Hadi</h2>
            <p className="text-sm text-white">Biology</p>
          </div>
          <div className="flex flex-col items-center bg-[#4f8892] rounded-lg  p-6">
          <Image src="/images/muneer.png" alt="Profile Image" width={100} height={100} className="rounded-full " />
            <h2 className="text-lg font-semibold mb-2 text-white">Muneer Ahmed</h2>
            <p className="text-sm text-white">Mathematics</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Staff;
