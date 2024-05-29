"use client"

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <h3 className="text-white text-lg font-semibold">My Website</h3>
          <button
            className="text-white lg:hidden block"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-center w-full lg:w-auto`}
        >
          <Link href="#home">
            <h3 className="text-white text-lg font-semibold mb-4 lg:mb-0 lg:mr-4">
              Home
            </h3>
          </Link>
          <Link href="#about">
            <h3 className="text-white text-lg font-semibold mb-4 lg:mb-0 lg:mr-4">
              About
            </h3>
          </Link>
          <Link href="#time">
            <h3 className="text-white text-lg font-semibold mb-4 lg:mb-0 lg:mr-4">
              Timing
            </h3>
          </Link>
          <Link href="#contact">
            <h3 className="text-white text-lg font-semibold mb-4 lg:mb-0 lg:mr-4">
              Contact
            </h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
