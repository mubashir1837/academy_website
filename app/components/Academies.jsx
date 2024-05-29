"use client"

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const images = [
  "/images/naza2.jpg",
  "/images/naza.jpg",
  "/images/ssf.png",
  "/images/tilte.jpg",
  "/images/naza.jpg",
  "/images/ssf.png"
];

const Academies = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <Head>
        <title>Academics - The Bronx Charter School for Children</title>
      </Head>
      <section className="academicsSection">
        <div className="imageContainer">
          <Image
            src={images[currentImageIndex]} 
            alt="Children studying"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="overlay">
            <h1 className="title">Academics</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academies;
