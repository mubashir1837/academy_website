import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center">
          <Link href="#home">
            <h3 className="text-white text-lg font-semibold mb-4 lg:mb-0 lg:mr-4">Home</h3>
          </Link>
          <Link href="#about">
            <h3 className="text-white text-lg font-semibold mb-4 lg:mb-0 lg:mr-4">About</h3>
          </Link>
          <Link href="#time">
           <h3 className="text-white text-lg font-semibold mb-4 lg:mb-0 lg:mr-4">Timing</h3>
          </Link>
          <Link href="contactcontact">
            <h3 className="text-white text-lg font-semibold mb-4 lg:mb-0 lg:mr-4">Contact</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
