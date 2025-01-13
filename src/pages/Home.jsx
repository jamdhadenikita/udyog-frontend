import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
