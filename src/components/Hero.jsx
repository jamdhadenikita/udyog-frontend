import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="flex items-center justify-center mt-40">
      <div className="text-center w-[65vw]">
        <div className="text-6xl font-bold font-sans">
          End-to-End Solutions for IT Growth,
        </div>
        <div className="text-6xl font-bold tracking-tight font-sans">
          Delivered by Experts.
        </div>
        <div className="text-2xl mt-7 font-sans text-gray-800">
          A trusted B2B platform connecting IT companies with verified vendors
          for hardware, office needs, marketing, legal services, and job
          portals—all in one place.
        </div>
        <button
          className="border border-black text-base px-6 py-3 font-medium hover-transform rounded-3xl mt-7 text-white bg-[#006570]"
          onClick={() => document.getElementById("category")?.scrollIntoView()}
        >
          Explore Categories
        </button>
      </div>
    </div>
  );
};

export default Hero;
