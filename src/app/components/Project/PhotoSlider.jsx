"use client"

import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";

const images = [
  { src: "/images/a.jpeg", alt: "Image 1" },
  { src: "/images/b.jpg", alt: "Image 2" },
  { src: "/images/c.jpg", alt: "Image 3" },
  { src: "/images/d.jpg", alt: "Image 4" },
  { src: "/images/l.jpg", alt: "Image 5" },
  { src: "/images/h.jpg", alt: "Image 6" },
  { src: "/images/i.jpg", alt: "Image 7" },
  { src: "/images/j.jpg", alt: "Image 8" },
  { src: "/images/k.jpg", alt: "Image 9" },
];

const PhotoSlider = () => {
  const [sliderOpen, setSliderOpen] = useState(false);

  const openSlider = () => setSliderOpen(true);
  const closeSlider = () => setSliderOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSlider();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="bg-white hover:bg-primary-600 m-auto font-bold text-black py-2.5 px-5 rounded-lg"
          type="button"
          onClick={openSlider}
        >
          CHECK MY WORK
        </button>
      </div>

      {sliderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeSlider}
          ></div>
          <div className="lg:w-1/2 md:w-1/2 ">
            <Splide
              options={{
                type: "fade",
                width: "100%",
                autoHeight: true,
                gap: "1rem",
                pagination: false,
                arrows: true,
                keyboard: false, // Set to true if you want keyboard navigation
              }}
            >
            
              {images.map((image, index) => (
                <SplideSlide key={index} className="w-full">
                  <div
                    className="cursor-pointer w-full"
                    onClick={closeSlider}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={640}
                      height={427}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
            
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoSlider;
