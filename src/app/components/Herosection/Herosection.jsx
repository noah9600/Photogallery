"use client"

import React from "react";

const handleDownload = () => {
  const confirmed = window.confirm("Are you sure you want to download your resume?");

  if (confirmed) {
    const link = document.createElement("a");
    link.href = "/path/to/your/resume.pdf";
    link.download = "your_resume_filename.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    console.log("Download canceled");
  }
};

const HeroSection = () => {
  return (
    <section className="mb-5">
      <div className="flex items-center justify-center mt-15 mb-15">
        <div className="col-span-8 place-self-center text-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-serif m16">
            Tony Hon
          </h1>
          <p className="text-[#ADB7BE] text-base font-serif sm:text-lg mb-6 lg:text-xl">
            Photographer, Video editer, Marketer
          </p>
          <div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
