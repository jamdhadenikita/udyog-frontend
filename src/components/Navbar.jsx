import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full fixed z-50 top-0 flex justify-between px-10 py-4">
      <Link to="/">
        <div className="logo text-2xl font-semibold font-serif text-[#006570]">
          udyog
        </div>
      </Link>
      <div className="flex gap-4">
        <button
          className="mr-4 text-base font-semibold"
          onClick={() => document.getElementById("about")?.scrollIntoView()}
        >
          About
        </button>
        <button
          className="mr-8 base font-semibold"
          onClick={() => document.getElementById("contact")?.scrollIntoView()}
        >
          Contact
        </button>
        <Link to="/login">
          <button className="border border-black text-sm px-6 py-3 font-medium hover-transform rounded-3xl">
            Log In
          </button>
        </Link>
        <Link to="/signup">
          <button className="border border-black text-sm px-6 py-3 font-medium hover-transform rounded-3xl text-white bg-[#006570]">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
//#FFE01B
