import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-10 sm:py-20 md:py-32 lg:py-40 mt-80">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
          Get in Touch
        </h1>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-[#fff] hover:text-[#1ff]">
            <FaEnvelope size={36} />
          </a>
          <a href="#" className="text-[#fff] hover:text-[#1ff]">
            <FaFacebook size={36} />
          </a>
          <a href="#" className="text-[#fff] hover:text-[#1ff]">
            <FaTwitter size={36} />
          </a>
          <a href="#" className="text-[#fff] hover:text-[#1ff]">
            <FaInstagram size={36} />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
