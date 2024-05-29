"use client"

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import emailjs from 'emailjs-com';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_o8zn1tz', // Replace with your EmailJS service ID
      'template_uciluog', // Replace with your EmailJS template ID
      formData,
      'Qu1_z0rAa6vQSffqg' // Replace with your EmailJS user ID
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormData({
        name: "name",
        email: "email",
        message: "message"
      });
    }, (error) => {
      alert('Failed to send message, please try again later.');
    });
  };

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
      <section className="text-gray-600 body-font bg-yellow-100 flex items-center justify-center ">
        <div className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section " id="contact-form">
          <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4 ">Contact Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 py-4 text-lg text-gray-900">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                  Send Message ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
