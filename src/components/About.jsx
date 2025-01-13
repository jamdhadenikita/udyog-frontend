import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="w-full h-[70vh] p-20 mt-4 text-white bg-[#231E15]">
        <div className="flex gap-10 items-center justify-around">
          <div className="w-1/3 flex flex-col gap-20">
            <h1 className="font-mono font-semibold text-4xl">
              Find out why we’re best-in-class
            </h1>
            <h3 className="mt-10 font-mono text-2xl">
              End-to-End Solutions for IT Growth, Delivered by Experts.
            </h3>
          </div>
          <div className="w-[1/3] flex flex-col gap-24">
            <div>
              <h1 className="font-mono font-semibold text-3xl">
                Up to 25x ROI
              </h1>
              <h4 className="font-mono mt-2 text-lg">seen by udyog users*</h4>
            </div>
            <div>
              <h1 className="font-mono font-semibold text-3xl">12M+ Users</h1>
              <h4 className="font-mono mt-2 text-lg">of udyog globally</h4>
            </div>
          </div>
          <div className="w-[1/3] flex flex-col gap-24">
            <div>
              <h1 className="font-mono font-semibold text-3xl">
                22 years experience
              </h1>
              <h4 className="font-mono mt-2 text-lg">
                helping businesses sell more
              </h4>
            </div>
            <div>
              <h1 className="font-mono font-semibold text-3xl">
                $1.7K per campaign
              </h1>
              <h4 className="font-mono mt-2 text-lg">generated on average*</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40vh] px-20 py-10 text-white bg-[#231E15]">
        <div className="text-center w-[60vw] ml-40">
          <h1 className="text-4xl font-mono font-semibold">
            Millions of users trust us with their business. You can too.
          </h1>
          <Link to="/signup">
            <button className="mt-10 border border-black text-sm px-6 py-3 font-medium hover-transform rounded-3xl text-white bg-[#006570]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
